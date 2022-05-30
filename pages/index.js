import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Head from "next/head";
import { useState, useRef } from "react";
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
  return (
    <div
      className={
        darkmode
          ? " overflow-hidden  dark dark:bg-base-100"
          : " overflow-hidden bg-slate-200 dark:bg-base-100"
      }
    >
      <Head>
        <title>Dev-Jay</title>
        <link rel="icon" href={headIcon.src} sizes="16x16 32x32" />
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
                <Contact refScroll={refScroll} contactRef={contactRef} />
                <Footer />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
