import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from "../hoc";


const ServiceCard = ({index, icon, title}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
         <div className="flex justify-between items-center">
          <h2 className={styles.sectionHeadText}> Overview.</h2>
            <a
              href="https://drive.google.com/file/d/1iq6aTbmF6wuLXHWmKBjGZkLqWePYC0oN/view?usp=drive_link"
              target="_blank"  // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <button className="bg-green-600 text-white py-1 px-2 rounded-full hover:bg-purple-600 transition duration-300 sm:py-2 sm:px-3 md:py-3 md:px-4 font-bold text-base">Download My Resume</button>
            </a>
        </div>


      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an experienced Full-Stack developer proficient in React JS, Node JS, Express JS, MongoDB, JavaScript, HTML, CSS, Tailwind CSS & Next JS.
        I excel in designing, coding, testing, and debugging web applications, always striving for optimal user experiences. If my skills align with your requirements, please don't hesitate to get in touch with me.
        
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service , index) => (
          <ServiceCard key={service.title} index ={index} {...service} />
        ))}

      </div>
    </>
    
  )
}

export default SectionWrapper(About, "about")
