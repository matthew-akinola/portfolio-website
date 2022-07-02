import Image from "next/image";
import { useRouter } from "next/router";
import projectData from "../../components/data";
import Head from "next/head";
import Link from "next/link";
import { useStateValue } from "../../stateProvider";
import headIcon from "../../svgs/he2.svg";
import ogIcon from "../../images/OGimage.jpg";
import Navbar from "../../components/Navbar";
import AnimatedText from "../../components/AnimatedText";
import { useState } from "react";
const project = () => {
  const [{ darkmode }, dispatch] = useStateValue();
  const [replay, setReplay] = useState(true);
  const router = useRouter();
  const placeholderText = [{ type: "heading2", text: "Loading..." }];
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 1600);
  };
  let { id } = router.query;
  if (!id) {
    return (
      <div
        data-theme={darkmode ? "forest" : "lemonade"}
        className="h-[100vh] w-full flex justify-center items-center"
      >
       <Head>
        <title>Jeje Yanfunmi- Dev-jay</title>
        <meta
          name="description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />
        <meta property="og:url" content="https://jayfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jeje Yanfunmi- Dev-jay" />
        <meta
          property="og:description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jayfolio.vercel.app" />
        <meta property="twitter:url" content="https://jayfolio.vercel.app/" />
        <meta name="twitter:title" content="Jeje Yanfunmi- Dev-jay" />
        <meta
          name="twitter:description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />
      </Head>
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    );
  }
  return (
    <div
      data-theme={darkmode ? "forest" : "lemonade"}
      className="w-full min-h-[100vh] overflow-x-hidden"
    >

      <Head>
        <title>Jeje Yanfunmi- Dev-jay</title>
        <meta
          name="description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />
        <meta property="og:url" content="https://jayfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jeje Yanfunmi- Dev-jay" />
        <meta
          property="og:description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jayfolio.vercel.app" />
        <meta property="twitter:url" content="https://jayfolio.vercel.app/" />
        <meta name="twitter:title" content="Jeje Yanfunmi- Dev-jay" />
        <meta
          name="twitter:description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />
      </Head>
      <Navbar />
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectData[id]?.image?.src}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectData[id]?.name}</h2>
          <h3>{projectData[id]?.topTech}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 h-ful">
        <div className="col-span-4">
          <p className="text-primary">Project</p>
          <h2>Overview</h2>
          <p>{projectData[id]?.desp}</p>
          <a
            href={projectData[id]?.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8  btn btn-primary">
              Code
            </button>
          </a>
          <a href={projectData[id]?.liveLink} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 btn btn-primary">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {projectData[id]?.technologies?.map((tech, i) => {
                return (
                  <p
                    key={i}
                    className={`${
                      darkmode ? "text-accent" : "text-secondary"
                    } py-2 flex items-center`}
                  >
                    {tech}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default project;
