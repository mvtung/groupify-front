import LeftMenu from "../../common/pages/LeftMenu"
import styles from '../../../styles/HomePage.module.scss';
import React, { useState } from "react";
import HeaderMain from "../../home/components/HeaderMain";
import ModalUser from "../components/ModalUser";
import UserList from "../components/UserList";

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

const UsersPage: React.FC = () => {
  const [modal, setModal] = useState<IModalState>({
    isOpen: false,
    user: {
      id: "",
      username: "",
      role: "",
      email: "",
      createdAt: ""
    }
  });

  const handleClose = () => {
    setModal({
      isOpen: false, user: {
        id: "",
        username: "",
        role: "",
        email: "",
        createdAt: ""
      }
    });
  }

  return (
    <div className={styles.homePage}>
      <LeftMenu />
      <main>
        <HeaderMain />
        <UserList setModal={setModal} />
      </main>
      {modal.isOpen && <ModalUser handleClose={handleClose} user={modal.user} />}
    </div>
  );
}

export default UsersPage;