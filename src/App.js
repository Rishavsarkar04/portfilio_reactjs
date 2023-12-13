import "./styles/main.scss";
import Navbar from "./component/nav";
import Header from "./component/header";
import About from "./component/about";
import Experience from "./component/experience";
import Project from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div style={{ background: "var(--secondary-bg-color)" }}>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
