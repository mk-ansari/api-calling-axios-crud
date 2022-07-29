import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Button
} from "@mui/material";
import { WarningAmber } from "@mui/icons-material"


const DialogBox = ({openDialog, handleDialogClose, loading, deleteUser}) => {
  return (
    <Dialog
    
      open={openDialog.open}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
        <IconButton aria-label="delete" size="large" color="error">
          <WarningAmber />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure want to delete ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>No</Button>
        {loading.status && loading.isLoading === "DELETE" ? (
          <Button color="error">Deleting...</Button>
        ) : (
          <Button
            onClick={() => deleteUser(openDialog.id)}
            color="error"
            autoFocus
          >
            Yes
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
