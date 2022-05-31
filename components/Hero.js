import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero({ heroRef, handleShade }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      handleShade(true);
    }
    if (inView) {
      handleShade(false);
    }
  }, [inView]);
  const container = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 1.6,
        staggerChildren: 0.6,
        duration: 1,
        bounce: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 1.6,
        duration: 1.6,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="hero"
      ref={heroRef}
      className=" my-10 flex  items-center justify-around min-h-[92vh]   hero "
    >
      <div className="md:mx-80 mx-40" ref={ref}>
        <p className=" font-poppins ">
          <motion.span
            variants={item}
            initial="hidden"
            animate="show"
            className="text-primary font-poppins leading-5 font-bold "
          >
            Hi, my name is
          </motion.span>
          <br />
          <br />
          <motion.span
            variants={item}
            initial="hidden"
            animate="show"
            className="md:text-6xl text-4xl text-primary font-extrabold font-sega"
          >
            Jeje Yanfunmi.
          </motion.span>
          <br />
          <br className="hidden md:block" />
          <motion.span
            variants={item}
            initial="hidden"
            animate="show"
            className="font-extrabold md:text-6xl text-4xl text-orange-600 "
          >
            I build things for the web.
          </motion.span>
          <br />
          <br />
          <br className="hidden md:block" />
          <motion.span
            variants={item}
            initial="hidden"
            animate="show"
            className="justify-start forest:text-white lemonade:text-accent"
          >
            I'm a software engineer specilized in building top notch full-stack
            web applications. I'm currently learning blockchain development and
            building more projects.
          </motion.span>
        </p>
      </div>
    </motion.div>
  );
}

export default Hero;
