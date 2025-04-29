import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login as loginService } from '../services/authService';

const useAuth = () => {
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const login = async (usernameOrEmail, password) => {
    try {
      const user = await loginService(usernameOrEmail, password);
      setUser(user);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const isAdmin = (user) => {
    return user && user.role === 'admin';
  };

  const isPatient = (user) => {
    return user && user.role === 'patient';
  };

  return {
    login,
    isAdmin,
    isPatient,
    error,
  };
};

export default useAuth;