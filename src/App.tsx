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
      <Slides name="Serene Mind" to="Why Serene" label="Why Serene">
        <h1>Thats where Serene Mind comes in</h1>
        <h2> Find inner peace anywhere, anytime</h2>
        <p>
          Serene Mind is an online platform that provides guided meditation and
          mindfulness practices to help individuals reduce stress, improve focus
          and increase well-being with a wide range of options for beginners and
          advanced practitioners, guided by certified teachers.{" "}
        </p>
      </Slides>
      <Slides name="Why Serene" to="Mindul Services" label="Mindul Services">
        <h1> Why Serene Mind? The Science Behind Our Success</h1>
        <h2>
          {" "}
          Unlocking the power of mindfulness and meditation to reduce stress and
          improve well-being
        </h2>
        <p>
          Serene Mind's clinical processes are based on evidence-based
          practices, such as mindfulness-based stress reduction (MBSR) and
          cognitive-behavioral therapy (CBT).
        </p>
      </Slides>
      <Slides name="Mindul Services" to="Sign up" label="Sign Up">
        <h1> What we offer at Serene Mind</h1>
        <h2>
          {" "}
          Find inner peace and balance with our expert-led mindfulness and
          meditation services
        </h2>
        <p>
          Serene Mind offers a wide range of mindfulness and meditation services
          to help you reduce stress, improve focus and increase well-being. Our
          services include guided meditation, mindfulness training, and
          mindfulness-based stress reduction (MBSR) programs.
        </p>
      </Slides>
      <Slides name="Sign up" to="section1" label="section1">
        <h1> Sign Up Now</h1>
        <h2>
          {" "}
          Start your journey to inner peace and balance with our expert-led
          mindfulness and meditation services
        </h2>
        <div className={styles.imgbox}>
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW54aWV0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Mindfull Meditation"
          />
        </div>
        <p>
          We're excited for you to join our community and start your journey to
          inner peace and balance. Sign up now and experience the benefits of
          reduced stress and improved well-being.
        </p>
      </Slides>
    </div>
  );
};

export default App;

//
