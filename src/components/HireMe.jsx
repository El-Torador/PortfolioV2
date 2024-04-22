import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";

function HireMe() {
  return <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
    <div className="w-48 h-auto flex items-center justify-center relative">
      <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
      <Link
        href="mailto:kagmeni77@gmail.com"
        className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
        -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark 
        w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition-colors duration-300 ease-in-out
        dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
        "
      >
        Hire Me
      </Link>
    </div>
  </div>;
}

export default HireMe;
