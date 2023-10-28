import React, { useState } from "react";
import styles from '../../../styles/ModalForm.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { createGroup, updateGroup } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface IGroup {
  id: string;
  groupName: string;
  description: string;
}

interface HandleCloseProps {
  handleClose: () => void;
  group: IGroup;
}

const ModalGroup: React.FC<HandleCloseProps> = ({ handleClose, group }) => {

  const [form, setForm] = useState<IGroup>({
    id: group.id,
    groupName: group.groupName,
    description: group.description
  });

  const navigate = useNavigate();
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
      const response = group.id ? await updateGroup(group.id, form) : await createGroup(form);
      if (response.status == 403) {
        navigate('/login');
        return
      }
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
        <h1 className="text-center">Create Group</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Group Name *:
            <input
              type="text"
              name="groupName"
              value={form.groupName}
              onChange={handleChange}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Description *:
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
            ></textarea>
          </label>

          <button type="submit" className={styles.button}>CREATE</button>
        </form>
      </div>
    </div>
  );
}

export default ModalGroup;