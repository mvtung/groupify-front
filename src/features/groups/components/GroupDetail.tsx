import React from "react";
import styles from '../../../styles/GroupDetail.module.scss';
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
  return (
    <div className={styles.groupDetail}>
      <div className={styles.groupContent}>
        <div className="fw-bold">Number of Users:</div>
        <div>109</div>
      </div>
      <div className={styles.groupContent}>
        <div className="fw-bold">Description:</div>
        <div>{group.description}</div>
      </div>
    </div>
  )
}

export default GroupDetail;