import React, { useState, useEffect } from 'react';

const StaffModule = () => {
  const [staff, setStaff] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    role: '',
  });
  const [editingStaff, setEditingStaff] = useState(null);

  useEffect(() => {
    // Fetch staff data from API
    const fetchStaff = async () => {
      // Replace with actual API call
      const response = await fetch('/api/staff');
      const data = await response.json();
      setStaff(data);
    };
    fetchStaff();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingStaff) {
      // Update staff
      await fetch(`/api/staff/${editingStaff.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } else {
      // Register new staff
      await fetch('/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    }
    setFormData({ name: '', surname: '', email: '', role: '' });
    setEditingStaff(null);
    // Refresh staff list
    const response = await fetch('/api/staff');
    const data = await response.json();
    setStaff(data);
  };

  const handleEdit = (staffMember) => {
    setFormData({
      name: staffMember.name,
      surname: staffMember.surname,
      email: staffMember.email,
      role: staffMember.role,
    });
    setEditingStaff(staffMember);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/staff/${id}`, {
      method: 'DELETE',
    });
    // Refresh staff list
    const response = await fetch('/api/staff');
    const data = await response.json();
    setStaff(data);
  };

  return (
    <div className="staff-module">
      <h2>Staff Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          required
        />
        <button type="submit">{editingStaff ? 'Update Staff' : 'Add Staff'}</button>
      </form>
      <ul>
        {staff.map((staffMember) => (
          <li key={staffMember.id}>
            {staffMember.name} {staffMember.surname} - {staffMember.email} ({staffMember.role})
            <button onClick={() => handleEdit(staffMember)}>Edit</button>
            <button onClick={() => handleDelete(staffMember.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffModule;