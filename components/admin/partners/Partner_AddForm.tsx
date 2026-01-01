"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Delete, Download } from "@mui/icons-material";
interface Partner {
  id: string;
  name: string;
  type: string;       // SOLAR, etc
  logoUrl: string;
  websiteUrl: string;
  createdAt: string;
}
interface FileItem {
  fileId: string;
  fileNm: string;
  fileUri: string;
}
interface Props {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  partnerData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

const Partners_AddForm: React.FC<Props> = ({
  mode,
  partnerData,
  fetchTableData,
  onClose,
}) => {
  const [formData, setFormData] = useState<Partner>({
    id: "",
    name: "",
    type: "SOLAR",
    logoUrl: "",
    websiteUrl: "",
    createdAt: new Date().toISOString(),
  });
  const [doc, set_doc] = useState<FileItem[]>([]);
  const [fileErr_msg, set_fileErr_msg] = useState("");

  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const msgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== 1 && partnerData) {
      setFormData({
        id: partnerData.id || "",
        name: partnerData.name || "",
        type: partnerData.type || "SOLAR",
        logoUrl: partnerData.logoUrl || "",
        websiteUrl: partnerData.websiteUrl || "",
        createdAt: partnerData.createdAt || new Date().toISOString(),
      });
   if (partnerData.logoUrl) {
  const lastPart = partnerData.logoUrl.split("/").pop() || "";

  const [fileId, ...rest] = lastPart.split("_");
  const fileNm = rest.join("_");

  set_doc([
    {
      fileId: fileId || "temp-id",
      fileNm: fileNm || lastPart,
      fileUri: partnerData.logoUrl,
    },
  ]);
}

    }
  }, [mode, partnerData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const token = (() => {
    const t = localStorage.getItem("authToken");
    try { return t ? JSON.parse(t) : null; } catch { return t; }
  })();

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      type: "SOLAR",
      logoUrl: "",
      websiteUrl: "",
      createdAt: new Date().toISOString(),
    });
    set_doc([])
    setMsg("");
    setMsgTyp("");
  };
// --------------------------file upload handler --------------------------
  // ---------- File Upload ----------
  const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
     const token = localStorage.getItem("authToken");
  const parsedToken = (() => {
    if (!token) return null;
    try { return JSON.parse(token); } 
    catch { return token; }
  })();

  const headers = {
    Authorization: parsedToken ? `Bearer ${parsedToken}` : "",
  };
    if (mode > 2) return;
    const { files } = e.target;
    if (!files || files.length === 0) return;

    const fileArr: FileItem[] = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 25 * 1024 * 1024) {
        set_fileErr_msg("File size exceeded: 25MB");
        break;
      } else set_fileErr_msg("");

      const fd = new FormData();
      fd.append("file", files[i]);
      fd.append("module", "TEAM");
      if (mode !== 1) fd.append("entityId","");

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/upload?module=TEAM`,
          fd,
          { headers }
        );

        if (res.data?.data?.fileUrl) {
          fileArr.push({
            fileId: res.data.data.id,
            fileNm: files[i].name,
            fileUri:  res?.data.data.fileUrl,
          });

        setFormData((prev) => ({
  ...prev,
  logoUrl:  res?.data.data.fileUrl,
}));
        }
      } catch (err) {
        console.error(err);
        set_fileErr_msg("File upload failed");
      }
    }

    set_doc((prev) => [...prev, ...fileArr]);
  };

  const extractFileId = (uri: string) => {
    if (!uri) return "";
    const name = uri.split("/").pop() || "";
    return name.split("_")[0];
  };

const handleDownload = async (fileUri: string) => {
  const token = localStorage.getItem("authToken");
  const authTokenValue = (() => {
    try { return token ? JSON.parse(token) : null; } catch { return token; }
  })();

  const headers = {
    Authorization: authTokenValue ? `Bearer ${authTokenValue}` : "",
  };

  const fileId = extractFileId(fileUri);
  if (!fileId) return;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/download/${fileId}`,
      { headers, responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));

    const link = document.createElement("a");
    link.href = url;

    // Use original file name from URI
    const fileName = fileUri.split("/").pop() || fileId; // gets "9406ce28-29f4-4ba2-ada9-720602c5c1c1_AgriBlogStandard.jpg"
    link.setAttribute("download", fileName);

    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error(err);
    setMsg("File download failed!");
    setMsgTyp("error");
  }
};


