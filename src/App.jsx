import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Users from "./Pages/Users/Users";
import SnackExa from "./Pages/SnackExa/SnackExa";

export const SnackbarContext = createContext();

function App() {
  const [snack, setSnack] = useState({
    message: "",
    type: "",
    open: false,
  });
  return (
    <SnackbarContext.Provider value={{ snack, setSnack }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/snack" element={<SnackExa />} />
        </Routes>
      </BrowserRouter>
    </SnackbarContext.Provider>
  );
}

export default App;
