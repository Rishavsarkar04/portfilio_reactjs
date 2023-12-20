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
import { useInView } from "react-hook-inview";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact({ setActiveTab, mode }) {
  const [loading, setLoading] = useState(false);

  const [ref] = useInView({
    root: null,
    threshold: 0.6,
    unobserveOnEnter: false,
    onEnter: (enter, observer) => {
      setActiveTab("contact");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );
      console.log(res);
      reset();
      if (res.status !== 200) {
        throw new Error("Email Is Not Sent");
      }

      toast.success("Email is sent Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactRef" ref={ref}>
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form_header"> Let's Build Future Together !</div>
              <div className="name">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: "Name is Required" })}
                />
                <p className="error">{errors.name?.message}</p>
              </div>
              <div className="email">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid Email Address",
                    },
                  })}
                />
                <p className="error">{errors.email?.message}</p>
              </div>
              <div className="subject">
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is Required" })}
                />
                <p className="error">{errors.subject?.message}</p>
              </div>

              <div className="message">
                <textarea
                  placeholder="Enter Your Message Here...."
                  {...register("message", { required: "Message is Required" })}
                ></textarea>
                <p className="error"> {errors.message?.message}</p>
              </div>

              <motion.button
                variants={buttonsAnimation}
                initial="contactInitial"
                animate="contactAnimate"
                whileHover="hover"
                whileTap="tap"
                className="submit"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  "SENDING....."
                ) : (
                  <>
                    SEND <FaPaperPlane />
                  </>
                )}
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

        <h3 className="contact_info">
          You Can Also Directly Contact Me At rishavsarkar04@gmail.com Or Using
          Above Form
        </h3>
      </Element>
    </div>
  );
}
