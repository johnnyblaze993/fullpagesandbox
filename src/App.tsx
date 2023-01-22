import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";
import Carousel from "./components/carousel/Carousel";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <Link to="section1" smooth={true} duration={500}>
        Go to Section 1
      </Link>
      <Link to="section2" smooth={true} duration={500}>
        Go to Section 2
      </Link>
      <Link to="section3" smooth={true} duration={500}>
        Go to Section 3
      </Link>

      <Element name="section1" className={styles.section1}>
        <h1>Section 1</h1>
      </Element>
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
      <Element name="section3" className={styles.section3}>
        <h1>Section 3</h1>
        <div className={styles.carouselContainer}>
          <Carousel />
        </div>
      </Element>
    </div>
  );
};

export default App;

//
