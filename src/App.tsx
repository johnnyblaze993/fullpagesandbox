import Navbar from "./components/navbar/Navbar";
import Chippy from "./components/chips/Chippy";

import styles from "./App.module.scss";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Links from "./sections/links/Links";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />

      <Links />

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;

//
