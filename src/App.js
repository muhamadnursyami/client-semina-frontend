import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SigninPage />}></Route>
        <Route path="/" element={<DashboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
