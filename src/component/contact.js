import Lottie from "lottie-react";
import mailAnimation from "../animationlottiefiles/mailAnimation.json";
import { Element } from "react-scroll";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { buttonsAnimation } from "../animtionVariants/headerAnimation";

export default function Contact() {
  return (
    <Element className="contact">
      <motion.div
        variants={headerAnimate}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{ once: true }}
        className="contact_header"
      >
        Contact Me
      </motion.div>
      <div className="contact_form">
        <div className="contact_form_container">
          <form>
            <div className="form_header"> Let's Build Future Together !</div>
            <div className="name">
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="email">
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="subject">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="message">
              <textarea placeholder="Enter Your Message Here...."></textarea>
            </div>

            <motion.button
              variants={buttonsAnimation}
              initial="contactInitial"
              animate="contactAnimate"
              whileHover="hover"
              whileTap="tap"
              className="submit"
              type="submit"
            >
              Send
              <FaPaperPlane />
            </motion.button>
          </form>
        </div>
        <div
          className="contact_form_animation"
          //   style={{ border: "2px solid green" }}
        >
          <Lottie
            animationData={mailAnimation}
            style={{
              height: "50rem",
              width: "50rem",
            }}
            loop={true}
          />
        </div>
      </div>
    </Element>
  );
}
