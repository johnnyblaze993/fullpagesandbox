import { Link } from "react-scroll";

import styles from "./App.module.scss";
import Section1 from "./pages/section1/Section1";
import Section2 from "./pages/section2/Section2";
import Section3 from "./pages/section3/Section3";

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

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;

//
