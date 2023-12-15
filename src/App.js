import "./styles/main.scss";
import Navbar from "./component/nav";
import Header from "./component/header";
import About from "./component/about";
import Experience from "./component/experience";
import Project from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";
import { useState } from "react";

function App() {
  let [activeTab, setActiveTab] = useState("home");
  return (
    <div style={{ background: "var(--secondary-bg-color)" }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header setActiveTab={setActiveTab} />
      <About setActiveTab={setActiveTab} />
      <Experience setActiveTab={setActiveTab} />
      <Project setActiveTab={setActiveTab} />
      <Contact setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
}

export default App;
