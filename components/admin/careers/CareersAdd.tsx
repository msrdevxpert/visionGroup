"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";

interface Career {
  id?: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: string;
  createdAt?: string;
}

interface CareersAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  careerData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const Careers_AddForm: React.FC<CareersAddFormProps> = ({
  mode,
  careerData,
  fetchTableData,
  onClose,
}) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

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

  const [formData, setFormData] = useState<Career>({
    title: "",
    department: "",
    location: "",
    jobType: "",
    description: "",
  });

  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== 1 && careerData) {
      setFormData({ ...careerData });
    }
  }, [mode, careerData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      department: "",
      location: "",
      jobType: "",
      description: "",
    });
    setMsg("");
    setMsgTyp("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const headers = {
      Authorization: authToken ? `Bearer ${authToken}` : "",
    };

    try {
      // ADD
      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/careers`,
          formData,
          { headers }
        );
        setMsg("Career added successfully!");
        setMsgTyp("success");
      }

      // EDIT
      else if (mode === 2) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/careers/${formData.id}`,
          formData,
          { headers }
        );
        setMsg("Career updated successfully!");
        setMsgTyp("success");
      }

      // DELETE
      else if (mode === 3) {
        set_open(true);
        return;
      }

      fetchTableData();
      if (mode === 1) resetForm();
      // if (onClose) onClose();
    } catch (err) {
      console.error(err);
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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/careers/${formData.id}`,
        { headers }
      );

      setMsg("Career deleted successfully!");
      setMsgTyp("success");
      fetchTableData();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete career!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add Career";
      case 2:
        return "Edit Career";
      case 3:
        return "Delete Career";
      case 4:
        return "View Career";
      default:
        return "Career";
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
        {/* Title */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Title:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode === 3 || mode === 4}
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
              disabled={mode === 3 || mode === 4}
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
              className="form-control"
              disabled={mode === 3 || mode === 4}
              required
            />
          </div>
        </div>

        {/* Job Type */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Job Type:</label>
          <div className="col-md-8">
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="form-select"
              disabled={mode === 3 || mode === 4}
              required
            >
              <option value="">Select</option>
              <option value="FULL_TIME">FULL TIME</option>
              <option value="PART_TIME">PART TIME</option>
              <option value="INTERNSHIP">INTERNSHIP</option>
              <option value="CONTRACT">CONTRACT</option>
            </select>
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
              className="form-control"
              disabled={mode === 3 || mode === 4}
              required
            />
          </div>
        </div>

        {mode !== 4 && (
          <Button type="submit" variant="primary">
            {buttonTitle()}
          </Button>
        )}

        {mode === 1 && (
          <Button
            type="button"
            variant="secondary"
            className="mx-2"
            onClick={resetForm}
          >
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
        Are you sure you want to delete this career?
      </ConfirmDialog>
    </div>
  );
};
