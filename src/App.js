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
  const [mode, setmode] = useState(() => {
    return localStorage.getItem("mode") || "light";
  });
  return (
    <div style={{ background: "var(--secondary-bg-color)" }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header setActiveTab={setActiveTab} mode={mode} setmode={setmode} />
      <About setActiveTab={setActiveTab} />
      <Experience setActiveTab={setActiveTab} mode={mode} />
      <Project setActiveTab={setActiveTab} />
      <Contact setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
}

export default App;
