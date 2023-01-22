import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";
import Carousel from "../../components/carousel/Carousel";

import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <>
      <Element name="section3" className={styles.section3}>
        <h1>Section 3</h1>
        <div className={styles.carouselContainer}>
          <Carousel />
        </div>
      </Element>
    </>
  );
};

export default Section3;
