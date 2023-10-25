import { useState } from 'react';
import styles from '../../../styles/LoginForm.module.scss'

function ForgotPassword() {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gọi API reset password
    try {
      await resetPassword(email);
      //...
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

function resetPassword(email: string) {
  throw new Error('Function not implemented.');
}
