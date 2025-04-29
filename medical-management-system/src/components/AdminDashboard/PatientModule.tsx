import React, { useState } from 'react';

const PatientModule: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    surname: '',
    dateOfBirth: '',
    age: '',
    rut: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to register a new patient
    setPatients([...patients, formData]);
    setFormData({
      email: '',
      name: '',
      surname: '',
      dateOfBirth: '',
      age: '',
      rut: '',
      phone: '',
      address: '',
    });
  };

  return (
    <div className="patient-module">
      <h2>Patient Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="rut" placeholder="RUT" value={formData.rut} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <button type="submit">Register Patient</button>
      </form>
      <h3>Registered Patients</h3>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>{`${patient.name} ${patient.surname} - ${patient.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientModule;