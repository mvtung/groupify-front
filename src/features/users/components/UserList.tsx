import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import styles from '../../../styles/TableGroups.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteUser, getUsers } from '../../../services/api';
import { parseISO, format } from 'date-fns'

interface IUser {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
}

interface IModalState {
  isOpen: boolean;
  user: IUser;
}

interface UsersProps {
  setModal: Dispatch<SetStateAction<IModalState>>;
}

const TableGroups: React.FC<UsersProps> = ({ setModal }) => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setUsers(result);
    }

    fetchData();
  }, [])

  const delUser = async (id: string) => {
    try {
      const response = await deleteUser(id);
      console.log(response);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.tableGroups}>
      <div className={styles.blockTitle}>
        <h2>Groups List</h2>
      </div>
      <div className={styles.headerTable}>
        <div className={styles.email}>Email</div>
        <div className={styles.username}>Name</div>
        <div className={styles.role}>Role</div>
        <div className={styles.createdAt}>Created At</div>
        <div className={styles.action}>Action</div>
      </div>
      {users?.map(user => (
        <Fragment key={user.id}>
          <div key={user.id} className={styles.bodyTale}>
            <div className={styles.iconDropdown}><FontAwesomeIcon icon={faCircleChevronDown} rotation={270} style={{ color: "#ffffff", }} /></div>
            <div className={styles.email}>{user.email}</div>
            <div className={styles.username}>{user.username}</div>
            <div className={styles.role}>{user.role}</div>
            <div className={styles.createdAt}>{format(parseISO(user.createdAt), 'yyyy-MM-dd')}</div>
            <div className={styles.action}>
              <div className={styles.iconEdit} onClick={() => { setModal({ isOpen: true, user: user }) }}>
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", display: "none" }} />
              </div>
              <div className={styles.iconDel} onClick={() => delUser(user.id)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000", }} />
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default TableGroups;