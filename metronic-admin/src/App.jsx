import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "@/app/store.js";

import MainLayout from "@/layouts/main-layout/index.jsx";
import AuthLayout from "@/layouts/auth-layout/index.jsx";
import NotFoundPage from "@/pages/error/not-found-page/index.jsx";
import LoginPage from "@/pages/auth/login-page/index.jsx";
import HomePage from "@/pages/main/home-page/index.jsx";

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Routes>
          <Route element={ <MainLayout/> }>
            <Route path="/" element={ <HomePage/> }/>
          </Route>
          <Route element={ <AuthLayout/> }>
            <Route path="/auth" element={ <LoginPage/> }/>
          </Route>
          <Route path="*" element={ <NotFoundPage/> }/>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App
