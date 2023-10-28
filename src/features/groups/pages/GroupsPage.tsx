import LeftMenu from "../../common/pages/LeftMenu"
import styles from '../../../styles/HomePage.module.scss';
import React, { useState } from "react";
import ModalGroup from "../components/ModalGroup";
import HeaderMain from "../../home/components/HeaderMain";
import TableGroups from "../components/TableGroups";

interface IModalState {
  isOpen: boolean;
  group: IGroup;
}

interface IGroup {
  id: string;
  groupName: string;
  description: string;
  createdAt: string;
}

const GroupsPage: React.FC = () => {
  const [modal, setModal] = useState<IModalState>({
    isOpen: false,
    group: {
      id: "",
      groupName: "",
      description: "",
      createdAt: ""
    }
  });

  const handleClose = () => {
    setModal({ isOpen: false, group:{
      id: "",
      groupName: "",
      description: "",
      createdAt: ""
    } });
  }
  return (
    <div className={styles.homePage}>
      <LeftMenu />
      <main>
        <HeaderMain />
        <TableGroups setModal={setModal} />
      </main>
      {modal.isOpen && <ModalGroup handleClose={handleClose} group={modal.group}/>}
    </div>
  );
}

export default GroupsPage;