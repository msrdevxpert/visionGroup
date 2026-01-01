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
  DialogActions,
} from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import dynamic from "next/dynamic";
import type { MRT_Cell } from "material-react-table";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { Gallery_AddForm } from "./GalleryAdd";


const MaterialReactTable = dynamic(
  () =>
    import("material-react-table").then((m) => m.MaterialReactTable),
  { ssr: false }
);

type GalleryItem = {
  id?: string;
  module: string;
  type: string;
  title: string;
  mediaUrl: string;
  createdAt: string;
};

export default function GalleryAdmin() {
  const [authToken, setAuthToken] = useState<any>(null);

  useEffect(() => {
    const authTokenStr = localStorage.getItem("authLogin");
    if (authTokenStr) setAuthToken(JSON.parse(authTokenStr));
  }, []);

  const [tableData, setTableData] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [modalOpen, setModalOpen] = useState<{
    open: boolean;
    mode: number;
    rowData: GalleryItem | null;
  }>({ open: false, mode: 0, rowData: null });

  const API = `${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery`;

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API, {
        headers: {
          Authorization: authToken ? `Bearer ${authToken?.accessToken}` : "",
        },
      });
      const json = await res.json();
      setTableData(json?.data || []);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) loadData();
  }, [authToken]);

  const columns = useMemo(
    () => [
      { accessorKey: "module", header: "Module" },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "title", header: "Title" },
      { accessorKey: "mediaUrl", header: "Media URL" },
      { accessorKey: "createdAt", header: "Created At" },
    ],
    []
  );

  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  const handleExportData = () => {
    const csvOutput = generateCsv(csvConfig)(tableData);
    download(csvConfig)(csvOutput);
  };

  const validateRequired = (value: string) => !!value?.length;
  const getCommonEditTextFieldProps = useCallback(
    (cell: MRT_Cell<GalleryItem>) => ({
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
    <div>
      <h2>Gallery Admin</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
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
                Add Gallery Item
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
                    setModalOpen({ open: true, mode: 2, rowData: row.original as GalleryItem })
                  }
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="View">
                <IconButton
                  color="info"
                  onClick={() =>
                    setModalOpen({ open: true, mode: 4, rowData: row.original as GalleryItem })
                  }
                >
                  <Visibility />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={() =>
                    setModalOpen({ open: true, mode: 3, rowData: row.original as GalleryItem })
                  }
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          muiTableContainerProps={{
            sx: { maxWidth: "100%", overflowX: "auto" },
          }}
        />
      </div>

      <Dialog
        open={modalOpen.open}
        onClose={() => setModalOpen({ open: false, mode: 0, rowData: null })}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Button
            onClick={() => setModalOpen({ open: false, mode: 0, rowData: null })}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon style={{ color: "black" }} />
          </Button>
        </DialogTitle>
        <DialogContent>
          {modalOpen.open && (
            <Gallery_AddForm
              mode={modalOpen.mode} // 1=Add, 2=Edit, 3=Delete, 4=View
              galleryData={modalOpen.rowData || undefined}
              fetchTableData={loadData}
              onClose={() => setModalOpen({ open: false, mode: 0, rowData: null })}
            />
          )}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
