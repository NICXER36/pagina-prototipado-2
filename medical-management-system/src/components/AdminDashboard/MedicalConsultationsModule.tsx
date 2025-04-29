import React, { useState } from 'react';

const MedicalConsultationsModule = () => {
  const [consultationData, setConsultationData] = useState({
    patientId: '',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultationData({ ...consultationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to register the consultation goes here
    console.log('Consultation registered:', consultationData);
  };

  return (
    <div className="medical-consultations-module">
      <h2>Medical Consultations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={consultationData.patientId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={consultationData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={consultationData.notes}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register Consultation</button>
      </form>
      {/* Additional functionalities like viewing patient evolution can be added here */}
    </div>
  );
};

export default MedicalConsultationsModule;