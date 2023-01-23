import { Link } from "react-scroll";
import Chippy from "../../components/chips/Chippy";
import styles from "./Links.module.scss";

const Links = () => {
  return (
    <div className={styles.container}>
      <Link to="section1" smooth={true} duration={500} className={styles.link}>
        <Chippy label="section1" />
      </Link>
      <Link to="section2" smooth={true} duration={500} className={styles.link}>
        <Chippy label="section2" />
      </Link>
      <Link to="section3" smooth={true} duration={500} className={styles.link}>
        <Chippy label="section3" />
      </Link>
    </div>
  );
};

export default Links;
