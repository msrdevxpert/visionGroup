"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";



interface User {
  id?: string;
  username: string;
  fullName: string;
  email: string;
  passwordHash?: string;
  isActive: boolean;
}

interface UsersAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  userData?: any;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const Users_AddForm: React.FC<UsersAddFormProps> = ({
  mode,
  userData,
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

  const [formData, setFormData] = useState<User>({
    username: "",
    fullName: "",
    email: "",
    passwordHash: "",
    isActive: true,
  });

  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // --------------------------
  // LOAD DATA IN EDIT / VIEW
  // --------------------------
  useEffect(() => {
    if (mode !== 1 && userData) {
      setFormData({
        ...userData,
        passwordHash: "", // never show stored password
      });
    }
  }, [mode, userData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "isActive" ? value === "true" : value,
    });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      fullName: "",
      email: "",
      passwordHash: "",
      isActive: true,
    });
    setMsg("");
    setMsgTyp("");
  };

  // --------------------------
  // SUBMIT
  // --------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();
          const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };

    try {
      // --------------------------------
      // ADD USER
      // --------------------------------
      if (mode === 1) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`,
          formData,
          { headers }
        );

        setMsg("User added successfully");
        setMsgTyp("success");
      }

      // --------------------------------
      // EDIT USER
      // --------------------------------
      else if (mode === 2 ) {
        const payload: any = {
          username: formData.username,
          fullName: formData.fullName,
          email: formData.email,
          isActive: formData.isActive,
        };

        // only send password if user typed new one
        if (formData.passwordHash) {
          payload.passwordHash = formData.passwordHash;
        }

        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${formData.id}`,
          payload,
          { headers }
        );

        setMsg("User updated successfully");
        setMsgTyp("success");
      }

      // --------------------------------
      // DELETE USER (ask confirm)
      // --------------------------------
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

  // --------------------------
  // CONFIRMED DELETE
  // --------------------------
  const handleDelete = async () => {
          const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };
    if (!formData.id) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${formData.id}`,
        { headers }
      );

      setMsg("User deleted successfully");
      setMsgTyp("success");
      fetchTableData();
      // set_open(false);
      // if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setMsg("Failed to delete user!");
      setMsgTyp("error");
    }
  };

  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add User";
      case 2:
        return "Edit User";
      case 3:
        return "Delete User";
      case 4:
        return "View User";
      default:
        return "User";
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
        {/* Username */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Username:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode === 3 || mode === 4}
              required
            />
          </div>
        </div>

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
              disabled={mode === 3 || mode === 4}
              required
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
              disabled={mode === 3 || mode === 4}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">
            Password:
            {mode === 2 && (
              <small className="ms-2">(leave blank to keep same)</small>
            )}
          </label>

          <div className="col-md-8">
            <input
              type="password"
              name="passwordHash"
              value={formData.passwordHash}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode === 3 || mode === 4}
              placeholder={
                mode === 1 ? "Enter password" : "Enter new password (optional)"
              }
              {...(mode === 1 ? { required: true } : {})}
            />
          </div>
        </div>

        {/* Active */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Status:</label>
          <div className="col-md-8">
            <select
              name="isActive"
              value={formData.isActive ? "true" : "false"}
              onChange={handleInputChange}
              className="form-select"
              disabled={mode === 3 || mode === 4}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
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
        Are you sure you want to delete this user?
      </ConfirmDialog>
    </div>
  );
};
