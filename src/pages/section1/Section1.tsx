import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";

import styles from "./Section1.module.scss";

const Section1 = () => {
  return (
    <>
      <Element name="section1" className={styles.section1}>
        <h1>Section 1</h1>
      </Element>
    </>
  );
};

export default Section1;
