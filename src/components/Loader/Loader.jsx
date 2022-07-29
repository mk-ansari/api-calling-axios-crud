import React from "react";
import { Box, CircularProgress } from "@mui/material";
import style from './Loader.style' 

const Loader = () => {
  return (
    <Box
    // sx={[style.abc,style.displayNone]}
    // sx={style.abc}
    sx={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
