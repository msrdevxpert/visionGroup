"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../../shared/ConfirmDialog";

interface FAQ {
  id?: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number | "";
}

interface FAQAddFormProps {
  mode: number; // 1=Add, 2=Edit, 3=Delete, 4=View
  faqData?: FAQ;
  fetchTableData: () => void;
  onClose?: () => void;
}

export const FAQ_AddForm: React.FC<FAQAddFormProps> = ({
  mode,
  faqData,
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
const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FAQ>({
    question: "",
    answer: "",
    category: "",
    isActive: true,
    displayOrder: "",
  });

  const [msg, setMsg] = useState("");
  const [msgTyp, setMsgTyp] = useState("");
  const [open, set_open] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);

  // Load data in Edit / View
  useEffect(() => {
    if (mode !== 1 && faqData) {
      setFormData({ ...faqData });
    }
  }, [mode, faqData]);

  useEffect(() => {
    if (msg) msgRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      name === "isActive"
        ? value === "true"
        : name === "displayOrder"
        ? value === "" ? "" : Number(value)
        : value,
  }));
};


  const resetForm = () => {
    setFormData({
      question: "",
      answer: "",
      category: "",
      isActive: true,
      displayOrder: "",
    });
    setMsg("");
    setMsgTyp("");
  };

  const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };

  // SUBMIT
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (mode === 1) {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/admin`,
        {
          ...formData,
          displayOrder: formData.displayOrder === "" ? 0 : formData.displayOrder,
        },
        { headers }
      );
      setMsg("FAQ added successfully");
      setMsgTyp("success");
    } 
    else if (mode === 2 && formData.id) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/admin/${formData.id}`,
        {
          ...formData,
          displayOrder: formData.displayOrder === "" ? 0 : formData.displayOrder,
        },
        { headers }
      );
      setMsg("FAQ updated successfully");
      setMsgTyp("success");
    } 
    else if (mode === 3) {
      set_open(true);
      setLoading(false);
      return;
    }

    fetchTableData();
    if (mode === 1) resetForm();
  } catch (err) {
    console.error(err);
    setMsg("Something went wrong!");
    setMsgTyp("error");
  } finally {
    setLoading(false);
  }
};


  // CONFIRMED DELETE
const handleDelete = async () => {
  if (!formData.id) return;

  setLoading(true);

  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/admin/${formData.id}`,
      { headers }
    );

    setMsg("FAQ deleted successfully");
    setMsgTyp("success");
    fetchTableData();
    set_open(false);
  } catch (err) {
    console.error(err);
    setMsg("Failed to delete FAQ!");
    setMsgTyp("error");
  } finally {
    setLoading(false);
  }
};


  const getFormTitle = () => {
    switch (mode) {
      case 1:
        return "Add FAQ";
      case 2:
        return "Edit FAQ";
      case 3:
        return "Delete FAQ";
      case 4:
        return "View FAQ";
      default:
        return "FAQ";
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
        {/* Question */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Question:</label>
          <div className="col-md-8">
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleInputChange}
              className="form-control"
              disabled={mode === 3 || mode === 4}
              required
            />
          </div>
        </div>

        {/* Answer */}
        <div className="row mb-3">
          <label className="col-md-3 form-label">Answer:</label>
          <div className="col-md-8">
            <textarea
              name="answer"
              value={formData.answer}
              onChange={handleInputChange}
              className="form-control"
              rows={4}
              disabled={mode === 3 || mode === 4}
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
              className="form-control"
              disabled={mode === 3 || mode === 4}
              required
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
              disabled={mode === 3 || mode === 4}
            />
          </div>
        </div>

        {/* Status */}
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
          <Button type="submit" variant="primary" disabled={loading}>
  {loading ? (
    <>
      <span className="spinner-border spinner-border-sm me-2"></span>
      Processing...
    </>
  ) : (
    buttonTitle()
  )}
</Button>

        )}

      {mode === 1 && (
  <Button
    type="button"
    variant="secondary"
    className="mx-2"
    onClick={resetForm}
    disabled={loading}
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
        Are you sure you want to delete this FAQ?
      </ConfirmDialog>
    </div>
  );
};
