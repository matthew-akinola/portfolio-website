import React, { useEffect } from "react";
import projectData from "./data";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import gitIcon from "../svgs/github-4.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

function Projects({ projectRef }) {
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
      <motion.div
        animate={animation}
        className=" pt-24 mb-10"
        id="project"
        ref={projectRef}
      >
        <div className="my-10">
          <div className="flex w-full items-center justify-center mx-7">
            {" "}
            <h1 className="prose prose-lg text-lime-400 font-bold md:text-6xl xs:text-4xl  text-2xl my-8">
              Projects
            </h1>{" "}
            <hr className="w-24 mx-5" />
          </div>
          <div className="grid md:grid-cols-2 lg:gap-10 gap-5 mx-10 my-10">
            {projectData.map((project, index) => {
              return (
                <motion.div
                  variants={item}
                  initial="hidden"
                  animate={"show"}
                  key={index}
                  className="card glss  dark:bg-base-200 bg-slate-300 shadow-xl"
                >
                  <figure className="bg-lime-400">
                    <img
                      src={project.image.src}
                      className="opacity-75 hover:opacity-100 cursor-pointer transition-all duration-500"
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title  text-xl text-lime-400">
                      {project.name}
                    </h2>
                    <p className="dark:text-gray-400 text-slate-900 ">
                      {project.desp}.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-lime-400 text-white border-lime-400">
                        <a href={project.githubLink} target="_blank">
                          <img src={gitIcon.src} alt="" className="w-6" />
                        </a>
                      </button>
                      <button className="btn bg-lime-400 text-white border-lime-400">
                        <a href={project.liveLink}>
                          <ExternalLinkIcon className="w-6" />
                        </a>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
