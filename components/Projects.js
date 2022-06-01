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
          <div className="flex w-full items-center justify-center px-4">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl xs:text-4xl  text-2xl my-8">
              Projects
            </h1>{" "}
            <hr className="w-24 mx-5 border-t-4 rounded-md border-secondary" />
          </div>
          <div className="grid place-items-center  lg:gap-36 gap-5 mx-10 md:mx-20 my-10">
            {projectData.map((project, index) => {
              return (
                <motion.div
                  variants={item}
                  initial="hidden"
                  animate={"show"}
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="card w-full md:w-2/3 glass bg-base-300 shadow-md image-full shadow-neutral hover:opacity-100"
                >
                  <figure className="bg-primary">
                    <img
                      src={project.image.src}
                      className="hover:opacity-100 cursor-pointer transition-all duration-500"
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title  text-xl text-primary font-poppins">
                      {project.name}
                    </h2>
                    <p className="forest:text-accent font-poppins">
                      {project.desp}.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-primary text-white border-primary">
                        <a href={project.githubLink} target="_blank">
                          <img src={gitIcon.src} alt="" className="w-6" />
                        </a>
                      </button>
                      <button className="btn bg-primary text-white border-primary">
                        <a href={project.liveLink} target="_blank">
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
