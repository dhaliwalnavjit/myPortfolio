import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/Skills";

const Skills = () => {
  return (
    <>
      <h2
        className="mb-4 xl:mb-32 text-lg font-bold uppercase text-dark/75 dark:text-light/75
        xl:font-bold xl:text-8xl xl:mt-32 xl:w-full xl:text-center md:text-6xl md:mb-16
        xl:text-dark dark:xl:text-light
      "
      >
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => {
          return (
            <motion.div
              key={skill}
              className="border-solid border-dark border-2 p-3 font-medium rounded-md dark:border-light"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
