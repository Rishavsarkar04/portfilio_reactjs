import { useEffect } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DarkmodeBtn({ mode, setmode }) {
  useEffect(() => {
    localStorage.setItem("mode", `${mode}`);
  }, [mode]);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [mode]);
  return (
    <div className="darkcontainer">
      <motion.div
        className="lightbtn"
        // onClick={() => {
        //   setmode("light");
        // }}
      >
        <div
          onClick={() => {
            setmode("light");
          }}
        >
          <FiSun />
        </div>
        {mode === "light" && (
          <motion.span
            layoutId="btn"
            style={{
              // position: "absolute",
              // width: "135%",
              // height: "100%",
              // top: "0rem",
              // right: "0rem",
              // zIndex: "-1",
              backgroundColor: "yellow",
              // border: "0.1rem solid black",
              // borderRadius: " 50%",
            }}
            className="light_pill"
          ></motion.span>
        )}
      </motion.div>

      <motion.div
        className="darkbtn"
        // onClick={() => {
        //   setmode("dark");
        // }}
      >
        <div
          onClick={() => {
            setmode("dark");
          }}
        >
          <FaRegMoon color={mode === "light" ? "black" : "white"} />
        </div>
        {mode === "dark" && (
          <motion.span
            layoutId="btn"
            style={{
              // position: "absolute",
              // width: "135%",
              // height: "100%",
              // top: "0rem",
              // left: "0rem",
              // zIndex: "1",
              backgroundColor: "black",
              // borderRadius: " 50%",
              // mixBlendMode: "exclusion",
            }}
            className="dark_pill"
          ></motion.span>
        )}
      </motion.div>
    </div>
  );
}
