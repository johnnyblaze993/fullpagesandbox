import { Element } from "react-scroll";
import { Link } from "react-scroll";
// import Carousel from "../../components/carousel/Carousel";
import Chippy from "../../components/chips/Chippy";

import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <>
      <Element name="Deep Breathing" className={styles.section3}>
        <h2>take a deep breath</h2>
        <p>
          Deep breathing is a simple but powerful technique that can bring a
          variety of benefits to both the body and mind. Some of the benefits of
          deep breathing include: Reducing stress and anxiety: Deep breathing
          activates the relaxation response in the body, which can help to
          reduce feelings of stress and anxiety. Improving sleep: Deep breathing
          can promote feelings of calm and relaxation, which can help to improve
          sleep quality. Lowering blood pressure: Deep breathing can help to
          lower blood pressure by slowing down the heart rate and relaxing the
          blood vessels.
        </p>
        <Link to="Serene Mind" smooth={true} duration={500}>
          <Chippy label="Serene Mind" />
        </Link>
      </Element>
    </>
  );
};

export default Section3;