const delete_file = async (i: number) => {
  const token = localStorage.getItem("authToken");
  const parsedToken = (() => {
    try { return token ? JSON.parse(token) : null; } catch { return token; }
  })();

  const headers = {
    Authorization: parsedToken ? `Bearer ${parsedToken}` : "",
  };

  const fileUri = doc[i]?.fileUri;
  if (!fileUri) return;

  const fileId = extractFileId(fileUri);
  if (!fileId) return;

  if (!confirm("Are you sure? File cannot be recovered once deleted!")) return;

  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/${fileId}`,
      { headers }
    );

    set_doc((prev) => prev.filter((_, idx) => idx !== i));
  } catch (err) {
    console.error(err);
    set_fileErr_msg("Failed to delete file");
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: any = { ...formData };
    delete payload.createdAt;

    try {
      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/partners`,
          payload,
          { headers }
        );

        setMsg("Partner added successfully!");
        setMsgTyp("success");
        resetForm();
      }

      else if (mode === 2) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/partners/${formData.id}`,
          payload,
          { headers }
        );

        setMsg("Partner updated successfully!");
        setMsgTyp("success");
      }

      else if (mode === 3) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/partners/${formData.id}`,
          { headers }
        );

        setMsg("Partner deleted successfully!");
        setMsgTyp("success");
      }

      fetchTableData();
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1: return "Add Partner";
      case 2: return "Edit Partner";
      case 3: return "Delete Partner";
      case 4: return "View Partner";
      default: return "Partner";
    }
  };

  const buttonTitle = () => {
    switch (mode) {
      case 1: return "Save";
      case 2: return "Update";
      case 3: return "Delete";
      default: return "Submit";
    }
  };

  return (
    <div className="container">
      {msg && (
        <div
          ref={msgRef}
          className={`alert ${msgTyp === "error" ? "alert-danger" : "alert-success"}`}
        >
          {msg}
        </div>
      )}

      <h4 className="card-title mb-4">{getFormTitle()}</h4>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Name:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
              required
            />
          </div>
        </div>

        {/* Type */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Type:</label>
          <div className="col-md-8">
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            >
              
              <option value="SOLAR">SOLAR</option>
              <option value="CIVIL">CIVIL</option>
              <option value="AGRICULTURE">AGRICULTURE</option>
            </select>
          </div>
        </div>

        {/* Logo URL */}

        <div className="row mb-3">
          <label className="col-md-3 form-label">Logo:</label>
          <div className="col-md-8">
            {mode <= 2 && <input type="file" onChange={uploadFiles} />}
            {fileErr_msg && <p style={{ color: "red" }}>{fileErr_msg}</p>}
           {doc.map((file, i) => {
  const fullFileUrl = file.fileUri;

  return (
    <div key={i} className="d-flex align-items-center my-1">
      <a href={fullFileUrl} target="_blank" rel="noreferrer">
        {file.fileNm}
      </a>
      {mode !== 3 && (
        <>
          {mode < 3 && (
            <Button
              variant="danger"
              size="sm"
              onClick={() => delete_file(i)}
              className="ms-2"
            >
              <Delete />
            </Button>
          )}

          <Button
            type="button"
            variant="success"
            size="sm"
            className="ms-2"
            onClick={() => handleDownload(fullFileUrl)}
          >
            <Download />
          </Button>
        </>
      )}
    </div>
  );
})}
          </div>
        </div>


        {/* Website */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Website URL:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        <Button type="submit" variant="primary">
          {buttonTitle()}
        </Button>
      </form>
    </div>
  );
};

export default Partners_AddForm;
