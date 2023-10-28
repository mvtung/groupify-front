import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import styles from '../../../styles/TableGroups.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteGroup, getGroup } from '../../../services/api';
import { parseISO, format } from 'date-fns'
import GroupDetail from './GroupDetail';
import { useNavigate } from 'react-router-dom';

interface IGroup {
  id: string;
  groupName: string;
  description: string;
  createdAt: string;
}

interface IModalState {
  isOpen: boolean;
  group: IGroup;
}
interface TableGroupsProps {
  setModal: Dispatch<SetStateAction<IModalState>>;
}

const TableGroups: React.FC<TableGroupsProps> = ({ setModal }) => {
  const [groups, setGroups] = useState<IGroup[]>([])
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getGroup();
      if (result.status == 403) {
        navigate('/login');
        return
      }
      setGroups(result);
    }

    fetchData();
  }, [navigate])

  const delGroup = async (id: string) => {
    try {
      const response = await deleteGroup(id);
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
    <div className={styles.tableGroups}>
      <div className={styles.blockTitle}>
        <h2>Groups List</h2>
        <div onClick={() => {
          setModal({
            isOpen: true, group: {
              id: '',
              groupName: '',
              description: '',
              createdAt: ''
            }
          })
        }}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", }} />
        </div>
      </div>
      <div className={styles.headerTable}>
        <div className={styles.nameGroup}>Name</div>
        <div className={styles.createdAt}>Created At</div>
        <div className={styles.action}>Action</div>
      </div>
      {groups?.map(group => (
        <Fragment key={group.id}>
          <div key={group.id} className={styles.bodyTale}>
            <div className={styles.iconDropdown}><FontAwesomeIcon icon={faCircleChevronDown} rotation={270} style={{ color: "#ffffff", }} /></div>
            <div className={styles.nameGroup}>{group.groupName}</div>
            <div className={styles.createdAt}>{format(parseISO(group.createdAt), 'yyyy-MM-dd')}</div>
            <div className={styles.action}>
              <div className={styles.iconEdit} onClick={() => { setModal({ isOpen: true, group: group }) }}>
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", }} />
              </div>
              <div className={styles.iconDel} onClick={() => delGroup(group.id)}>
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