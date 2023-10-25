/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import styles from '../../../styles/LoginPage.module.scss'

function LoginPage() {

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>

      <LoginForm />

      <p>
        Don't have an account? <Link to="/sign-up" className={styles.link}>Register</Link>
      </p>

      <p>
        Forgot password? <Link to="/forgot-password" className={styles.link}>Reset Password</Link>
      </p>
    </div>
  );
}

export default LoginPage;