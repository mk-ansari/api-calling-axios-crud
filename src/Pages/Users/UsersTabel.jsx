import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";

import { Delete, Edit, EditOff } from "@mui/icons-material";

// Table Rows Properties.
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "username", label: "Username", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
  },
  {
    id: "operations",
    label: "Operations",
    minWidth: 100,
    colSpan: 2,
    align: "center",
  },
];

const UsersTabel = ({
  users,
  isEdit,
  setIsEdit,
  isEditValues,
  setInputs,
  initialValues,
  editToggle,
  handleDialogOpen,
}) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    background: "#d3d3d3",
                  }}
                  colSpan={column.colSpan}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    {isEdit.status && isEdit.id === row.id ? (
                      <IconButton
                        aria-label="edit cancel"
                        color="error"
                        onClick={() => {
                          setIsEdit(isEditValues);
                          setInputs(initialValues);
                        }}
                      >
                        <EditOff />
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label="edit"
                        color="success"
                        onClick={() => editToggle(row.id)}
                      >
                        <Edit />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>
                    {isEdit.status && isEdit.id === row.id ? (
                      <IconButton disabled aria-label="delete" color="error">
                        <Delete />
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDialogOpen(row.id)}
                      >
                        <Delete />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UsersTabel;
