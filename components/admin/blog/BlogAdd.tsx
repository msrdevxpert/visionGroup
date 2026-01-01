"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Download, Delete } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";

interface Blog {
  blogId?: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  isPublished: boolean;
  createdAt?: string;
}

interface FileItem {
  fileId: string;
  fileNm: string;
  fileUri: string;
}

interface BlogAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  blogData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const Blog_AddForm: React.FC<BlogAddFormProps> = ({
  mode,
  blogData,
  fetchTableData,
  onClose,
}) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [headers, setHeaders] = useState({ Authorization: "" });

  const [formData, setFormData] = useState<Blog>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    imageUrl: "",
    author: "",
    isPublished: true,
  });

  const [doc, set_doc] = useState<FileItem[]>([]);
  const [fileErr_msg, set_fileErr_msg] = useState("");
  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // Load auth token
  useEffect(() => {
    const tokenStr = localStorage.getItem("authLogin");
    if (tokenStr) setAuthToken(JSON.parse(tokenStr));
  }, []);

useEffect(() => {
  if (authToken) {
    setHeaders({ Authorization: `Bearer ${authToken}` });
  }
}, [authToken]);


  // Load existing blog data for edit/view/delete
  useEffect(() => {
    if (mode !== 1 && blogData) {
      setFormData({ ...blogData });
      if (blogData.imageUrl) {
        set_doc([
          {
            fileId: blogData.blogId?.toString() || "temp-id",
            fileNm: blogData.imageUrl.split("/").pop() || "image.jpg",
            fileUri: blogData.imageUrl,
          },
        ]);
      }
    }
  }, [mode, blogData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      imageUrl: "",
      author: "",
      isPublished: true,
    });
    set_doc([]);
    setMsg("");
    setMsgTyp("");
  };

  // File upload
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
      fd.append("module", "BLOG");
      fd.append("entityId", "");

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/upload?module=BLOG`,
          fd,
          { headers }
        );

        if (res.data) {
          fileArr.push({
            fileId: res.data.data.id,
            fileNm: files[i].name,
            fileUri:  res?.data.data.fileUrl,
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

  const delete_file = async (i: number) => {
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
    if (!doc[i]?.fileId) return;
    if (!confirm("Are you sure? File cannot be recovered once deleted!")) return;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/files/${doc[i].fileId}`, {
        headers,
      });
      set_doc(doc.filter((_, idx) => idx !== i));
      setFormData({ ...formData, imageUrl: "" });
    } catch (err) {
      console.error(err);
      set_fileErr_msg("Failed to delete file");
    }
  };

  const handleDownload = async (fileUri: string) => {
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
    const fileId = fileUri.split("/").pop()?.split("_")[0];
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
    if (!authToken) {
      setMsg("User not authenticated!");
      setMsgTyp("error");
      return;
    }

    try {
      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/blog`,
          formData,
          { headers }
        );
        setMsg("Blog added successfully!");
        setMsgTyp("success");
        resetForm();
      } else if (mode === 2) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/blog/${formData.blogId}`,
          formData,
          { headers }
        );
        setMsg("Blog updated successfully!");
        setMsgTyp("success");
      } else if (mode === 3) {
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
    if (!formData.blogId) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/blog/${formData.blogId}`,
        { headers }
      );
      setMsg("Blog deleted successfully!");
      setMsgTyp("success");
      fetchTableData();
      if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete blog!");
      setMsgTyp("error");
    } finally {
      set_open(false);
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add Blog";
      case 2:
        return "Edit Blog";
      case 3:
        return "Delete Blog";
      case 4:
        return "View Blog";
      default:
        return "Blog";
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

        {/* Slug */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Slug:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Excerpt:</label>
          <div className="col-md-8">
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Content */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Content:</label>
          <div className="col-md-8">
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
              rows={6}
            />
          </div>
        </div>

        {/* Author */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Author:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              disabled={mode === 3 || mode === 4}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Published */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Published:</label>
          <div className="col-md-8">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
              disabled={mode === 3 || mode === 4}
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Upload Image:</label>
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
        Are you sure you want to delete this blog?
      </ConfirmDialog>
    </div>
  );
};
