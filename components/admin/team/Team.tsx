"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import { Edit, Delete, Visibility } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import dynamic from "next/dynamic";

import { mkConfig, generateCsv, download } from "export-to-csv";
import Team_AddForm from "./TeamAdd";




const MaterialReactTable = dynamic(
  () => import("material-react-table").then((m) => m.MaterialReactTable),
  { ssr: false }
);

type Team = {
  memberId?: number;
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
};

export default function TeamAdmin() {
  const [tableData, setTableData] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState<{
    open: boolean;
    mode: number;
    rowData: Team | null;
  }>({ open: false, mode: 0, rowData: null });

  const GET_API =
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/team`;

  // ========= LOAD DATA =========
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch(GET_API);
      const json = await res.json();
      setTableData(json?.data || []);
    } catch (err) {
      setError("Failed to load team");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ========= COLUMNS =========
  const columns = useMemo(
    () => [
      { accessorKey: "fullName", header: "Full Name" },
      { accessorKey: "designation", header: "Designation" },
      { accessorKey: "department", header: "Department" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "displayOrder", header: "Order" },
      { accessorKey: "isActive", header: "Active" },
      { accessorKey: "createdAt", header: "Created At" },
    ],
    []
  );

  // ========= CSV EXPORT =========
  const csvConfig = mkConfig({ useKeysAsHeaders: true });

  const handleExport = () => {
    const csv = generateCsv(csvConfig)(tableData);
    download(csvConfig)(csv);
  };

  return (
    <div>
      <h2>Team Admin</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <MaterialReactTable
        columns={columns}
        data={tableData}
        state={{ isLoading: loading }}
        enableEditing
        muiTableContainerProps={{
          sx: { maxWidth: "100%", overflowX: "auto" },
        }}
        renderTopToolbarCustomActions={() => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button
              variant="contained"
              onClick={() =>
                setModalOpen({ open: true, mode: 1, rowData: null })
              }
            >
              Add Member
            </Button>

            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={handleExport}
            >
              Export All
            </Button>
          </Box>
        )}
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Tooltip title="Edit">
              <IconButton
                color="success"
                onClick={() =>
                  setModalOpen({
                    open: true,
                    mode: 2,
                    rowData: row.original as Team,
                  })
                }
              >
                <Edit />
              </IconButton>
            </Tooltip>

            <Tooltip title="View">
              <IconButton
                color="info"
                onClick={() =>
                  setModalOpen({
                    open: true,
                    mode: 4,
                    rowData: row.original as Team,
                  })
                }
              >
                <Visibility />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton
                color="error"
                onClick={() =>
                  setModalOpen({
                    open: true,
                    mode: 3,
                    rowData: row.original as Team,
                  })
                }
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />

      {/* MODAL */}
      <Dialog
        open={modalOpen.open}
        onClose={() => setModalOpen({ open: false, mode: 0, rowData: null })}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Button
            onClick={() =>
              setModalOpen({ open: false, mode: 0, rowData: null })
            }
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon style={{ color: "black" }} />
          </Button>
        </DialogTitle>

        <DialogContent>
          {modalOpen.open && (
            <Team_AddForm
              mode={modalOpen.mode}
              teamData={modalOpen.rowData || undefined}
              fetchTableData={loadData}
              onClose={() =>
                setModalOpen({ open: false, mode: 0, rowData: null })
              }
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
