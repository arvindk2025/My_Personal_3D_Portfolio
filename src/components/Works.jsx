import React from 'react';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import { styles } from '../styles';
import { github, youtube } from '../assets';
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({
  index,
  name,
  name1,
  description,
  tags,
  image,
  source_code_link,
  source_code_link_1,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[460px] w-full'
      >
        <div className='relative w-full h-full'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='relative inset-[30]  flex justify-end m-4   md:ml-50 md:gap-10  card-img_hover'>
            <div
              onClick={() => window.open(source_code_link_1, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={youtube}
                alt='source code'
                className='w-7 h-7 object-contain'
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            > 
              <img
                src={github}
                alt='source code'
                className='w-8 h-8 object-contain'
              />
            </div>

          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="mt-4">
          <a
            className="bg-[#804dee]  hover:bg-transparent hover:border-[2px] hover:border-[#804dee] rounded-md w-fit flex justify-center items-center hover:text-[#804dee] px-4 py-2 font-semibold"
            href={link}
            target="blank"
          >
            Live Hosted Link
          </a>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
        <h3 className='text-white font-bold text-[24px]'>{name1}</h3> 
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex  flex-col h-full">
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex '>
          <motion.p 
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, '');