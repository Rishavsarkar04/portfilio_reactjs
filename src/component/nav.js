import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { navAnimation } from "../animtionVariants/navAnimation";

// import "../styles/main.scss";
let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experince", label: "Experince" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState("home");
  return (
    <div className="nav">
      {/* <div className="nav_logo">logo</div> */}
      <div className="nav_links">
        <ul>
          {tabs.map((tab, ind) => {
            return (
              <motion.li
                variants={navAnimation}
                initial="initial"
                animate="animate"
                custom={ind}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav_links_home_${tab.label}`}
              >
                {tab.id === "home" && <FaHome />}
                {tab.id === "about" && <MdContactPage />}
                {tab.id === "skill" && <RiSwordFill />}
                {tab.id === "experince" && <GiStarsStack />}
                {tab.id === "project" && <MdOutlineAssignment />}
                {tab.id === "contact" && <MdMailOutline />}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="nav_pill"
                    transition={{ type: "spring" }}
                  />
                )}

                {tab.label}
              </motion.li>
            );
          })}

          {/* <li className="nav_link_home"> Home</li>
          <li className="nav_link_about">About</li>
          <li className="nav_link_skill">About</li>
          <li className="nav_link_contact">Contact</li> */}
        </ul>
      </div>
    </div>
  );
}
