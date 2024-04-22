import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const sigleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },

}

/**
 * ANIMATED TEXT COMPONENT
 * @param {{ text: string}} props 
 * @returns {JSX.Element}
 */
function AnimatedText({ text, className = "" }) {
  return <div className={`w-full mx-auto py-3 flex items-center justify-center text-center overflow-hidden`}>
    <motion.h1
      className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {
        text.split(" ").map((word, index) => {
          return <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={sigleWord}
          >
            {word}&nbsp;
          </motion.span>;
        })
      }
    </motion.h1>
  </div>;
}

export default AnimatedText;
