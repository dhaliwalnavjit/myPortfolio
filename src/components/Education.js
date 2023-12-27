import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const first = useRef(null);
  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    items-center justify-between md:w-[80%]
    "
      ref={first}
    >
      <LiIcon reference={first} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p
          dangerouslySetInnerHTML={{ __html: info }}
          className="font-medium w-full md:text-sm"
        />
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of technology"
            time="07/2018 - 05/2022"
            place="Indian Institute Of Technology, Roorkee"
            info="Completed the bachelor degree in Electronics and communication Engg. in first division with 7.5 CGPA"
          />
           <Details
            type="Bachelor of technology"
            time="07/2018 - 05/2022"
            place="Indian Institute Of Technology, Roorkee"
            info="Completed the bachelor degree in Electronics and communication Engg. in first division with 7.5 CGPA"
          />
           <Details
            type="Bachelor of technology"
            time="07/2018 - 05/2022"
            place="Indian Institute Of Technology, Roorkee"
            info="Completed the bachelor degree in Electronics and communication Engg. in first division with 7.5 CGPA"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
