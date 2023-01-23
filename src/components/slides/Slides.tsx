import styles from "./Slides.module.scss";
//import link and element from react-scroll
import { Link, Element } from "react-scroll";
import Chippy from "../chips/Chippy";

interface Props {
  title: string;
  subtitle?: string;
  text: string;

  name: string;
  to: string;
  label: string;
}

const Slide: React.FC<Props> = ({ title, subtitle, text, label, name, to }) => {
  return (
    <Element name={name} className={styles.container}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <p>{text}</p>

      <Link to={to} smooth={true} duration={500} className={styles.link}>
        <Chippy label={label} />
      </Link>
    </Element>
  );
};

export default Slide;
