import "./styles/main.scss";
import Navbar from "./component/nav";
import Header from "./component/header";
import About from "./component/about";
function App() {
  return (
    <div style={{ background: " var(--main-bg-color)" }}>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
