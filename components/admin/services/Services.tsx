"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
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

import { mkConfig, generateCsv, download } from "export-to-csv";
import dynamic from "next/dynamic";

import type { MRT_Cell } from "material-react-table";
import { Services_AddForm } from "./ServicesAdd";

// ⛔ avoid SSR issue
const MaterialReactTable = dynamic(
  () => import("material-react-table").then((m) => m.MaterialReactTable),
  { ssr: false }
);

// ====== TYPES ======================
type Service = {
  id?: string;
  serviceType: string;
  name: string;
  description: string;
  createdAt: string;
};

// ====== PAGE ======================
export default function ServicesAdmin() {
  const [tableData, setTableData] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] =
    useState<Record<string, string>>({});

  const [modalOpen, setModalOpen] = useState<{
    open: boolean;
    mode: number;
    rowData: Service | null;
  }>({ open: false, mode: 0, rowData: null });

  const API =
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/services`;

  // ===== LOAD DATA =========
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const json = await res.json();
      setTableData(json?.data || []);
    } catch (err) {
      setError("Failed to fetch services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ===== COLUMNS ===========
  const columns = useMemo(
    () => [
      { accessorKey: "serviceType", header: "Service Type" },
      { accessorKey: "name", header: "Service Name" },
      { accessorKey: "description", header: "Description" },
      { accessorKey: "createdAt", header: "Created At" },
    ],
    []
  );

  // ===== CSV EXPORT =========
  const csvConfig = mkConfig({ useKeysAsHeaders: true });

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(tableData);
    download(csvConfig)(csv);
  };

  // ===== VALIDATION =========
  const validateRequired = (value: string) => !!value?.length;

  const getCommonEditTextFieldProps = useCallback(
    (cell: MRT_Cell<Service>) => ({
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
        const isValid = validateRequired(e.target.value);

        if (!isValid) {
          setValidationErrors({
            ...validationErrors,
            [cell.id]: `${cell.column.columnDef.header} is required`,
          });
        } else {
          delete validationErrors[cell.id];
          setValidationErrors({ ...validationErrors });
        }
      },
    }),
    [validationErrors]
  );

  // ===== ROW SAVE ===========
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }: any) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      setTableData([...tableData]);
      exitEditingMode();
    }
  };

  const handleCancelRowEdits = () => setValidationErrors({});

  // ===== DELETE LOCAL ONLY FOR NOW =====
  const handleDeleteRow = (row: any) => {
    if (!confirm(`Delete "${row.getValue("name")}" ?`)) return;
    tableData.splice(row.index, 1);
    setTableData([...tableData]);
  };

  return (
    <div>
      <h2>Services Admin</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <MaterialReactTable
        columns={columns}
        data={tableData}
        state={{ isLoading: loading }}
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        muiTableContainerProps={{
          sx: {
            maxWidth: "100%",
            overflowX: "auto",
          },
        }}
        renderTopToolbarCustomActions={() => (
          <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={() =>
                setModalOpen({ open: true, mode: 1, rowData: null })
              }
            >
              Add Service
            </Button>

            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={handleExportData}
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
                    rowData: row.original as Service,
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
                    rowData: row.original as Service,
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
        mode: 3,                      // <<--- DELETE MODE
        rowData: row.original as Service,
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
        onClose={() =>
          setModalOpen({ open: false, mode: 0, rowData: null })
        }
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
             <Services_AddForm
               mode={modalOpen.mode}            // 1=Add, 2=Edit, 3=Delete, 4=View
               serviceData={modalOpen.rowData || undefined} // row data from table
               fetchTableData={loadData}        // refresh table after add/edit/delete
               onClose={() => setModalOpen({ open: false, mode: 0, rowData: null })}
             />
           )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
