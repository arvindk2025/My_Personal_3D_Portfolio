import React from 'react';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex items-center flex-col h-full">
        <p className={styles.sectionSubText}>
          "What tech stack have we used in our project?"
        </p>
        <h2 className={styles.sectionHeadText}>
          My Proficiency in
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-9'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Tech, "");
