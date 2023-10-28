import React from 'react';
import styles from '../../../styles/HeaderMain.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../../services/api';
import { useNavigate } from 'react-router-dom';


const HeaderMain: React.FC = () => {
  const navigate = useNavigate();
  const logoutF = async () => {
    console.log('call');

    try {
      const response = await logout();
      console.log(response);
      navigate('/login');

    } catch (err) {
      console.error(err);
    }
  }
  return (
    <header>
      <div className={styles.headerMain}>
        <div className={styles.icon}><FontAwesomeIcon icon={faCircleUser} style={{ color: "#f2f2f2", width: "100%", height: "100%", }} /></div>
        <div className={styles.icon} onClick={() => logoutF()}><FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", width: "100%", height: "100%" }} /></div>
      </div>
    </header>
  );
}

export default HeaderMain;