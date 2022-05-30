import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function Experience({ expRef }) {
  const [currentTab, setCurrentTab] = useState(1);
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
      console.log(inView);
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <div
        className="h-fit xl:h-fit  md:h-screen pt-24  mx-5 my-16"
        id="exp"
        ref={expRef}
      >
        <motion.div animate={animation} className="my-9">
          <div className="flex w-full items-center justify-center mx-5">
            {" "}
            <h1 className="prose prose-lg text-lime-400 font-bold md:text-6xl  xs:text-4xl text-2xl">
              Experience
            </h1>{" "}
            <hr className="w-24 mx-5" />
          </div>

          <div className="flex w-full justify-center">
            <div className="tabs mt-20 mb-10 ">
              <a
                className={`tab tab-lg hover:bg-base-300 transition-all duration-500 dark:text-gray-400 text-slate-900 tab-bordered ${
                  currentTab === 1
                    ? "tab-active text-lime-400 border-lime-400"
                    : ""
                }`}
                onClick={() => setCurrentTab(1)}
              >
                HNG
              </a>
              <a
                className={`tab tab-lg hover:bg-base-300 transition-all duration-500 dark:text-gray-400 text-slate-900 tab-bordered ${
                  currentTab === 2
                    ? "tab-active text-lime-400 border-lime-400"
                    : ""
                }`}
                onClick={() => setCurrentTab(2)}
              >
                KodeCamp
              </a>
              <a
                className={`tab tab-lg hover:bg-base-300 transition-all duration-500 dark:text-gray-400 text-slate-900 tab-bordered ${
                  currentTab === 3
                    ? "tab-active text-lime-400 border-lime-400"
                    : ""
                }`}
                onClick={() => setCurrentTab(3)}
              >
                ALX
              </a>
            </div>
          </div>
          {currentTab === 1 && (
            <div className="flex w-full justify-center">
              <div className="mx-10 md:mx-28 lg:mx-80">
                <h2 className="font-poppins md:text-2xl dark:text-white text-black  font-medium">
                  Frontend Developer{" "}
                  <span className="text-lime-400">@HNGi8</span>
                </h2>
                <p className="my-5">Internship</p>
                <p className="my-5">August 2021 - Oct 2021</p>
                <div className="exp w-fit  dark:text-gray-400 text-slate-900 ">
                  <ul>
                    <li className="">
                      Worked with a large team of developers to build the
                      company files plugin of a "Slack-like" app called
                      Zuri-chat.
                    </li>
                    <li>
                      Worked with a variety of tools Javascript React js, Next
                      js, SPA, Node js.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="flex w-full justify-center">
              <div className="mx-10 md:mx-28 lg:mx-80">
                <h2 className="font-poppins md:text-2xl dark:text-white text-black  font-medium">
                  React Js Developer{" "}
                  <span className="text-lime-400">@KodeCamp</span>
                </h2>
                <p className="my-5">Internship(Remote)</p>
                <p className="my-5">August 2021 - Dec 2021</p>
                <p className="my-5">Mar 2022 - Present</p>
                <div className="exp w-fit  dark:text-gray-400 text-slate-900 ">
                  <ul>
                    <li className="">
                      Worked with developers to build a learning managment
                      system for kodecamp
                    </li>
                    <li>
                      Built a variety of web apps with Apis, Javascript, Html,
                      React js, Firebase.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {currentTab === 3 && (
            <div className="flex w-full justify-center">
              <div className="mx-10 md:mx-28 lg:mx-80">
                <h2 className="font-poppins md:text-2xl dark:text-white text-black  font-medium">
                  Software Engineer{" "}
                  <span className="text-lime-400">@alx_africa</span>
                </h2>
                <p className="my-2">Internship</p>
                <p className="my-2">Feb 2022 - Present</p>
                <div className="exp w-fit  dark:text-gray-400 text-slate-900 ">
                  <ul>
                    <li className="">
                      Learnt how to write C programs, Bash scripts, Python
                      programs.
                    </li>
                    <li>
                      Worked with other developers on Software engineering
                      projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
