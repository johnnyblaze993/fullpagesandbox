import { Element } from "react-scroll";
import { Link } from "react-scroll";
// import Carousel from "../../components/carousel/Carousel";
import Chippy from "../../components/chips/Chippy";

import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <>
      <Element name="Deep Breathing" className={styles.section3}>
        <h2>take a deep breath</h2>
        <Link to="Serene Mind" smooth={true} duration={500}>
          <Chippy label="Serene Mind" />
        </Link>
      </Element>
    </>
  );
};

export default Section3;
