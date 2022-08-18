import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function Experience({ expRef }) {
  const [currentTab, setCurrentTab] = useState(1);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const { scrollY } = useViewportScroll();
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);
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
      console.log(inView);
    }
  }, [inView]);
  return (
    <motion.div ref={ref} className="relative">
    
      <motion.div
        className=" min-h-[92vh] pt-24   mx-5 my-16"
        id="exp"
        ref={expRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 0, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="my-9 relative"
        >
          <motion.svg
            className={"absolute w-20 left-96"}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: [200, 150, 0], y: [0, -50, -100] }}
            transition={{ duration: 6, delay: 0.5, yoyo: Infinity }}
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
            className={"absolute w-20 left-96"}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: [-200, -150, 0], y: [0, 50, 100] }}
            transition={{ duration: 6, delay: 0.5, yoyo: Infinity }}
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
            className={"absolute w-20 top-72 left-2/3"}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: [200, 150, 0], y: [0, -50, -100] }}
            transition={{ duration: 6, delay: 0.5, yoyo: Infinity }}
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
            className={"absolute w-20 top-72 left-2/3"}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: [-200, -150, 0], y: [0, 50, 100] }}
            transition={{ duration: 6, delay: 0.5, yoyo: Infinity }}
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
          <div className="flex w-full items-center justify-center mx-5">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl  xs:text-4xl text-2xl">
              Experience
            </h1>{" "}
            <hr className="w-24 mx-5 border-t-4 rounded-md border-secondary" />
          </div>

          <div className="flex w-full justify-center">
            <div className="tabs mt-20 mb-10 font-poppins">
              <a
                className={`tab tab-lg hover:bg-base-300 transition-all duration-500 forest:text-white lemonade:text-accent tab-bordered ${
                  currentTab === 1
                    ? "tab-active text-lime-400 border-lime-400"
                    : ""
                }`}
                onClick={() => setCurrentTab(1)}
              >
                KodeCamp
              </a>
              <a
                className={`tab tab-lg hover:bg-base-300 transition-all duration-500 forest:text-white lemonade:text-accent tab-bordered ${
                  currentTab === 2
                    ? "tab-active text-lime-400 border-lime-400"
                    : ""
                }`}
                onClick={() => setCurrentTab(2)}
              >
                HNG
              </a>
              <a
                className={`tab tab-lg hover:bg-base-300 transition-all duration-500 forest:text-white lemonade:text-accent tab-bordered ${
                  currentTab === 3
                    ? "tab-active text-lime-400 border-lime-400"
                    : ""
                }`}
                onClick={() => setCurrentTab(3)}
              >
                Zuri
              </a>
            </div>
          </div>
          {currentTab === 1 && (
            <div className="flex w-full justify-center">
              <div className="mx-10 md:mx-28 lg:mx-80">
                <h2 className="font-poppins md:text-2xl text-secondary  font-medium">
                  Fastapi Developer{" "}
                  <span className="text-lime-400 underline decoration-dashed">
                    @KodeCamp
                  </span>
                </h2>
                <p className="my-5 font-poppins">Internship(Remote)</p>
                <p className="my-5 font-poppins">Apr 2022 - July 2022</p>
                <div className="exp w-fit  forest:text-white lemonade:text-accent  font-poppins">
                  <ul>
                    <li className="">
                      Worked with developers to build a learning managment
                      system for kodecamp
                    </li>
                    <li>
                      Built a variety of scalable APIs using, Python, Fastapi,
                      AWS, Docker.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="flex w-full justify-center">
              <div className="mx-10 md:mx-28 lg:mx-80">
                <h2 className="font-poppins md:text-2xl text-secondary  font-medium">
                  Backend Developer{" "}
                  <span className="text-lime-400 underline decoration-dashed">
                    @HNGi8
                  </span>
                </h2>
                <p className="my-5 font-poppins">Internship</p>
                <p className="my-5 font-poppins">August 2021 - Oct 2021</p>
                <div className="exp w-fit  forest:text-white lemonade:text-accent  font-poppins">
                  <ul>
                    <li className="">
                      Worked with a large team of developers to build the
                      company's channels plugin of a "Slack-like" app called
                      Zuri-chat.
                      Conducted testing and validation to ensure APIs performance match
                      it intended outcome

                    </li>
                    <li>
                      Worked with a variety of tools: Python, Django
                      REST, Swagger, Redis.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {currentTab === 3 && (
            <div className="flex w-full justify-center">
              <div className="mx-10 md:mx-28 lg:mx-80">
                <h2 className="font-poppins md:text-2xl text-secondary  font-medium">
                  Backend Developer{" "}
                  <span className="text-lime-400 underline decoration-dashed">
                    @Zuri
                  </span>
                </h2>
                <p className="my-5 font-poppins">Internship</p>
                <p className="my-5 font-poppins">Jan 2021 - April 2021</p>
                <div className="exp w-fit  forest:text-white lemonade:text-accent  font-poppins">
                  <ul>
                    <li className="">
                      Worked with a team of developers to build an application that helps 
                      in peer to peer money transfer, withdrawal of funds and electric bills payment.
                    </li>
                    <li>
                      Worked with a variety of tools: Python, Django
                      REST, Swagger, Flutterwave.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
