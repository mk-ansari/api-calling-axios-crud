import React from 'react'
import { Snackbar, Alert } from '@mui/material'

const SnackBars = ({openSnackbar, handleSnackbarClose, status, type, message}) => {
  console.log("hello");
  return (
    <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          // severity={status.type}
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
          {/* {status.message} */}
        </Alert>
      </Snackbar>
  )
}

export default SnackBars