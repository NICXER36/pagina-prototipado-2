import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PatientModule from '../components/AdminDashboard/PatientModule';
import StaffModule from '../components/AdminDashboard/StaffModule';
import AppointmentModule from '../components/AdminDashboard/AppointmentModule';
import MedicalConsultationsModule from '../components/AdminDashboard/MedicalConsultationsModule';

const AdminPage = () => {
  const [activeModule, setActiveModule] = useState('patients');

  const renderModule = () => {
    switch (activeModule) {
      case 'patients':
        return <PatientModule />;
      case 'staff':
        return <StaffModule />;
      case 'appointments':
        return <AppointmentModule />;
      case 'consultations':
        return <MedicalConsultationsModule />;
      default:
        return <PatientModule />;
    }
  };

  return (
    <div className="admin-page">
      <Sidebar setActiveModule={setActiveModule} />
      <div className="module-container">
        {renderModule()}
      </div>
    </div>
  );
};

export default AdminPage;