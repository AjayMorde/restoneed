import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRestrictedClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h1>RestoNeed Dashboard</h1>
        <p>Manage menu, orders & kitchen flow</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <h2>124</h2>
          <p>Today Orders</p>
        </div>
        <div className="card">
          <h2>₹18,450</h2>
          <p>Today Revenue</p>
        </div>
        <div className="card">
          <h2>8</h2>
          <p>Active Tables</p>
        </div>
        <div className="card">
          <h2>5</h2>
          <p>Kitchen Staff</p>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        <div className="action-card">
          <h3>📋 Menu Management</h3>
          <p>Add / update food items</p>
          <button onClick={handleRestrictedClick}>Manage Menu</button>
        </div>

        <div className="action-card">
          <h3>📱 QR Menu Scanner</h3>
          <p>Customer scans & orders</p>
          <button onClick={handleRestrictedClick}>View QR</button>
        </div>

        <div className="action-card">
          <h3>🧾 Orders</h3>
          <p>New & ongoing orders</p>
          <button onClick={handleRestrictedClick}>View Orders</button>
        </div>

        <div className="action-card">
          <h3>👨‍🍳 Kitchen Panel</h3>
          <p>Order prep & status</p>
          <button onClick={handleRestrictedClick}>Open Kitchen</button>
        </div>
      </div>

      {/* 🔥 POPUP MODAL */}
      {showPopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Access Restricted</h2>
            <p>
              This section is accessible only to
              <br />
              <strong>Restaurant Manager / Cook / Cashier</strong>
            </p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
