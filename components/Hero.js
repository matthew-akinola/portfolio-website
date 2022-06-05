import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "./AnimatedText";

function Hero({ heroRef, handleShade }) {
  const { ref, inView } = useInView();
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);
  // const translate = useTransform(scrollY);
  useEffect(() => {
    if (!inView) {
      handleShade(true);
    }
    if (inView) {
      handleShade(false);
    }
  }, [inView]);
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [{ type: "heading2", text: "Jeje Yanfunmi." }];
  const placeholderText2 = [
    { type: "paragraph", text: "I build things for the web." },
  ];

  const textContainer = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 1600);
  };
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
  useEffect(() => {
    handleReplay();
  }, []);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="hero"
      ref={heroRef}
      className=" my-10 flex  items-center justify-around min-h-[92vh] relative  hero "
    >
      <motion.svg
        className={"absolute w-20 a"}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          x: [200, 150, 0],
          y: [0, -50, -100],
          scale: 1.1,
        }}
        transition={{ duration: 5.8, delay: 2.5, yoyo: Infinity }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        opacity=".3"
        fill="#84CC16"
      >
        <path
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
          opacity=".3"
          fill="#84CC16"
        />
      </motion.svg>
      <motion.svg
        className={"absolute w-20"}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: 1, x: [-200, -150, 0], y: [0, 50, 100] }}
        transition={{ duration: 5.8, delay: 2.5, yoyo: Infinity }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        opacity=".3"
        fill="#84CC16"
      >
        <path
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
          opacity=".3"
          fill="#84CC16"
        />
      </motion.svg>

      <motion.svg
        style={{ y: y2, x: 200, scale: 1.1 }}
        className={"absolute w-20"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        opacity=".3"
        fill="#84CC16"
      >
        <path
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
          opacity=".3"
          fill="#84CC16"
        />
      </motion.svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
      </svg> */}
      <div className="md:mx-80 sm:mx-10" ref={ref}>
        <motion.p style={{ y: y2 }} className=" font-poppins md:px-0 px-16">
          <motion.span
            variants={textContainer}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className="text-primary font-poppins leading-5 font-bold "
          >
            Hi, my name is
          </motion.span>
          <br />
          <br />
          <motion.span
            variants={textContainer}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className="md:text-6xl text-4xl text-primary font-extrabold font-sega"
          >
            <div className="textContainer">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.span>
          <br />
          <br className="hidden md:block" />
          <motion.span
            variants={textContainer}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className="font-extrabold md:text-6xl text-4xl textContainer text-orange-600 "
          >
            {placeholderText2.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
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
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Hero;
