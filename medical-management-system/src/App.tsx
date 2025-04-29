import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import PatientPage from './pages/PatientPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/patient" component={PatientPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;