import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

/**
 * DETAILS COMPONENT
 * @param {{ type: string, time: string, place: string, info: string, address: string, schoolLink: string }} props 
 * @returns {JSX.Element}
 */
const Details = ({ type, time, place, info, address, schoolLink }) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <a href={schoolLink}
        target="_blank"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} · {place}
        </span>
      </a>
      <p className="font-medium w-full md:text-sm">
        {info}
      </p>
      <small>{address}</small>
    </motion.div>
  </li>
}

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return <div className="my-64">
    <h2 className="section-title xs:text-4xl mb-64 md:mb-16">Education</h2>

    <section ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[2px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
      />
      <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
          type="Software Engineering Expert Degree"
          time="2022 - 2024"
          place="ESIEA"
          schoolLink="https://www.esiea.fr/"
          address="Ivry sur seine, France."
          info="Creation of an IOS meeting application with automatic transcription, Implementation of a data structure to structure the data contained in a large log file and read it quickly to optimize the API response time and implement AI model Classifier."
        />
        <Details
          type="Bachelor's degree in Computer Science"
          time="2021 - 2022"
          place="ESIEA"
          schoolLink="https://www.esiea.fr/"
          address="Ivry sur seine, France."
          info="Graduate Bachelor in Computer Science after an internship of 6 months and a validated defense."
        />
        <Details
          type="Bachelor's degree in Computer Science"
          time="2017 - 2020"
          place="Institut Africain Informatique"
          schoolLink="https://web.campusiai.com"
          address="Yaounde, Cameroon."
          info="Graduated as a Computer Works Engineer after 3 years of intense studies and academic projects carried out. Obtaining an Excellent mention during the defense."
        />
      </ul>
    </section>
  </div>;
}

export default Education;
