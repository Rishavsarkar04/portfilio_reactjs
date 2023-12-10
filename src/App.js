import "./styles/main.scss";
import Navbar from "./component/nav";
import Header from "./component/header";
import About from "./component/about";
import Experience from "./component/experience";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
    </div>
  );
}

export default App;
