import React from "react";
import { motion } from "framer-motion";

const SoftSkill = ({ title, x, y, inertie = false }) => {
  return <motion.div
    className={`skill ${inertie ? 'p-8' : 'py-3 px-6'}
     `}
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x, y, transition: { duration: 1.5 } }}
    viewport={{ once: true }}
  >
    {title}
  </motion.div>
}

function SoftSkills() {
  return <>
    <h2 className="section-title md:mt-32">Soft Skills</h2>
    <section className="section-skills">
      <SoftSkill title="Human" inertie />
      <SoftSkill title="Leadership" x="12vw" y="0vw" />
      <SoftSkill title="Team Work" x="-14vw" y="2vw" />
      <SoftSkill title="Rigourosity" x="10vw" y="6vw" />
      <SoftSkill title="Stand-alone" x="0vw" y="10vw" />
      <SoftSkill title="Organisation" x="-10vw" y="8vw" />
      <SoftSkill title="Perfectionist" x="4vw" y="-8vw" />
      <SoftSkill title="Analysis Skill" x="15vw" y="-5vw" />
      <SoftSkill title="Creativity" x="-14vw" y="-4vw" />
      <SoftSkill title="Adaptability" x="-10vw" y="-10vw" />
    </section>
  </>;
}

export default SoftSkills;
