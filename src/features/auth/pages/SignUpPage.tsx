/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Link } from 'react-router-dom';
import styles from '../../../styles/LoginPage.module.scss'
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {

  return (
    <div className={styles.loginPage}>
      <h1>Sign Up</h1>

      <SignUpForm />

      <p>
        You have an account? <Link to="/login" className={styles.link}>Login</Link>
      </p>

      <p>
        Forgot password? <Link to="/forgot-password" className={styles.link}>Reset Password</Link>
      </p>
    </div>
  );
}

export default SignUpPage;