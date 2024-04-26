import Link from "next/link";
import React, { useState } from "react";
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
        className={`nav-link-underline ${router.asPath === href ? 'w-full' : 'w-0'} bg-dark dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  )
}

/**
 * CUSTOM MOBILE LINK COMPONENT
 * @param {{ href: string, title: string, className?: string, toggle: () => void }} props 
 * @returns {JSX.Element}
 */
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`nav-link-underline ${router.asPath === href ? 'w-full' : 'w-0'} bg-light dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  )
}

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <header className="header">

    {/* DESKTOP NAV */}
    <div className="nav-desktop-container">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="nav-social-links-container">
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
          className="theme-btn"
        >
          {
            theme === "dark" ?
              <SunIcon className="fill-dark" />
              : <MoonIcon className="fill-dark" />
          }
        </button>
      </nav>
    </div>

    {/* MOBILE NAV */}
    <button className="hamburger-btn" onClick={handleClick}>
      <span className={`hamburger-bar ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`hamburger-bar my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`hamburger-bar ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>
    {
      isOpen && <motion.div
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
        className="nav-mobile-container"
      >
        <nav className="nav-mobile-links-container">
          <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
          <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
        </nav>
        <nav className="nav-social-links-container mt-2">
          <motion.a
            href="https://www.linkedin.com/in/torador"
            target="_blank"
            className="w-6 mr-3 sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/El-Torador"
            target="_blank"
            className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/JordanKagmeni"
            target="_blank"
            className="w-6 mx-3 sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.pinterest.com/jkagmeni"
            target="_blank"
            className="w-6 mx-3 sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/Torador"
            target="_blank"
            className="w-6 ml-3 sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={toggleTheme}
            className="theme-btn bg-light dark:bg-dark"
          >
            {
              theme === "dark" ?
                <SunIcon className="fill-dark" />
                : <MoonIcon className="fill-dark" />
            }
          </button>
        </nav>
      </motion.div>
    }

    <div className="absolute left-[50%] top-2 translate-x-[-50%]">
      <Logo />
    </div>
  </header >;
}

export default Navbar;