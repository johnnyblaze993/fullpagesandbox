import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";

import Chippy from "../../components/chips/Chippy";

import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <>
      <Element name="section2" className={styles.section2}>
        <Element name="Benefits" className={styles.subsection}>
          <h2>Benefits of mindful meditation</h2>
          <Link to="overwhemled" smooth={true} duration={500}>
            <Chippy label="continue" />
          </Link>
        </Element>
        <Element name="overwhemled" className={styles.subsection}>
          <h2>overwhemled</h2>
          <Link to="section3" smooth={true} duration={500}>
            <Chippy label="continue" />
          </Link>
        </Element>
      </Element>
    </>
  );
};

export default Section2;
