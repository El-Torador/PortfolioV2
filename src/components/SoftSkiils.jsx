import React from "react";
import { motion } from "framer-motion";

const SoftSkill = ({ title, x, y, color = null, href = null, inertie = false, }) => {
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
    style={color ? { backgroundColor: color } : {}}
    className={`skill ${color ? color + ' text-white' : 'bg-dark text-light dark:bg-light dark:text-dark'} ${inertie ? 'p-8' : 'py-3 px-6'}
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
      <SoftSkill title="Leadership" x="12vw" y="0vw" color="#ec4899" href="/articles/leadership" />
      <SoftSkill title="Team Work" x="-14vw" y="2vw" />
      <SoftSkill title="Rigourosity" x="10vw" y="6vw" />
      <SoftSkill title="Stand-alone" x="0vw" y="10vw" color="#f97316" href="/articles/autonomy" />
      <SoftSkill title="Organisation" x="-10vw" y="8vw" />
      <SoftSkill title="Perfectionist" x="4vw" y="-8vw" color="#22c55e" href="/articles/perfectionnism" />
      <SoftSkill title="Analysis Skill" x="15vw" y="-5vw" />
      <SoftSkill title="Creativity" x="-14vw" y="-4vw" color="#78716c" href="/articles/autonomy" />
      <SoftSkill title="Adaptability" x="-10vw" y="-10vw" color="#64748b" href="/articles/autonomy" />
    </section>
  </>;
}

export default SoftSkills;
