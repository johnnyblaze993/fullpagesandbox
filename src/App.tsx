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
        title="Section 4"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        button={<Chippy label="Button" />}
      />
      <Slides
        title="Section 5"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        button={<Chippy label="Button" />}
      />
      <Slides
        title="Section 6"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        button={<Chippy label="Button" />}
      />
      <Slides
        title="Section 7"
        subtitle="Subtitle of the slide"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        button={<Chippy label="Button" />}
      />
    </div>
  );
};

export default App;

//
