import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

function FadeInWhenVisible({ children, i }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
export default FadeInWhenVisible;
