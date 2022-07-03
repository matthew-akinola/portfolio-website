import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "./AnimatedText";
import { SocialIcon } from "react-social-icons";

function Hero({ heroRef, handleShade }) {
  const { ref, inView } = useInView();
  const [loading, setLoading] = useState(true);
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 700], [0, 800]);
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
  const placeholderText = [{ type: "heading2", text: "Yanfunmi." }];
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
    setTimeout(() => {
      handleReplay();
    }, 100);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="hero"
      ref={heroRef}
      className={`${
        loading && "blur-sm"
      }  my-10 py-10 min-h-[92vh] relative  hero`}
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
        style={{ y: y2, x: 200, scale: 1.7 }}
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

      <div className=" md:max-w-xl max-w-lg" ref={ref}>
        <div className="hero-content">
          <motion.p className=" font-poppins md:px-0 ">
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

            <motion.span
              variants={textContainer}
              initial="hidden"
              animate={replay ? "visible" : "hidden"}
              className="font-extrabold md:text-4xl text-2xl textContainer text-orange-600 "
            >
              {placeholderText2.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </motion.span>
            <br />

            <motion.span
              variants={item}
              initial="hidden"
              animate="show"
              className="justify-start forest:text-white lemonade:text-accent"
            >
              I'm a Full-stack developer(Frontend heavy) specilized in building top notch
              applications for the web. I'm currently learning blockchain
              development and building more projects.
              <span className="flex items-center justify-evenly mt-2">
                <div>
                  <SocialIcon
                    url="https://github.com/Dubjay18/"
                    fgColor="green"
                    bgColor="transparent"
                    className="hover:scale-125 shadow-primary  transition-all shadow-md rounded-lg duration-500 w-5"
                  />
                </div>
                <div>
                  <SocialIcon
                    url="https://www.linkedin.com/in/oluwayanfunmi-jeje-a023b2210/"
                    fgColor="green"
                    bgColor="transparent"
                    className="hover:scale-125 shadow-primary  transition-all shadow-md rounded-lg duration-500"
                  />
                </div>
                <div>
                  <SocialIcon
                    url="https://twitter.com/@YanfunmiJ"
                    fgColor="green"
                    bgColor="transparent"
                    className="hover:scale-125 shadow-primary  transition-all shadow-md rounded-lg duration-500"
                  />
                </div>
              </span>
            </motion.span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
