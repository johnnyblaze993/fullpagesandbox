import Navbar from "./components/navbar/Navbar";
import Chippy from "./components/chips/Chippy";

import styles from "./App.module.scss";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Links from "./sections/links/Links";
import Slides from "./components/slides/Slides";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />

      <Links />

      <Section1 />
      <Section2 />
      <Section3 />
      <Slides
        name="section4"
        title="Section 4"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        to="section5"
        label="section5"
      />
      <Slides
        name="section5"
        title="Section 5"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        to="section6"
        label="section6"
      />
      <Slides
        name="section6"
        title="Section 6"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        to="section7"
        label="section7"
      />
      <Slides
        name="section7"
        title="Section 7"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        to="section1"
        label="section1"
      />
    </div>
  );
};

export default App;

//
