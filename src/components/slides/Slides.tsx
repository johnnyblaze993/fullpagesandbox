import styles from "./Slides.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  text: string;
  button?: JSX.Element;
}

const Slide: React.FC<Props> = ({ title, subtitle, text, button }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <p>{text}</p>
      {button}
    </div>
  );
};

export default Slide;
