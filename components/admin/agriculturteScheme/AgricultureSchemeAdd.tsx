"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ConfirmDialog from "../../shared/ConfirmDialog";

interface Scheme {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  subsidyDetails: string;
  createdAt: string;
}

interface Props {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  schemeData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

export default function Scheme_AddForm({
  mode,
  schemeData,
  fetchTableData,
  onClose,
}: Props) {
  const [formData, setFormData] = useState<Scheme>({
    id: "",
    name: "",
    description: "",
    eligibility: "",
    subsidyDetails: "",
    createdAt: new Date().toISOString(),
  });

  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const msgRef = useRef<HTMLDivElement>(null);

  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);

  useEffect(() => {
    if (mode !== 1 && schemeData) {
      setFormData({
        id: schemeData.id || "",
        name: schemeData.name || "",
        description: schemeData.description || "",
        eligibility: schemeData.eligibility || "",
        subsidyDetails: schemeData.subsidyDetails || "",
        createdAt: schemeData.createdAt || new Date().toISOString(),
      });
    }
  }, [mode, schemeData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tokenRaw = localStorage.getItem("authToken");
    const token = (() => {
      try {
        return tokenRaw ? JSON.parse(tokenRaw) : null;
      } catch {
        return tokenRaw;
      }
    })();

    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
    };

    try {
      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/schemes`,
          formData,
          { headers }
        );

        setMsg("Scheme added successfully!");
        setMsgTyp("success");
      }

      if (mode === 2) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/schemes/${formData.id}`,
          formData,
          { headers }
        );

        setMsg("Scheme updated successfully!");
        setMsgTyp("success");
      }

      if (mode === 3) {
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
    const tokenRaw = localStorage.getItem("authToken");
    const token = (() => {
      try {
        return tokenRaw ? JSON.parse(tokenRaw) : null;
      } catch {
        return tokenRaw;
      }
    })();

    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
    };

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/schemes/${formData.id}`,
        { headers }
      );

      setMsg("Scheme deleted successfully!");
      setMsgTyp("success");

      fetchTableData();
      set_open(false);
      onClose?.();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete scheme!");
      setMsgTyp("error");
    }
  };

  return (
    <div className="container">
      {msg && (
        <div
          ref={msgRef}
          className={`alert ${
            msgTyp === "error" ? "alert-danger" : "alert-success"
          }`}
        >
          {msg}
        </div>
      )}

      <h4 className="card-title mb-4">
        {mode === 1
          ? "Add Scheme"
          : mode === 2
          ? "Edit Scheme"
          : mode === 3
          ? "Delete Scheme"
          : "View Scheme"}
      </h4>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Scheme Name:</label>
          <div className="col-md-8">
            <input
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={mode >= 3}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Description:</label>
          <div className="col-md-8">
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Eligibility */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Eligibility:</label>
          <div className="col-md-8">
            <textarea
              className="form-control"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              disabled={mode >= 3}
            />
          </div>
        </div>

        {/* Subsidy Details */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Subsidy Details:</label>
          <div className="col-md-8">
            <textarea
              className="form-control"
              name="subsidyDetails"
              value={formData.subsidyDetails}
              onChange={handleChange}
              disabled={mode >= 3}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          {mode === 1
            ? "Save"
            : mode === 2
            ? "Update"
            : mode === 3
            ? "Delete"
            : "Submit"}
        </button>
      </form>

      {/* CONFIRM DIALOG — same as Team form */}
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
}
