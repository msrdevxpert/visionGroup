"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Download, Delete } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";

interface Certification {
  id?: string;
  title: string;
  description: string;
  certificateUrl: string;
  issuedBy: string;
  createdAt?: string;
}

interface FileItem {
  fileId: string;
  fileNm: string;
  fileUri: string;
}

interface CertificationsAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  certificationData?: Certification;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const Certifications_AddForm: React.FC<CertificationsAddFormProps> = ({
  mode,
  certificationData,
  fetchTableData,
  onClose,
}) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [headers, setHeaders] = useState({ Authorization: "" });

  useEffect(() => {
    const tokenStr = localStorage.getItem("authToken");
    if (tokenStr) {
      try {
        setAuthToken(JSON.parse(tokenStr));
      } catch {
        setAuthToken(tokenStr);
      }
    }
  }, []);

  useEffect(() => {
    setHeaders({ Authorization: authToken ? `Bearer ${authToken}` : "" });
  }, [authToken]);

  const [formData, setFormData] = useState<Certification>({
    title: "",
    description: "",
    certificateUrl: "",
    issuedBy: "",
  });

  const [doc, set_doc] = useState<FileItem[]>([]);
  const [fileErr_msg, set_fileErr_msg] = useState("");
  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // Load existing data if editing/viewing
  useEffect(() => {
    if (mode !== 1 && certificationData) {
      setFormData({ ...certificationData });
      if (certificationData.certificateUrl) {
        set_doc([
          {
            fileId: certificationData.id || "temp-id",
            fileNm: certificationData.certificateUrl.split("/").pop() || "certificate.pdf",
            fileUri: certificationData.certificateUrl,
          },
        ]);
      }
    }
  }, [mode, certificationData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      certificateUrl: "",
      issuedBy: "",
    });
    set_doc([]);
    setMsg("");
    setMsgTyp("");
  };

  // File upload
  const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      fd.append("module", "CERTIFICATION");
      fd.append("entityId", "");

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/upload?module=CERTIFICATION`,
          fd,
          { headers }
        );

        if (res.data) {
          fileArr.push({
            fileId: res.data.data.id,
            fileNm: files[i].name,
            fileUri: res?.data.data.fileUrl,
          });
          setFormData((prev) => ({ ...prev, certificateUrl: res.data.data.fileUrl }));
        }
      } catch (err) {
        console.error(err);
        set_fileErr_msg("File upload failed");
      }
    }

    set_doc([...doc, ...fileArr]);
  };

  const extractFileId = (uri: string) => {
    if (!uri) return "";
    const name = uri.split("/").pop() || "";
    return name.split("_")[0];
  };

  const delete_file = async (i: number) => {
    if (!doc[i]?.fileId) return;
    if (!confirm("Are you sure? File cannot be recovered once deleted!")) return;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/files/${doc[i].fileId}`, {
        headers,
      });
      set_doc(doc.filter((_, idx) => idx !== i));
      setFormData({ ...formData, certificateUrl: "" });
    } catch (err) {
      console.error(err);
      set_fileErr_msg("Failed to delete file");
    }
  };

  const handleDownload = async (fileUri: string) => {
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
      link.setAttribute("download", fileUri.split("/").pop() || fileId);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err);
      setMsg("File download failed!");
      setMsgTyp("error");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!authToken) {
        setMsg("User not authenticated!");
        setMsgTyp("error");
        return;
      }

      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/certifications`,
          { ...formData },
          { headers }
        );
        setMsg("Certification added successfully!");
        setMsgTyp("success");
      } else if (mode === 2) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/certifications/${formData.id}`,
          { ...formData },
          { headers }
        );
        setMsg("Certification updated successfully!");
        setMsgTyp("success");
      } else if (mode === 3) {
        set_open(true);
        return;
      }

      fetchTableData();
      if (mode === 1) resetForm();
    } catch (error) {
      console.error(error);
      setMsg("Something went wrong!");
      setMsgTyp("error");
    }
  };

  const handleDelete = async () => {
    if (!formData.id) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/certifications/${formData.id}`,
        { headers }
      );
      setMsg("Certification deleted successfully!");
      setMsgTyp("success");
      fetchTableData();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete certification!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add Certification";
      case 2:
        return "Edit Certification";
      case 3:
        return "Delete Certification";
      case 4:
        return "View Certification";
      default:
        return "Certification";
    }
  };

  const buttonTitle = () => {
    switch (mode) {
      case 1:
        return "Save";
      case 2:
        return "Update";
      case 3:
        return "Delete";
      default:
        return "Submit";
    }
  };

  return (
    <div className="container">
      {msg && (
        <div ref={msgRef} style={{ color: msgTyp === "success" ? "green" : "red" }}>
          {msg}
        </div>
      )}

      <h4 className="card-title mb-4">{getFormTitle()}</h4>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Title:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Description:</label>
          <div className="col-md-8">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Issued By */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Issued By:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="issuedBy"
              value={formData.issuedBy}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Upload Certificate:</label>
          <div className="col-md-8">
            <input
              type="file"
              onChange={uploadFiles}
              style={{ display: mode > 2 ? "none" : "block" }}
            />
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

        {mode !== 4 && (
          <Button type="submit" variant="primary">
            {buttonTitle()}
          </Button>
        )}
        {mode === 1 && (
          <Button type="button" variant="secondary" className="mx-2" onClick={resetForm}>
            Reset
          </Button>
        )}
      </form>

      <ConfirmDialog
        type="confirm"
        title="Confirmation"
        open={open}
        setOpen={set_open}
        onConfirm={handleDelete}
        setConfirmStatus={setConfirmStatus}
        confirmStatus={confirmStatus}
      >
        Are you sure you want to delete this certification?
      </ConfirmDialog>
    </div>
  );
};
