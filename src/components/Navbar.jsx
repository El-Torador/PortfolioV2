import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon, TwitterIcon, DribbbleIcon, PinterestIcon, SunIcon, MoonIcon } from "./Icons";
import useTheme from "@/hooks/useTheme";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  )
}

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
    <nav>
      <CustomLink href="/" title="Home" className="mr-4" />
      <CustomLink href="/about" title="About" className="mx-4" />
      <CustomLink href="/projects" title="Projects" className="mx-4" />
      <CustomLink href="/articles" title="Articles" className="ml-4" />
    </nav>
    <nav className="flex items-center justify-center flex-wrap">
      <motion.a
        href="https://www.linkedin.com/in/torador"
        target="_blank"
        className="w-6 mr-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <LinkedInIcon />
      </motion.a>
      <motion.a
        href="https://github.com/El-Torador"
        target="_blank"
        className="w-6 mx-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        href="https://twitter.com/JordanKagmeni"
        target="_blank"
        className="w-6 mx-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <TwitterIcon />
      </motion.a>
      <motion.a
        href="https://www.pinterest.com/jkagmeni"
        target="_blank"
        className="w-6 mx-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <PinterestIcon />
      </motion.a>
      <motion.a
        href="https://dribbble.com/Torador"
        target="_blank"
        className="w-6 ml-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <DribbbleIcon />
      </motion.a>
      <button
        onClick={toggleTheme}
        className="ml-3 w-9 flex items-center justify-center rounded-full p-1"
      >
        {
          theme === "dark" ?
            <SunIcon className="fill-dark" />
            : <MoonIcon className="fill-dark" />
        }
      </button>
    </nav>
    <div className="absolute left-[50%] top-2 translate-x-[-50%]">
      <Logo />
    </div>
  </header >;
}

export default Navbar;
