import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark absolute dark:text-dark dark:bg-light
        "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center  justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark dark:text-dark dark:bg-light
        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="14vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="Graphql" x="15vw" y="-12vw" />
        <Skill name="Node.js" x="32vw" y="-5vw" />
        <Skill name="Java" x="0vw" y="-20vw" />
        <Skill name="Spring Boot" x="-25vw" y="18vw" />
        <Skill name="TypeScript" x="-25vw" y="-22vw" />
        <Skill name="AWS" x="-20vw" y="-2vw" />
      </div>
    </>
  );
};

export default Skills;
