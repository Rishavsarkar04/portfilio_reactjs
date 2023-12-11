import { FaFacebook } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { CgScrollV } from "react-icons/cg";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import {
  picAnimation,
  socialMediaAnimation,
  buttonsAnimation,
  contentAnimation,
} from "../animtionVariants/headerAnimation";

export default function Header() {
  return (
    <Element className="header" name="home">
      <div className="header_left">
        <div className="header_left_container">
          <motion.div
            variants={contentAnimation}
            initial="initial"
            animate="animate"
            custom={0}
            className="header_left_container_header"
          >
            Hi There 👋 It's Me ......
            <div className="myname">RISHAV SARKAR </div>
          </motion.div>

          <motion.div
            variants={contentAnimation}
            initial="initial"
            animate="animate"
            custom={1}
            className="header_left_container_subheader"
          >
            I'm A
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Software Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                " FrontEnd Developer",
                2000,
                " BackEnd Developer",
                2000,
              ]}
              wrapper="span"
              speed={20}
              className="myrole"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            variants={contentAnimation}
            initial="initial"
            animate="animate"
            custom={2}
            className="header_left_container_content"
          >
            "Versatile full-stack developer proficient in front-end and back-end
            technologies, with a passion for creating seamless, innovative
            applications and solutions."
          </motion.div>
        </div>

        <div className="header_left_buttons">
          <motion.div
            variants={buttonsAnimation}
            initial="contactInitial"
            animate="contactAnimate"
            whileHover="hover"
            whileTap="tap"
            className="header_left_buttons_contact"
          >
            Contact Me <FaPaperPlane />
          </motion.div>

          <motion.div
            variants={buttonsAnimation}
            initial="cvInitial"
            animate="cvAnimate"
            whileHover="hover"
            whileTap="tap"
            className="header_left_buttons_cv"
          >
            Download CV <FaFileAlt />
          </motion.div>
        </div>
        <motion.ul
          variants={socialMediaAnimation}
          initial="initial"
          animate="animate"
          className="social_media"
        >
          <li className="social_media_facebook">
            <FaFacebook />
          </li>
          <li className="social_media_github">
            <ImGithub />
          </li>
          <li className="social_media_linkedin">
            <BsLinkedin />
          </li>
        </motion.ul>
      </div>
      <div className="header_right">
        <motion.div
          variants={picAnimation}
          initial="initial"
          animate="animate"
          className="header_right_image"
        >
          <img src="/img/header_img.jpg" alt="default.jpg"></img>
        </motion.div>
        <div className="scolldown">
          <CgScrollV />
        </div>
      </div>
    </Element>
  );
}
