import React, { useEffect, useState } from 'react';
import styles from '../../../styles/TableGroups.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getGroup } from '../../../services/api';
import { parseISO, format } from 'date-fns'

interface IGroup {
  id: string;
  groupName: string;
  createdAt: string;
}

const TableGroups: React.FC = () => {
  const [groups, setGroups] = useState<IGroup[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getGroup();
      setGroups(result);
    }

    fetchData();
  }, [])

  return (
    <div className={styles.tableGroups}>
      <h2>Groups List</h2>
      <div className={styles.headerTable}>
        <div className={styles.nameGroup}>Name</div>
        <div className={styles.createdAt}>Created At</div>
        <div className={styles.action}>Action</div>
      </div>
      {groups.map(group => (
        <>
          <div className={styles.bodyTale}>
            <div className={styles.nameGroup} key={group.id}>{group.groupName}</div>
            <div className={styles.createdAt}>{format(parseISO(group.createdAt), 'yyyy-MM-dd')}</div>
            <div className={styles.action} key={group.id}>
              <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", }} />
              <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000", }} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default TableGroups;