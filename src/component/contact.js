import Lottie from "lottie-react";
import mailAnimation from "../animationloffiees/mailAnimation.json";
import { Element } from "react-scroll";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { buttonsAnimation } from "../animtionVariants/headerAnimation";
import {
  formAnimation,
  mailimageAnimation,
} from "../animtionVariants/contactAnimation";

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
        <motion.div
          variants={formAnimation}
          initial="initialContainer"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
          className="contact_form_container"
        >
          <motion.form
            variants={formAnimation}
            initial="initialForm"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
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
          </motion.form>
        </motion.div>
        <motion.div
          variants={mailimageAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="contact_form_animation"
        >
          <Lottie
            animationData={mailAnimation}
            style={{
              height: "50rem",
              width: "50rem",
            }}
            loop={true}
          />
        </motion.div>
      </div>

      <h3 style={{ marginBottom: "2rem" }}>
        You Can Also Directly Contact Me At rishavsarkar04@gmail.com Or Using
        Above Form
      </h3>
    </Element>
  );
}
