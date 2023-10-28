import LeftMenu from "../../common/pages/LeftMenu"
import MainContent from "../components/MainContent"
import styles from '../../../styles/HomePage.module.scss';

const HomePage: React.FC = () => {

  return (
    <div className={styles.homePage}>
      <LeftMenu />
      <MainContent />
    </div>
  );
}

export default HomePage;