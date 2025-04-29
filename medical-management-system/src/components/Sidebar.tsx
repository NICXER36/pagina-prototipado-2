import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ username }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/path/to/profile-icon.png" alt="Profile" className="profile-icon" />
        <span className="username">{username}</span>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/admin/patients">Patient Module</Link>
          </li>
          <li>
            <Link to="/admin/staff">Staff Module</Link>
          </li>
          <li>
            <Link to="/admin/appointments">Appointment Scheduling</Link>
          </li>
          <li>
            <Link to="/admin/consultations">Medical Consultations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;