import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { navAnimation } from "../animtionVariants/navAnimation";
import { Link } from "react-scroll";
import { tabs } from "../data/data";

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
                className={`nav_links_home_${tab.key}`}
              >
                <Link
                  activeClass="nav_active"
                  to={tab.id}
                  spy={true}
                  smooth={true}
                  // offset={-10}
                  duration={500}
                  onClick={() => setActiveTab(tab.id)}
                  onSetActive={() => {
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.id === "home" && <FaHome />}
                  {tab.id === "about" && <MdContactPage />}
                  {tab.id === "skill" && <RiSwordFill />}
                  {tab.id === "experience" && <GiStarsStack />}
                  {tab.id === "project" && <MdOutlineAssignment />}
                  {tab.id === "contact" && <MdMailOutline />}

                  {tab.label}
                </Link>
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="nav_pill"
                    transition={{ type: "spring", stiffness: 50 }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
