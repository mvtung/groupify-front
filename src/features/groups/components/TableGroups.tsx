import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import styles from '../../../styles/TableGroups.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getGroup } from '../../../services/api';
import { parseISO, format } from 'date-fns'
import GroupDetail from './GroupDetail';

interface IGroup {
  id: string;
  groupName: string;
  description: string;
  createdAt: string;
}

interface IModalState {
  isOpen: boolean;
}
interface TableGroupsProps {
  setModal: Dispatch<SetStateAction<IModalState>>;
}

const TableGroups: React.FC<TableGroupsProps> = ({ setModal }) => {
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
      <div className={styles.blockTitle}>
        <h2>Groups List</h2>
        <div onClick={() => { setModal({ isOpen: true }) }}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", }} />
        </div>
      </div>
      <div className={styles.headerTable}>
        <div className={styles.nameGroup}>Name</div>
        <div className={styles.createdAt}>Created At</div>
        <div className={styles.action}>Action</div>
      </div>
      {groups.map(group => (
        <Fragment key={group.id}>
          <div key={group.id} className={styles.bodyTale}>
            <div className={styles.iconDropdown}><FontAwesomeIcon icon={faCircleChevronDown} rotation={270} style={{ color: "#ffffff", }} /></div>
            <div className={styles.nameGroup}>{group.groupName}</div>
            <div className={styles.createdAt}>{format(parseISO(group.createdAt), 'yyyy-MM-dd')}</div>
            <div className={styles.action}>
              <div className={styles.iconEdit}>
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", }} />
              </div>
              <div className={styles.iconDel}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000", }} />
              </div>
            </div>
          </div>
          <GroupDetail group={group} />
        </Fragment>
      ))}
    </div>
  );
}

export default TableGroups;