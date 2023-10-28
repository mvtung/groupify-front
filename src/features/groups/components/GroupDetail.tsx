import React, { useEffect, useState } from "react";
import styles from '../../../styles/GroupDetail.module.scss';
import { getGroupUser } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface GroupDetailProps {
  group: IGroup;
}

interface IGroup {
  id: string;
  groupName: string;
  description: string;
  createdAt: string;
}

const GroupDetail: React.FC<GroupDetailProps> = ({ group }) => {

  const [userGroups, setGroups] = useState<IGroup[]>([])
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getGroupUser(group.id);
      if (result.status == 403) {
        navigate('/login');
        return
      }
      setGroups(result);
    }

    fetchData();
  }, [group.id, navigate])

  return (
    <div className={styles.groupDetail}>
      <div className={styles.groupContent}>
        <div className="fw-bold">Number of Users:</div>
        <div>{userGroups.length}</div>
      </div>
      <div className={styles.groupContent}>
        <div className="fw-bold">Description:</div>
        <div>{group.description}</div>
      </div>
    </div>
  )
}

export default GroupDetail;