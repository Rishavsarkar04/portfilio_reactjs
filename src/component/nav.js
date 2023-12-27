import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import {
  navAnimation,
  sidenavAnimation,
  sidenavLinkAnimation,
} from "../animtionVariants/navAnimation";
import { Link } from "react-scroll";
import { tabs } from "../data/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  const [active, setactive] = useState(false);
  return (
    <>
      <div
        className="burger"
        onClick={() => {
          setactive(!active);
        }}
      >
        {!active ? (
          <span>
            <GiHamburgerMenu />
          </span>
        ) : (
          <span>
            <IoCloseSharp />
          </span>
        )}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="sidenav"
            variants={sidenavAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="nav_links">
              <ul>
                {tabs.map((tab, ind) => {
                  return (
                    <motion.li
                      variants={sidenavLinkAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={ind + 1.5}
                      key={tab.id}
                      className={`nav_links_home_${tab.key}`}
                    >
                      <Link
                        activeClass="nav_active"
                        to={tab.id}
                        spy={true}
                        smooth={true}
                        // offset={-10}
                        delay={100}
                        duration={500}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setactive(false);
                        }}
                        // onSetActive={() => {
                        //   setActiveTab(tab.id);
                        // }}
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
                          layoutId="bubble2"
                          className="nav_pill"
                          transition={{ type: "spring", stiffness: 50 }}
                        />
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="nav">
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
                    delay={100}
                    duration={500}
                    onClick={() => setActiveTab(tab.id)}
                    // onSetActive={() => {
                    //   setActiveTab(tab.id);
                    // }}
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
    </>
  );
}
