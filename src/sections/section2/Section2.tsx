import { Element } from "react-scroll";
import { Link } from "react-scroll";

import Chippy from "../../components/chips/Chippy";

import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <>
      <Element name="Mindfull Meditation" className={styles.section2}>
        <Element name="Benefits" className={styles.subsection}>
          <div className={styles.imgbox}>
            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1631441961409-d350ca05f453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluZGZ1bGxuZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Mindfull Meditation"
            />
          </div>
          <h2>Benefits of mindful meditation</h2>
          <ol>
            <li> Reducing stress through mindfulness and meditation</li>
            <li>
              {" "}
              Improving focus and concentration with mindfulness meditation{" "}
            </li>
            <li>
              {" "}
              Enhancing emotional well-being with mindfulness and meditation{" "}
            </li>
          </ol>
          <p>
            These benefits of mindfulness and meditation practices can be
            achieved through regular practice, it can help individuals to lead a
            more balanced and fulfilled life, by reducing stress, improving
            focus and concentration, and enhancing emotional well-being.
            Mindfulness and meditation practices are becoming increasingly
            popular and widely accepted as an effective way to improve overall
            mental and emotional well-being. By providing a sense of clarity and
            calm, it allows individuals to be more present in their daily lives
            and make better decisions.
          </p>
          <Link to="overwhemled" smooth={true} duration={500}>
            <Chippy label="Becoming Overwhelmed" />
          </Link>
        </Element>
        <Element name="overwhemled" className={styles.subsection}>
          <div className={styles.imgbox}>
            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW54aWV0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="Mindfull Meditation"
            />
          </div>
          <h2>Recognizing and Managing Overwhelm</h2>
          <ol>
            <li> Notice physical sensations of overwhelm</li>
            <li> Identify the source of stress</li>
            <li>Take a break and engage in self-care</li>
            <li>Prioritize and simplify tasks</li>
            <li>Seek support</li>
          </ol>
          <p>
            Being overwhelmed refers to the feeling of being unable to cope with
            the demands or stressors in one's life. This can manifest as
            feelings of anxiety, irritability, and difficulty in concentrating.
            Prolonged feelings of overwhelm can have negative effects on mental
            and physical health, such as depression, increased risk of heart
            disease, and weakened immune system. It can also lead to unhealthy
            coping mechanisms such as alcohol or substance abuse, neglecting
            self-care, and difficulty in maintaining relationships.
          </p>
          <Link to="Deep Breathing" smooth={true} duration={500}>
            <Chippy label="Mindful Strategies" />
          </Link>
        </Element>
      </Element>
    </>
  );
};

export default Section2;
