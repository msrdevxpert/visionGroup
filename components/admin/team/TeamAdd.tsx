"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Delete, Download } from "@mui/icons-material";
import ConfirmDialog from "../../shared/ConfirmDialog";


interface FileItem {
  fileId: string;
  fileNm: string;
  fileUri: string;
}

interface Team {
  memberId: number;
  fullName: string;
  designation: string;
  department: string;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  email: string;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
}

interface Props {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  teamData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

const Team_AddForm: React.FC<Props> = ({ mode, teamData, fetchTableData, onClose }) => {
      const [authToken, setAuthToken] = useState<string | null>(null);
          const [headers, setHeaders] = useState({Authorization:""});
        
          // Safe client-side localStorage access
        useEffect(() => {
      const tokenStr = localStorage.getItem("authToken");
      if (tokenStr) {
        try {
          setAuthToken(JSON.parse(tokenStr)); // if JSON
        } catch {
          setAuthToken(tokenStr); // if plain string
        }
      }
       setHeaders({Authorization: authToken ? `Bearer ${authToken}` : "",})
    }, []);

  const [formData, setFormData] = useState<Team>({
    memberId: 0,
    fullName: "",
    designation: "",
    department: "",
    bio: "",
    photoUrl: "",
    linkedinUrl: "",
    facebookUrl: "",
    twitterUrl: "",
    email: "",
    displayOrder: 0,
    isActive: true,
    createdAt: new Date().toISOString(),
  });

  const [doc, set_doc] = useState<FileItem[]>([]);
  const [fileErr_msg, set_fileErr_msg] = useState("");
  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // ---------- Load team data ----------
  useEffect(() => {
    if (mode !== 1 && teamData) {
      setFormData({
        memberId: teamData.memberId || 0,
        fullName: teamData.fullName || "",
        designation: teamData.designation || "",
        department: teamData.department || "",
        bio: teamData.bio || "",
        photoUrl: teamData.photoUrl || "",
        linkedinUrl: teamData.linkedinUrl || "",
        facebookUrl: teamData.facebookUrl || "",
        twitterUrl: teamData.twitterUrl || "",
        email: teamData.email || "",
        displayOrder: teamData.displayOrder || 0,
        isActive: teamData.isActive ?? true,
        createdAt: teamData.createdAt || new Date().toISOString(),
      });

   if (teamData.photoUrl) {
  const lastPart = teamData.photoUrl.split("/").pop() || "";

  const [fileId, ...rest] = lastPart.split("_");
  const fileNm = rest.join("_");

  set_doc([
    {
      fileId: fileId || "temp-id",
      fileNm: fileNm || lastPart,
      fileUri: teamData.photoUrl,
    },
  ]);
}

    }
  }, [mode, teamData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const resetForm = () => {
    setFormData({
      memberId: 0,
      fullName: "",
      designation: "",
      department: "",
      bio: "",
      photoUrl: "",
      linkedinUrl: "",
      facebookUrl: "",
      twitterUrl: "",
      email: "",
      displayOrder: 0,
      isActive: true,
      createdAt: new Date().toISOString(),
    });
    set_doc([]);
    setMsg("");
    setMsgTyp("");
  };

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
      if (mode !== 1 && formData.memberId) fd.append("entityId","");

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
            photoUrl:  res?.data.data.fileUrl,
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
useEffect(() => {
  console.log("DOC UPDATED =>", doc);
}, [doc]);

console.log(formData);

  // ---------- Submit ----------
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const token = localStorage.getItem("authToken");
  const parsedToken = (() => {
    if (!token) return null;
    try {
      return JSON.parse(token);
    } catch {
      return token;
    }
  })();

  const headers = {
    Authorization: parsedToken ? `Bearer ${parsedToken}` : "",
    // "Content-Type": "application/json",
    // Accept: "application/json",
  };

  const payload = {
    ...formData,
    memberId: Number(formData.memberId) || 0,
    displayOrder: Number(formData.displayOrder) || 0,
  };

  // ❌ do NOT send createdAt
  // delete (payload as any).createdAt;

  try {
    if (mode === 1) {
      // CREATE
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/team`,
        payload,
        { headers }
      );

      setMsg("Team added successfully!");
      setMsgTyp("success");
      resetForm();
    }

    else if (mode === 2) {
      // UPDATE
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/team/${formData.memberId}`,
        payload,
        { headers }
      );

      setMsg("Team updated successfully!");
      setMsgTyp("success");
    }

    else if (mode === 3) {
      set_open(true);
      return;
    }

    fetchTableData();
  } catch (err) {
    console.error(err);
    setMsg("Something went wrong!");
    setMsgTyp("error");
  }
};


  const handleDelete = async () => {
          const token = localStorage.getItem("authToken");
  const parsedToken = (() => {
    if (!token) return null;
    try { return JSON.parse(token); } 
    catch { return token; }
  })();

  const headers = {
    Authorization: parsedToken ? `Bearer ${parsedToken}` : "",
  };
    if (!formData.memberId) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/teams/${formData.memberId}`,
        { headers }
      );
      setMsg("Team deleted successfully!");
      setMsgTyp("success");
      fetchTableData();
      // set_open(false);
      // onClose?.();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete team!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add Team";
      case 2:
        return "Edit Team";
      case 3:
        return "Delete Team";
      case 4:
        return "View Team";
      default:
        return "Team";
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
      {msg && <div ref={msgRef} className={`alert ${msgTyp === "error" ? "alert-danger" : "alert-success"}`}>{msg}</div>}

      <h4 className="card-title mb-4">{getFormTitle()}</h4>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Full Name:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
              required
            />
          </div>
        </div>
        {/* Member Id */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Member Id:</label>
          <div className="col-md-8">
            <input
              type="number"
              name="memberId"
              value={formData.memberId}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
              required
            />
          </div>
        </div>

        {/* Designation */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Designation:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
              required
            />
          </div>
        </div>

        {/* Department */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Department:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Bio:</label>
          <div className="col-md-8">
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Email */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Email:</label>
          <div className="col-md-8">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">LinkedIn URL:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-md-3 form-label">Facebook URL:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="facebookUrl"
              value={formData.facebookUrl}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-md-3 form-label">Twitter URL:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="twitterUrl"
              value={formData.twitterUrl}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Display Order */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Display Order:</label>
          <div className="col-md-8">
            <input
              type="number"
              name="displayOrder"
              value={formData.displayOrder}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Active */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Active:</label>
          <div className="col-md-8 d-flex align-items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleCheckboxChange}
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Upload Photo:</label>
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

        {/* Submit buttons */}
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
        Are you sure you want to delete this team member?
      </ConfirmDialog>
    </div>
  );
};

export default Team_AddForm;
