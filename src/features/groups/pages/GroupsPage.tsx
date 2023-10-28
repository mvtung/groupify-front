import LeftMenu from "../../common/pages/LeftMenu"
import styles from '../../../styles/HomePage.module.scss';
import MainContentGroups from "../components/MainContentGroups";
import React from "react";

const GroupsPage: React.FC = () => {
  
  return (
    <div className={styles.homePage}>
      <LeftMenu />
      <MainContentGroups />
    </div>
  );
}

export default GroupsPage;