import React from "react";
import { motion } from "framer-motion";

const Skill = ({ title, x, y, color = null, href = null, inertie = false }) => {
  if (href) {
    return <motion.a
      href={href}
      style={color ? { backgroundColor: color } : {}}
      className={`skill ${color ? color + ' text-white' : 'bg-dark text-light dark:bg-light dark:text-dark'} ${inertie ? 'p-8' : 'py-3 px-6'}
     `}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {title}
    </motion.a>
  }
  return <motion.div
    className={`skill ${color ? color : 'bg-dark text-light dark:bg-light dark:text-dark'} ${inertie ? 'p-8' : 'py-3 px-6'}
     `}
    style={color ? { backgroundColor: color } : {}}
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x, y, transition: { duration: 1.5 } }}
    viewport={{ once: true }}
  >
    {title}
  </motion.div>
}

function Skills() {
  return <>
    <h2 className="section-title md:mt-32">Hard Skills</h2>
    <section className="section-skills">
      <Skill title="Web" inertie />
      <Skill title="HTML" x="9vw" y="0vw" />
      <Skill title="CSS" x="-8vw" y="2vw" />
      <Skill title="JS/TS" x="10vw" y="6vw" color="#f59e0b" href="/articles/monorepo" />
      <Skill title="React" x="0vw" y="10vw" href="/articles/reactJourney" color="#3b82f6" />
      <Skill title="Redux" x="-10vw" y="8vw" />
      <Skill title="TailwindCSS" x="4vw" y="-8vw" />
      <Skill title="UX/UI" x="15vw" y="-3vw" />
      <Skill title="Git" x="-7vw" y="-4vw" />
      <Skill title="NextJS" x="-11vw" y="-11vw" />
      <Skill title="NodeJS" x="14vw" y="-13vw" color="#8b5cf6" href="/articles/monorepo" />
      <Skill title="Python" x="-22vw" y="-5vw" />
      <Skill title="React Native" x="-20vw" y="2vw" />
      <Skill title="Swift" x="20vw" y="6vw" />
      <Skill title="MongoDB" x="5vw" y="-15vw" />
      <Skill title="PostgreSql" x="-12vw" y="15vw" />
      <Skill title="Docker" x="-25vw" y="10vw" />
      <Skill title="Kubernetes" x="15vw" y="15vw" />
      <Skill title="CI/CD" x="23vw" y="-5vw" />
      <Skill title="AWS" x="25vw" y="-10vw" />
      <Skill title="Data Structure" x="2vw" y="22vw" />
      <Skill title="Clean Architecture" x="-10vw" y="-22vw" />
    </section>
  </>;
}

export default Skills;
