import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { red } from "tailwindcss/colors";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="footer items-center p-4 dark:bg-transparent text-neutral-content   border-t-2 border-primary"
    >
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div>
          <SocialIcon
            url="https://github.com/matthew-akinola/"
            fgColor="white"
            bgColor="black"
          />
        </div>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/matthew-akinola/"
            fgColor="white"
          />
        </div>
        <div>
          <SocialIcon url="https://twitter.com/AkinolaMatthe11" fgColor="white" />
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
