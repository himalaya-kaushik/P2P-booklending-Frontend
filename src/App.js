// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import LenderDashboard from "./components/lender/lenderDashboard";
import AddBook from "./components/lender/AddBook";
import ViewBooks from "./components/lender/ViewBooks";
import LenderKYC from "./components/lender/LenderKYC";
import BorrowerDashboard from "./components/borrower/borrowerDashboard";
import SearchBooks from "./components/borrower/SearchBooks";
import AdminDashboard from "./components/admin/AdminDashboard";
import ViewTransactions from "./components/admin/ViewTransactions";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Lender Routes */}
        <Route path="/lender/dashboard" element={<LenderDashboard />} />
        <Route path="/lender/add-book" element={<AddBook />} />
        <Route path="/lender/view-books" element={<ViewBooks />} />
        <Route path="/lender/kyc" element={<LenderKYC />} />

        {/* Borrower Routes */}
        <Route path="/borrower/dashboard" element={<BorrowerDashboard />} />
        <Route path="/borrower/search-books" element={<SearchBooks />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/view-transactions" element={<ViewTransactions />} />
      </Routes>
    </Router>
  );
};

export default App;
