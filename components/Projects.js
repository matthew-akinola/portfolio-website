import React, { useEffect } from "react";
import projectData from "./data";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import gitIcon from "../svgs/github-4.svg";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Link from "next/link";

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
      animation.start((i) => ({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: i * 0.3,
          staggerChildren: 0.6,
          duration: 0.3,
          stiffness: 50,
        },
      }));
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
      <motion.div className=" pt-24 mb-10 -mt-14" id="project" ref={projectRef}>
        <div className="my-10">
          <div className="flex w-full items-center justify-center px-4">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl xs:text-4xl  text-2xl my-8">
              Projects
            </h1>{" "}
            <hr className="w-24 mx-5 border-t-4 rounded-md border-secondary" />
          </div>
          <motion.div className="grid lg:grid-cols-2 place-items-center  lg:gap-20 gap-5 mx-10 md:mx-20 my-10">
            {projectData.map((project, index) => {
              return (
                <FadeInWhenVisible>
                  <div class="wrapper hidden md:block  bg-transparent antialiased text-gray-900">
                    <div>
                      <img
                        src={project.image.src}
                        alt=" random imgee"
                        class="w-full object-cover object-center rounded-lg shadow-md hover:opacity-100 hover:z-40 cursor-pointer transition-all duration-500 bg-green opacity-75"
                      />

                      <div class="relative px-4 -mt-16  z-10">
                        <div class="bg-primary p-6 rounded-lg shadow-lg">
                          <div class="flex items-baseline"></div>

                          <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                            {project.name}
                          </h4>

                          <div class="mt-4">
                            <span class="text-white text-md font-semibold">
                              {" "}
                              <div className="card-actions justify-end">
                                
                                <Link href={`/project/${index}`}>
                                  <p className="text-center py-3 rounded-lg btn btn-accent font-bold ">
                                    More Info{" "}
                                    <ExternalLinkIcon className="w-6" />
                                  </p>
                                </Link>
                              </div>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={index}
                    className="card w-full md:glass bg-base-300 shadow-md image-full md:hidden lg:my-0 my-11 shadow-neutral hover:opacity-100"
                  >
                    <figure className="bg-primary md:hidden">
                      <img
                        src={project.image.src}
                        className="hover:opacity-100 cursor-pointer transition-all duration-500 md:hidden"
                        alt="Album"
                      />
                    </figure>
                    <div className="card-body md:hidden">
                      <h2 className="card-title  text-xl text-primary ">
                        {project.name}
                      </h2>
                      <div className="card-actions justify-end">
                        =
                        <Link href={`/project/${index}`}>
                          <p className="text-center py-3 rounded-lg btn btn-accent font-bold ">
                            More Info <ExternalLinkIcon className="w-6" />
                          </p>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
