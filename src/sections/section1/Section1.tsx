import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Button from "../../components/button/Button";
import Chippy from "../../components/chips/Chippy";

import Quotes from "../../components/quotes/Quotes";

import styles from "./Section1.module.scss";

const Section1 = () => {
  return (
    <>
      <Element name="section1" className={styles.section1}>
        <Quotes />
        <h3>Know no limits</h3>
        <Link
          to="Mindfull Meditation"
          smooth={true}
          duration={500}
          className={styles.link}
        >
          <Chippy label="Mindfull Meditation" />
        </Link>
        <Button className={styles.button}>hey</Button>
      </Element>
    </>
  );
};

export default Section1;
