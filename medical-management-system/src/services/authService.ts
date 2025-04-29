import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the API URL as needed

export const login = async (usernameOrEmail, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            usernameOrEmail,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

export const registerAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${API_URL}/register/admin`, adminData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Admin registration failed');
    }
};

export const registerPatient = async (patientData) => {
    try {
        const response = await axios.post(`${API_URL}/register/patient`, patientData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Patient registration failed');
    }
};

export const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user : null;
};

export const logout = () => {
    localStorage.removeItem('user');
};