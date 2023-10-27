import React from 'react';
import styles from '../../../styles/HeaderMain.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const HeaderMain: React.FC = () => {

  return (
    <header>
      <div className={styles.headerMain}>
        <div className={styles.icon}><FontAwesomeIcon icon={faCircleUser} style={{ color: "#f2f2f2", width:"100%", height: "100%", }} /></div>
        <div className={styles.icon}><FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", width:"100%", height: "100%" }} /></div>
      </div>
    </header>
  );
}

export default HeaderMain;