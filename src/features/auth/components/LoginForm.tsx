import React, { useState } from 'react';
import styles from '../../../styles/LoginForm.module.scss'
import { login } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<ILoginForm>({
    username: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(form.username, form.password);
      console.log(response);
      navigate('/groups');
    } catch (err) {
      console.error(err);
    }
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
        Username:
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Password:
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