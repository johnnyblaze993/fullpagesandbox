import Navbar from "./components/navbar/Navbar";

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
        name="Serene Mind"
        title="Thats where Serene Mind comes in"
        subtitle="Find inner peace, anywhere, anytime"
        text="Serene Mind is an online platform that provides guided meditation and mindfulness practices to help individuals reduce stress, improve focus and increase well-being with a wide range of options for beginners and advanced practitioners, guided by certified teachers."
        to="Why Serene"
        label="Why Serene"
      />
      <Slides
        name="Why Serene"
        title="Why Serene Mind? The Science Behind Our Success"
        subtitle="Unlocking the power of mindfulness and meditation to reduce stress and improve well-being"
        text="Serene Mind's clinical processes are based on evidence-based practices, such as mindfulness-based stress reduction (MBSR) and cognitive-behavioral therapy (CBT)."
        to="Mindul Services"
        label="Mindul Services"
      />
      <Slides
        name="Mindul Services"
        title="What we offer at Serene Mind"
        subtitle="Find inner peace and balance with our expert-led mindfulness and meditation services"
        text="Serene Mind offers a wide range of mindfulness and meditation services to help you reduce stress, improve focus and increase well-being. Our services include guided meditation, mindfulness training, and mindfulness-based stress reduction (MBSR) programs."
        to="Sign up"
        label="Sign Up"
      />
      <Slides
        name="Sign up"
        title="Sign Up Now"
        subtitle="Start your journey to inner peace and balance with our expert-led mindfulness and meditation services"
        text="We're excited for you to join our community and start your journey to inner peace and balance. Sign up now and experience the benefits of reduced stress and improved well-being."
        to="section1"
        label="section1"
      />
    </div>
  );
};

export default App;

//
