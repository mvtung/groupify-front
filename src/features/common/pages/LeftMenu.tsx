import React from 'react';
import styles from '../../../styles/LeftMenu.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

const LeftMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  }
  return (
    <aside className={styles.leftMenu}>
      <div className={styles.blockLogo}>
        <FontAwesomeIcon icon={faPeopleRoof} style={{color: "#ffffff",}} className={styles.logo} />
        <h1>GROUPIFY</h1>
      </div>
      <ul className={styles.blockUl}>
        <li onClick={() => handleClick('/')}>
          <div className={styles.blockNav}>
            <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} />
            <p>Home</p>
          </div>
        </li>
        <li onClick={() => handleClick('/users')}>
          <div className={styles.blockNav}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
            <p>Users</p>
          </div>
        </li>
        <li onClick={() => handleClick('/groups')}>
          <div className={styles.blockNav}>
            <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff", }} />
            <p>Groups</p>
          </div>
        </li>
        <li onClick={() => handleClick('/setting')}>
          <div className={styles.blockNav}>
            <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff", }} />
            <p>Setting</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default LeftMenu;