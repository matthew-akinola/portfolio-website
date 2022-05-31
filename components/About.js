import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Personal from "../images/ab.jpg";
function About({ aboutRef }) {
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
  return (
    <div ref={aboutRef}>
      <div
        ref={ref}
        className="flex  items-center justify-around min-h-[92vh]"
        id="about"
      >
        <motion.div animate={animation} className="w-full mt-28">
          <div className="flex w-full  items-center justify-center px-4">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl xs:text-4xl text-2xl">
              About Me
            </h1>{" "}
            <hr className="w-24 mx-5" />
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-7  my-8 md:pt-10 sec2__right">
            <p className="col-span-7 md:col-span-4 md:mx-16 lg:mx-28  md:my-0 my-10 forest:text-white lemonade:text-accent md:px-0 px-5 font-poppins">
              Hello! My name is Yanfunmi, I am passionate about tech and i like
              building web apps. My interest in web development started back in
              2021. I'm a good problem solver, a chess player and a hard working
              person.
              <br />
              I'm currently a Computer science student at Obafemi Awolowo
              University, ile-ife.
              <br />
              <br />
              <span>
                {" "}
                Here are a few technologies I’ve been working with recently:
              </span>
              <div className="exp">
                <ul>
                  <span className="flex flex-wrap justify-between items-center  w-4/5 py-3">
                    <li>React Js</li>
                    <li>Firebase</li>
                  </span>
                  <span className="flex flex-wrap justify-between items-center w-4/5 py-3">
                    <li>Tailwind CSS</li>
                    <li>Next js</li>
                  </span>
                  <span className="flex flex-wrap justify-between items-center w-4/5 py-3">
                    <li>Node js</li>
                    <li>Mongo DB</li>
                  </span>
                </ul>
              </div>
            </p>
            <div className="col-span-7 md:col-span-3 flex flex-col items-center justify-start">
              <div className="w-fit border-2 border-primary bg-primary h-fit rounded-lg">
                <img
                  src={Personal.src}
                  width={"200px"}
                  height={"600px"}
                  className="border-2 border-primary rounded-lg hover:opacity-100 opacity-70 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
