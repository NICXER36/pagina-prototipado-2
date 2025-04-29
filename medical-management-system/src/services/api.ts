import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to handle user login
export const loginUser = async (usernameOrEmail, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            usernameOrEmail,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Registration failed');
    }
};

// Function to fetch all patients (admin only)
export const fetchPatients = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch patients');
    }
};

// Function to fetch a specific patient by ID (admin only)
export const fetchPatientById = async (patientId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients/${patientId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch patient');
    }
};

// Function to update patient information (admin only)
export const updatePatient = async (patientId, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/patients/${patientId}`, updatedData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to update patient');
    }
};

// Function to delete a patient (admin only)
export const deletePatient = async (patientId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/patients/${patientId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to delete patient');
    }
};