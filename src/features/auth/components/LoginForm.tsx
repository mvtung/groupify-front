import React, { useState } from 'react';
import styles from '../../../styles/LoginForm.module.scss'
interface ILoginForm {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {

  const [form, setForm] = useState<ILoginForm>({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit form logic
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Username
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={styles.button}>LOGIN</button>
    </form>
  );
}

export default LoginForm;