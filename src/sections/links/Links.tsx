import { Link } from "react-scroll";
import Chippy from "../../components/chips/Chippy";
import styles from "./Links.module.scss";

const Links = () => {
  return (
    <div className={styles.container}>
      <Link
        to="Mindfull Meditation"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <Chippy label="Mindfull Meditation" />
      </Link>
      <Link to="Benefits" smooth={true} duration={500} className={styles.link}>
        <Chippy label="Benefits" />
      </Link>
      <Link
        to="overwhemled"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <Chippy label="overwhemled" />
      </Link>
      <Link
        to="Deep Breathing"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <Chippy label="Deep Breathing" />
      </Link>
      <Link
        to="Serene Mind"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <Chippy label="Serene Mind" />
      </Link>
      <Link
        to="Why Serene"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <Chippy label="Why Serene" />
      </Link>
      <Link
        to="Mindul Services"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <Chippy label="Mindul Services" />
      </Link>
      <Link to="Sign up" smooth={true} duration={500} className={styles.link}>
        <Chippy label="Sign up" />
      </Link>
    </div>
  );
};

export default Links;
