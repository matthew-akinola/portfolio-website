import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Head from "next/head";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { useStateValue } from "../stateProvider";
import headIcon from "../svgs/he2.svg";
import ogIcon from "../images/OGimage.jpg";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [shade, setShade] = useState(false);
  const aboutRef = useRef();
  const expRef = useRef();
  const contactRef = useRef();
  const projectRef = useRef();
  const heroRef = useRef();
  const [{ darkmode }, dispatch] = useStateValue();
  const aboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleShade = (e) => {
    setShade(e);
  };
  const refScroll = (e) => {
    e.current?.scrollIntoView({ behaviour: "smooth" });
  };
  async function AlertDismissible(words, error) {
    if (!error) {
      toast.success(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div
      data-theme={darkmode ? "forest" : "lemonade"}
      className={" overflow-hidden bg-base-100"}
    >
      <Head>
        <title>Dev-Jay</title>
        <link rel="icon" href={headIcon.src} sizes="16x16 32x32" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <meta property="og:title" content="Jeje Yanfunmi- Dev-jay" />
        <meta
          property="og:description"
          content="Jeje Yanfunmi - Dev-jay is and experienced full-stack developer that eats and breaths React js."
        />

        <meta property="og:image" content={ogIcon.src} />
        <meta property="og:url" content={"https://jayfolio.vercel.app"} />
      </Head>

      <div className="cus-scroll">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {loading ? (
              <motion.div className="cus-scroll overflow-y-hidden" key="loader">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                <Navbar
                  aboutScroll={aboutScroll}
                  refScroll={refScroll}
                  aboutRef={aboutRef}
                  expRef={expRef}
                  projectRef={projectRef}
                  contactRef={contactRef}
                  heroRef={heroRef}
                  shade={shade}
                />
                <Hero heroRef={heroRef} handleShade={handleShade} />
                <About refScroll={refScroll} aboutRef={aboutRef} />
                <Experience refScroll={refScroll} expRef={expRef} />
                <Projects refScroll={refScroll} projectRef={projectRef} />
                <Contact
                  refScroll={refScroll}
                  contactRef={contactRef}
                  AlertDismissible={AlertDismissible}
                />
                <Footer />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
