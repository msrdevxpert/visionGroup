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

// 👇 later connect korbe — (Team_AddForm er moto)
import Partner_AddForm from "./Partner_AddForm";

const MaterialReactTable = dynamic(
  () => import("material-react-table").then((m) => m.MaterialReactTable),
  { ssr: false }
);

type Partner = {
  id?: string;
  name: string;
  type: string;
  logoUrl: string;
  websiteUrl: string;
  createdAt: string;
};

export default function PartnersAdmin() {
  const [tableData, setTableData] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState<{
    open: boolean;
    mode: number; // 1:add 2:edit 3:delete 4:view
    rowData: Partner | null;
  }>({ open: false, mode: 0, rowData: null });

  const GET_API =
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/partners`;

  // ========= LOAD DATA =========
  const loadData = async () => {
    try {
      setLoading(true);

      const res = await fetch(GET_API);
      const json = await res.json();

      setTableData(json?.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load partners");
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
      { accessorKey: "name", header: "Name" },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "websiteUrl", header: "Website" },
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
      <h2>Partners Admin</h2>

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
              Add Partner
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
                    rowData: row.original as Partner,
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
                    rowData: row.original as Partner,
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
                    rowData: row.original as Partner,
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
            <Partner_AddForm
              mode={modalOpen.mode}
              partnerData={modalOpen.rowData || undefined}
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
