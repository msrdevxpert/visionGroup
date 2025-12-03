"use client";

import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Youtube from "react-youtube";
const CommonModal = ({ open, onClose, videoId }) => {
  // Prevent background scroll when modal opens
  console.log(videoId);
  
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#000",
          padding: "0",
          borderRadius: "10px",
          outline: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          width: "80%",
          maxWidth: "850px",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#fff",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* YouTube Video */}
       <Youtube videoId={videoId} />

      </div>
    </Modal>
  );
};

export default CommonModal;
