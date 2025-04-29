import React, { useState, useEffect } from 'react';

const AppointmentModule = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    patientId: '',
    notes: '',
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    // Fetch appointments from the API
    const response = await fetch('/api/appointments');
    const data = await response.json();
    setAppointments(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit new appointment to the API
    await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    });
    fetchAppointments(); // Refresh the appointment list
    setNewAppointment({ date: '', time: '', patientId: '', notes: '' }); // Reset form
  };

  const handleDelete = async (id) => {
    await fetch(`/api/appointments/${id}`, {
      method: 'DELETE',
    });
    fetchAppointments(); // Refresh the appointment list
  };

  return (
    <div className="appointment-module">
      <h2>Appointment Scheduling</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={newAppointment.time}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="patientId"
          placeholder="Patient ID"
          value={newAppointment.patientId}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={newAppointment.notes}
          onChange={handleInputChange}
        />
        <button type="submit">Add Appointment</button>
      </form>
      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} at {appointment.time} - Patient ID: {appointment.patientId}
            <button onClick={() => handleDelete(appointment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentModule;