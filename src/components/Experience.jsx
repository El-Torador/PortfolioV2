import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

/**
 * DETAILS COMPONENT
 * @param {{ position: string, company: string, companyLink: string, time: string, address: string, work: string }} props 
 * @returns {JSX.Element}
 */
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full"
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {position}&nbsp;
        <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
          @{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} · {address}
      </span>
      <p className="font-medium w-full md:text-sm">
        {work}
      </p>
    </motion.div>
  </li>
}

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return <div className="my-64">
    <h2 className="section-title xs:text-4xl mb-64 md:mb-16">Experience</h2>

    <section ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[2px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
      />
      <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
          position="FullStack Engineer"
          company="LesBonsArtisans"
          companyLink="https://www.lesbonsartisans.fr"
          time="October 2022 - October 2024"
          address="Clichy, France"
          work="Development of intelligent reminder functionality (LLM models, text to speech, voiceMail)
Creation of a private library as a layer between our entities and our database (ORM, CI/CD, Versioning)
Migration of apis route architecture into webhooks components (MonoRepo, CI/CI, Tests, AWS, NGNIX)
Database optimization through horizontal scaling on Mongo DB (MONGO SHARDING),
Bug resolution."
        />

        <Details
          position="Freelance Developer"
          company="Azatys"
          companyLink="https://azatys.fr"
          time="September 2023 - February 2024"
          address="France"
          work="Integration Shopify Connector for the Azatys platform, migrate backend architecture to microservices and update CI/CD for the new cloud architecture."
        />

        <Details
          position="FullStack Developer"
          company="Azatys"
          companyLink="https://azatys.fr"
          time="March 2022 - September 2023"
          address="Issy-les-Moulineaux, France"
          work="Development of the Azatys platform SAAS and its API in Flask for the provision of data processed by the AI SARA (Solution for Analysis and Autonomous Recommendations). Cloud environment management."
        />

        <Details
          position="Lead Developer"
          company="GMC Assurance"
          companyLink="https://www.gmcassurances.com"
          time="November 2020 - May 2021"
          address="Yaounde, Cameroon"
          work="Management of a team of 5 people. Implementation of interfaces for tracking insurance certificates and algorithm for generating attestation batches after in-store delivery."
        />
      </ul>
    </section>
  </div>;
}

export default Experience;
