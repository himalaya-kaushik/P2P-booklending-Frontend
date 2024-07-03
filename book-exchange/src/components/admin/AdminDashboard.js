// src/components/admin/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">Admin Dashboard</h1>
      <nav>
        <ul className="flex justify-around">
          <li><Link to="view-transactions" className="text-yellow-500">View Transactions</Link></li>
          <li><Link to="kyc-verification" className="text-yellow-500">KYC Verification</Link></li>
          <li><Link to="ticket-raising" className="text-yellow-500">Ticket Raising</Link></li>
          <li><Link to="wallet" className="text-yellow-500">Wallet</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
