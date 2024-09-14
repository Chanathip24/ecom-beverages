import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Allproducts from "./pages/Allproducts";
import Dashboard from "./pages/Dashboard";


//protectroute admin
import ProtectRoute from "./services/ProtectRoute";
import Checklogin from "./services/Checklogin";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={
            <Checklogin>
              <Login />
            </Checklogin>
            } />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/allproducts" element={<Allproducts />} />

          <Route
            path="/dashboard"
            element={
              <ProtectRoute role={["ADMIN", "CUSTOMER"]}>
                <Dashboard />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<Index />} />
          {/* 404 page */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
