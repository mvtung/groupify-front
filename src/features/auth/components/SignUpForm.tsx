import React, { useState } from 'react';
import styles from '../../../styles/LoginForm.module.scss';
import { register } from '../../../services/api';

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  rePassword: string
  role: string;
}

const Register: React.FC = () => {

  const [form, setForm] = useState<IRegisterForm>({
    username: '',
    email: '',
    password: '',
    rePassword: '',
    role: 'ROLE_ADMIN',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    try {
      const response = await register(form);
      console.log(response);

    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email *:
        <input
          type="text"
          name='email'
          value={form.email}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Username *:
        <input
          type="text"
          name='username'
          value={form.username}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Password *:
        <input
          type="password"
          name='password'
          value={form.password}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Re-Password *:
        <input
          type="password"
          name='rePassword'
          value={form.rePassword}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Role *:
        <select name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="ROLE_ADMIN">ADMIN</option>
          <option value="ROLE_USER">USER</option>
        </select>
      </label>

      <button type="submit" className={styles.button}>REGISTER</button>
    </form>
  )
}

export default Register;