import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "../../public/images/Alert";
import Success from "../../public/images/Success";

type ConfirmDialogProps = {
  type: "confirm" | "alert" | "success";
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogObj?: any;
  setDialogObj?: (obj: any) => void;
  onConfirm?: () => void;
  setConfirmStatus?: (status: boolean) => void;
  confirmStatus?: boolean;
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  type,
  title,
  children,
  open,
  setOpen,
  dialogObj,
  setDialogObj,
  onConfirm,
  setConfirmStatus,
  confirmStatus,
}) => {
  const handleConfirm = () => {
    if (onConfirm) onConfirm(); // Call the onConfirm callback if provided
    setOpen(false); // Close the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog without confirmation
  };

  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogTitle sx={{ m: 1, p: 2, position: "relative" }}>
        <h2
          className="confirmTitle text-center"
          style={{ fontFamily: "Cursive" }}
        >
          {title}
        </h2>

        {type === "confirm" ? (
          <IconButton
            aria-label="alert-icon"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "red",
            }}
          >
            <i className="mdi mdi-alert-octagon fs-100" title="Alert"></i>
          </IconButton>
        ) : (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon style={{ color: "black" }} />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent className="pb-0">
        {type === "alert" && <Alert />}
        {type === "success" && <Success />}
        <h4 className="confirmContent">{children}</h4>
      </DialogContent>

      {type === "confirm" && (
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            className="btn btn-secondary"
          >
            No
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            className="btn btn-primary"
          >
            Yes
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ConfirmDialog;
