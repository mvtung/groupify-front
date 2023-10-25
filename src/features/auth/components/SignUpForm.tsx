import { useState } from 'react';
import styles from '../../../styles/LoginForm.module.scss'

function Register() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email *:
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Username *:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Password *:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Re-Password *:
        <input
          type="password"
          value={rePassword}
          onChange={e => setRePassword(e.target.value)}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>REGISTER</button>
    </form>
  )
}

export default Register;