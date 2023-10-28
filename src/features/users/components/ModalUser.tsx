import React, { useState } from "react";
import styles from '../../../styles/ModalForm.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { updateUser } from "../../../services/api";

interface IUser {
  id: string;
  username: string;
  role: string;
}

interface HandleCloseProps {
  handleClose: () => void;
  user: IUser;
}

const ModalGroup: React.FC<HandleCloseProps> = ({ handleClose, user }) => {

  const [form, setForm] = useState<IUser>({
    id: user.id,
    username: user.username,
    role: user.role
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await updateUser(user.id, form);
      console.log(response);
      location.reload();

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.modalBlock}>
      <div className={styles.modalInner}>
        <div className={styles.closeModal} onClick={handleClose}>
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#ffffff", }} />
        </div>
        <h1 className="text-center">Update User</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Username *:
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Role *:
            <select name="role">
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              <option value="ROLE_USER">ROLE_USER</option>
            </select>

          </label>

          <button type="submit" className={styles.button}>UPDATE</button>
        </form>
      </div>
    </div>
  );
}

export default ModalGroup;