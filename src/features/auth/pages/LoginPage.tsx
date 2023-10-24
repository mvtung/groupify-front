/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

function LoginPage() {

  return (
    <div className="login-page">
      <h1>Login</h1>

      <LoginForm />

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

      <p>
        Forgot password? <Link to="/forgot-password">Reset Password</Link>
      </p>
    </div>
  );
}

// Optional CSS module
const styles = {
  loginPage: `
    width: 400px;
    margin: 0 auto;
  `
}

export default LoginPage;