import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import ProtectedRoute from "./ProtectedRoute";
import toast, { Toaster } from "react-hot-toast";
import { messaging } from "./context/firebase";
import { getToken } from "firebase/messaging";

function App() {

  return (
    <>
      {/* Routes */}
      <Routes>
        {/*Public Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Privite Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Challenge/:id" element={<Challenge />} />
        </Route>
      </Routes>

      {/* react toast notifactions */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
