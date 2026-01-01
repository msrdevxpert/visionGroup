"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Download, Delete } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";

interface Project {
  id?: string;
  projectType: string;
  title: string;
  description: string;
  location: string;
  category: string;
  capacityKw: number;
  budget: number;
  status: string;
  createdAt?: string;
  imageUrl?: string;
}

interface FileItem {
  fileId: string;
  fileNm: string;
  fileUri: string;
}

interface ProjectsAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  projectData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const Projects_AddForm: React.FC<ProjectsAddFormProps> = ({
  mode,
  projectData,
  fetchTableData,
  onClose,
}) => {
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



  const [formData, setFormData] = useState<Project>({
    projectType: "",
    title: "",
    description: "",
    location: "",
    category: "",
    capacityKw: 0,
    budget: 0,
    status: "",
  });

  const [doc, set_doc] = useState<FileItem[]>([]);
  const [fileErr_msg, set_fileErr_msg] = useState("");
  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // Load projectData into form when editing/viewing
  useEffect(() => {
    if (mode !== 1 && projectData) {
      setFormData({ ...projectData });
      if (projectData.imageUrl) {
        set_doc([
          {
            fileId: projectData.id || "temp-id",
            fileNm: projectData.imageUrl.split("/").pop() || "image.jpg",
            fileUri: projectData.imageUrl,
          },
        ]);
      }
    }
  }, [mode, projectData]);

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
      projectType: "",
      title: "",
      description: "",
      location: "",
      category: "",
      capacityKw: 0,
      budget: 0,
      status: "",
    });
    set_doc([]);
    setMsg("");
    setMsgTyp("");
  };

  const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const token = localStorage.getItem("authToken");
  const authTokenValue = (() => {
    try {
      return token ? JSON.parse(token) : null;
    } catch {
      return token;
    }
  })();

  const headers = {
    Authorization: authTokenValue ? `Bearer ${authTokenValue}` : "",
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
      fd.append("module", formData.projectType || "Solar");
       fd.append("entityId", "");

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/upload?module=${formData.projectType}`,
          fd,
          { headers }
        );

        if (res.data) {
          fileArr.push({
            fileId: res.data.data.id,
            fileNm: files[i].name,
            fileUri: res?.data.data.fileUrl,
          });
          setFormData((prev) => ({ ...prev, imageUrl:  res?.data.data.fileUrl }));
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
          const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };
    if (!doc[i]?.fileId) return;
    if (!confirm("Are you sure? File cannot be recovered once deleted!")) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/${doc[i].fileId}`,
        { headers }
      );
      set_doc(doc.filter((_, idx) => idx !== i));
    } catch (err) {
      console.error(err);
      set_fileErr_msg("Failed to delete file");
    }
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


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
          const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };
    try {
      if (!authToken) {
        setMsg("User not authenticated!");
        setMsgTyp("error");
        return;
      }

      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/projects`,
          { ...formData },
          { headers }
        );
        setMsg("Project added successfully!");
        setMsgTyp("success");
      } else if (mode === 2) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/projects/${formData.id}`,
          { ...formData },
          { headers }
        );
        setMsg("Project updated successfully!");
        setMsgTyp("success");
      } else if (mode === 3) {
        set_open(true);
        return;
      }

      fetchTableData();
      if (mode === 1) resetForm();
      // if (onClose) onClose();
    } catch (error) {
      console.error(error);
      setMsg("Something went wrong!");
      setMsgTyp("error");
    }
  };

  const handleDelete = async () => {
          const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };
    if (!formData.id) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/projects/${formData.id}`,
        { headers }
      );
      setMsg("Project deleted successfully!");
      setMsgTyp("success");
      fetchTableData();
      // set_open(false);
      // if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete project!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add Project";
      case 2:
        return "Edit Project";
      case 3:
        return "Delete Project";
      case 4:
        return "View Project";
      default:
        return "Project";
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
  <div
    ref={msgRef}
    style={{ color: msgTyp === "success" ? "green" : "red" }}
  >
    {msg}
  </div>
)}
      <h4 className="card-title mb-4">{getFormTitle()}</h4>

      <form onSubmit={handleSubmit}>
        {/* Project Type */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Project Type:</label>
          <div className="col-md-8">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="form-select"
              disabled={mode === 3 || mode === 4}
              required
            >
              <option value="">Select</option>
              <option value="SOLAR">SOLAR</option>
              <option value="CIVIL">CIVIL</option>
              <option value="AGRICULTURE">AGRICULTURE</option>
            </select>
          </div>
        </div>

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

        {/* Location */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Location:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Category:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Capacity */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Capacity (kW):</label>
          <div className="col-md-8">
            <input
              type="number"
              name="capacityKw"
              value={formData.capacityKw}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Budget */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Budget:</label>
          <div className="col-md-8">
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Upload Files:</label>
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
        Are you sure you want to delete this project?
      </ConfirmDialog>
    </div>
  );
};
