import React from "react";
import { motion } from "framer-motion";

function TransitionEffect() {
  return <>
    <motion.div
      className="wave z-30 bg-primary"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%", }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
    <motion.div
      className="wave z-20 bg-light"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%", }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
    />
    <motion.div
      className="wave z-10 bg-dark"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%", }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
    />
  </>;
}

export default TransitionEffect;
