/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Link } from 'react-router-dom';
import styles from '../../../styles/LoginPage.module.scss'
import ForgotPasswordForm from '../components/ForgotPasswordForm';

function ForgotPasswordPage() {

  return (
    <div className={styles.loginPage}>
      <h1>Reset password</h1>

      <ForgotPasswordForm />

      <p>
        You have an account? <Link to="/login" className={styles.link}>Login</Link>
      </p>

      <p>
      Don't have an account? <Link to="/sign-up" className={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
}

export default ForgotPasswordPage;