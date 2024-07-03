// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import LenderDashboard from './components/lender/lenderDashboard';
import AddBook from './components/lender/AddBook';
import ViewBooks from './components/lender/ViewBooks';
import LenderKYC from './components/lender/LenderKYC';
import BorrowerDashboard from './components/borrower/borrowerDashboard';
import SearchBooks from './components/borrower/SearchBooks';
import AdminDashboard from './components/admin/AdminDashboard';
import ViewTransactions from './components/admin/ViewTransactions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Lender Routes */}
        <Route path="/lender/*" element={<LenderRoutes />} />
        
        {/* Borrower Routes */}
        <Route path="/borrower/*" element={<BorrowerRoutes />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
};

const LenderRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<LenderDashboard />} />
    <Route path="add-book" element={<AddBook />} />
    <Route path="view-books" element={<ViewBooks/>} />
    <Route path="kyc" element={<LenderKYC />} />
  </Routes>
);

const BorrowerRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<BorrowerDashboard />} />
    <Route path="search-books" element={<SearchBooks />} />
  </Routes>
);

const AdminRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="view-transactions" element={<ViewTransactions />} />
    {/* Add more admin-specific routes here */}
  </Routes>
);

export default App;
