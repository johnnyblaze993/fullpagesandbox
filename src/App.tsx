import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div>
      <Link to="section1" smooth={true} duration={500}>
        Go to Section 1
      </Link>
      <Link to="section2" smooth={true} duration={500}>
        Go to Section 2
      </Link>
      <Link to="section3" smooth={true} duration={500}>
        Go to Section 3
      </Link>

      <Element name="section1" style={{ height: "100vh" }}>
        <h1>Section 1</h1>
      </Element>
      <Element name="section2" style={{ height: "100vh" }}>
        <h1>Section 2</h1>
        <Link to="subsection1" smooth={true} duration={500}>
          Go to Subsection 2.1
        </Link>
        <Link to="subsection2" smooth={true} duration={500}>
          Go to Subsection 2.2
        </Link>
        <Element name="subsection1" style={{ height: "100vh" }}>
          <h2>Subsection 2.1</h2>
        </Element>
        <Element name="subsection2" style={{ height: "100vh" }}>
          <h2>Subsection 2.2</h2>
        </Element>
      </Element>
      <Element name="section3" style={{ height: "100vh" }}>
        <h1>Section 3</h1>
      </Element>
    </div>
  );
};

export default App;

//
