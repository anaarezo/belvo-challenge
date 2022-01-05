import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { v1 } from "./theme";
import { Contacts, Login, NotFound, Wallet } from "./pages";

export default function App() {
  return (
    <ThemeProvider theme={createTheme(v1)}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/not-found"} />} />
          <Route path="/" element={<Login />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
