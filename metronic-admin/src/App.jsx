import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from "@/layouts/main-layout.jsx";
import AuthLayout from "@/layouts/auth-layout.jsx";
import LoginPage from "@/pages/auth/login-page/index.jsx";
import HomePage from "@/pages/main/home-page/index.jsx";

import './App.css'

function App() {

  return (
    <Router>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="/auth" element={<LoginPage />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default App
