import styles from "./Slides.module.scss";
//import link and element from react-scroll
import { Link, Element } from "react-scroll";
import Chippy from "../chips/Chippy";

interface Props {
  children: React.ReactNode;

  name: string;
  to: string;
  label: string;
}

const Slide: React.FC<Props> = ({ children, label, name, to }) => {
  return (
    <Element name={name} className={styles.container}>
      {children}

      <Link to={to} smooth={true} duration={500} className={styles.link}>
        <Chippy label={label} />
      </Link>
    </Element>
  );
};

export default Slide;
