import { useState } from 'react';
import styles from '../../../styles/LoginForm.module.scss'
import { resetPassword } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      <label className={styles.label}>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>SEND RESET LINK</button>
    </form>
  )
}

export default ForgotPassword;