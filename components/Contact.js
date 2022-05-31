import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import em from "../utils/emailKey";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Contact({ contactRef, AlertDismissible }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",

          staggerChildren: 0.6,
          duration: 0.3,
          stiffness: 50,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: "-100vw",
      });
    }
  }, [inView]);

  const submit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const serviceId = em.SERVICE_ID;
      const templateId = em.TEMPLATE_ID;
      const userId = em.USER_ID;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      AlertDismissible("Sent!");
    } else {
      AlertDismissible("Please fill in all fields.", true);
    }
  };
  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        className=" h-fit pt-44 mb-12"
        ref={contactRef}
      >
        
        <div className="mx-8">
          {" "}
          <div className="flex w-full items-center justify-center mx-7">
            {" "}
            <h1 className="prose prose-lg text-lime-400 font-bold md:text-6xl xs:text-4xl  text-2xl">
              Get in Touch
            </h1>{" "}
            <hr className="w-24 mx-5" />
          </div>
          <div className="flex w-full items-center justify-center my-10">
            <form className="w-full mx-10" onSubmit={submit}>
              {" "}
              <div className="flex w-full items-center justify-center  my-5">
                {" "}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered border-lime-400 w-full max-w-xl  input-lg shadow-lg dark:bg-base-300 bg-slate-100"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center justify-center  my-5">
                {" "}
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input input-bordered border-lime-400 w-full max-w-xl input-lg   shadow-lg dark:bg-base-300 bg-slate-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center justify-center">
                {" "}
                <textarea
                  cols="100"
                  rows="10"
                  placeholder="Your message"
                  value={message}
                  className=" border-lime-400  md:w-2/3 mx-2  textarea  dark:bg-base-300 bg-slate-100"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex w-full items-center justify-center  my-5">
                <button
                  type="submit"
                  className="btn btn-outline border-lime-400 text-lime-400 hover:bg-lime-400 xl:btn-xl hover:text-white"
                >
                  Send Message
                </button>
              </div>
              <span className={emailSent ? "visible" : "hidden"}>Sent!</span>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
