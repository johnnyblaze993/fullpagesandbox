import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";
import Carousel from "../../components/carousel/Carousel";
import Chippy from "../../components/chips/Chippy";

import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <>
      <Element name="section3" className={styles.section3}>
        <h2>take a deep breath</h2>
        <Link to="section4" smooth={true} duration={500}>
          <Chippy label="continue" />
        </Link>
      </Element>
    </>
  );
};

export default Section3;
