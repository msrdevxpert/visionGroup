"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";

 const authTokenStr = localStorage.getItem("authToken");
//   const authToken = authTokenStr ? JSON.parse(authTokenStr) : null;
const headers = { Authorization: 'Bearer ' + authTokenStr };

interface Service {
  id?: string;
  serviceType: string;
  name: string;
  description: string;
  createdAt?: string;
}

interface ServicesAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  serviceData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const Services_AddForm: React.FC<ServicesAddFormProps> = ({
  mode,
  serviceData,
  fetchTableData,
  onClose,
}) => {
  const [formData, setFormData] = useState<Service>({
    serviceType: "",
    name: "",
    description: "",
  });

  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // Load data initially if editing / viewing / deleting
  useEffect(() => {
    if (mode !== 1 && serviceData) {
      setFormData({ ...serviceData });
    }
  }, [mode, serviceData]);

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
      serviceType: "",
      name: "",
      description: "",
    });
    setMsg("");
    setMsgTyp("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // ADD
      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/services`,
          formData,
          { headers }
        );
        setMsg("Service added successfully!");
        setMsgTyp("success");
      }

      // EDIT
      else if (mode === 2 && formData.id) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/services/${formData.id}`,
          formData,
          { headers }
        );
        setMsg("Service updated successfully!");
        setMsgTyp("success");
      }

      // DELETE (open confirm)
      else if (mode === 3) {
        set_open(true);
        return;
      }

      fetchTableData();
      if (mode === 1) resetForm();
      if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong!");
      setMsgTyp("error");
    }
  };

  const handleDelete = async () => {
    if (!formData.id) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/manage/services/${formData.id}`,
        { headers }
      );

      setMsg("Service deleted successfully!");
      setMsgTyp("success");
      fetchTableData();
      set_open(false);
      if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete service!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add Service";
      case 2:
        return "Edit Service";
      case 3:
        return "Delete Service";
      case 4:
        return "View Service";
      default:
        return "Service";
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
      {msg && <div ref={msgRef}>{msg}</div>}

      <h4 className="card-title mb-4">{getFormTitle()}</h4>

      <form onSubmit={handleSubmit}>
        {/* Service Type */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Service Type:</label>
          <div className="col-md-8">
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="form-select"
              disabled={mode === 3 || mode === 4}
              required
            >
              <option value="">Select</option>
              <option value="SOLAR">SOLAR</option>
              <option value="WIND">WIND</option>
              <option value="HYDRO">HYDRO</option>
            </select>
          </div>
        </div>

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
              disabled={mode === 3 || mode === 4}
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
        Are you sure you want to delete this service?
      </ConfirmDialog>
    </div>
  );
};
