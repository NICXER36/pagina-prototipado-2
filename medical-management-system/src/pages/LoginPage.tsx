import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = async (usernameOrEmail, password) => {
    try {
      await login(usernameOrEmail, password);
      history.push('/admin'); // Redirect to admin dashboard or patient dashboard based on role
    } catch (err) {
      setError('Invalid username/email or password');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;