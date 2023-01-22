import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";

import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <>
      <Element
        name="section2"
        style={{ height: "100vh" }}
        className={styles.section2}
      >
        <h1>Section 2</h1>
        <Link to="subsection1" smooth={true} duration={500}>
          Go to Subsection 2.1
        </Link>
        <Link to="subsection2" smooth={true} duration={500}>
          Go to Subsection 2.2
        </Link>
        <Element name="subsection1" className={styles.subsection}>
          <h2>Subsection 2.1</h2>
        </Element>
        <Element name="subsection2" className={styles.subsection}>
          <h2>Subsection 2.2</h2>
        </Element>
      </Element>
    </>
  );
};

export default Section2;
