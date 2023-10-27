import LeftMenu from "../../common/pages/LeftMenu"
import MainContent from "../components/MainContent"
import styles from '../../../styles/HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <LeftMenu />
      <MainContent />
    </div>
  )
}

export default HomePage