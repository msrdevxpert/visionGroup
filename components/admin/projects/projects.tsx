"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Box, Button, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import dynamic from "next/dynamic";
import type { MRT_Cell, MRT_Row, MRT_ColumnDef } from "material-react-table";
import { Projects_AddForm } from "./ProjectsAdd";
 const authTokenStr = localStorage.getItem("authLogin");
  const authToken = authTokenStr ? JSON.parse(authTokenStr) : null;
// Dynamic import to avoid SSR issues
const MaterialReactTable = dynamic(() => import("material-react-table").then((m) => m.MaterialReactTable), { ssr: false });

type Project = {
  id?: string;
  title: string;
  projectType: string;
  location: string;
  category: string;
  capacityKw: number;
  budget: number;
  status: string;
  createdAt: string;
};

export default function ProjectsAdmin() {
  const [tableData, setTableData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [modalOpen, setModalOpen] = useState<{ open: boolean; mode: number; rowData: Project | null }>({ open: false, mode: 0, rowData: null });

  const API = `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/projects`;

  // Load data
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const json = await res.json();
      setTableData(json?.data || []);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Columns
  const columns = useMemo(() => [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "projectType", header: "Project Type" },
    { accessorKey: "location", header: "Location" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "capacityKw", header: "Capacity (kW)" },
    { accessorKey: "budget", header: "Budget" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "createdAt", header: "Created At" },
  ], []);

  // CSV Export
  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  const handleExportData = () => {
    const csvOutput = generateCsv(csvConfig)(tableData);
    download(csvConfig)(csvOutput);
  };

  // Validation
  const validateRequired = (value: string) => !!value?.length;
const getCommonEditTextFieldProps = useCallback(
  (cell: MRT_Cell<Project>) => ({
    error: !!validationErrors[cell.id],
    helperText: validationErrors[cell.id],
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
      const isValid = validateRequired(event.target.value);

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


  // Row edit
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }: any) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      setTableData([...tableData]);
      exitEditingMode();
    }
  };

  const handleCancelRowEdits = () => setValidationErrors({});

  const handleDeleteRow = (row: any) => {
    if (!confirm(`Delete "${row.getValue("title")}" ?`)) return;
    tableData.splice(row.index, 1);
    setTableData([...tableData]);
  };

  return (
    <div style={{  }}>
      <h2>Projects Admin</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

<div >
  <MaterialReactTable
    columns={columns}
    data={tableData}
    state={{ isLoading: loading }}
    enableEditing
    onEditingRowSave={handleSaveRowEdits}
    onEditingRowCancel={handleCancelRowEdits}
    renderTopToolbarCustomActions={() => (
      <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button
          variant="contained"
          onClick={() => setModalOpen({ open: true, mode: 1, rowData: null })}
        >
          Add Project
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
          <IconButton color="success" onClick={() => setModalOpen({ open: true, mode: 2, rowData: row.original as Project })}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="View">
          <IconButton color="info" onClick={() => setModalOpen({ open: true, mode: 4, rowData: row.original as Project})}>
            <Visibility />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => setModalOpen({ open: true, mode: 3, rowData: row.original as Project })}>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    )}
    muiTableContainerProps={{
      sx: {
        maxWidth: "100%", // prevents table from overflowing main content
        overflowX: "auto", // horizontal scroll if needed
      },
    }}
  />
</div>


      {/* Modal for Add/Edit/View */}
      <Dialog open={modalOpen.open} onClose={() => setModalOpen({ open: false, mode: 0, rowData: null })} fullWidth maxWidth="md">
        <DialogTitle>
          <Button onClick={() => setModalOpen({ open: false, mode: 0, rowData: null })} style={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            
                        }}> <CloseIcon style={{ color: "black" }} /></Button>
        </DialogTitle>
        <DialogContent>
  {modalOpen.open && (
    <Projects_AddForm
      mode={modalOpen.mode}            // 1=Add, 2=Edit, 3=Delete, 4=View
      projectData={modalOpen.rowData || undefined} // row data from table
      fetchTableData={loadData}        // refresh table after add/edit/delete
      onClose={() => setModalOpen({ open: false, mode: 0, rowData: null })}
    />
  )}
</DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
