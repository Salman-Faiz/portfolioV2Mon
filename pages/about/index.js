/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaLaravel,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiMongodb,
  SiAdobephotoshop,
  SiJavascript,
  SiRedux,
  SiExpress,
  SiFigma,
} from 'react-icons/si';

// components

import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';

// framer motion
import { motion } from 'framer-motion';

// counter
import CountUp from 'react-countup';
import ParticlesContainer from '../../components/ParticlesContainer';


const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-[90vh] lg:h-[100vh] bg-primary/30 pt-32 lg:pt-0 text-center xl:text-left'>
      <ParticlesContainer />
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >

      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row lg:gap-x-6 relative'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center w-full sm:pt-16  lg:pt-0'>
          <motion.h3
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='font-bold lg:text-2xl xl:text-4xl '

          >
            Passionate <span className='text-accent'>Full-Stack Developer</span> Building Tomorrow's Web Solutions Today.
          </motion.h3>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' mx-auto lg:mx-0  md:my-5 mb-6 md:mb-12  px-2 lg:px-0'
          >
            2 years ago, I began freelancing as a developer. Since then, I've
            done remote work for many clients, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-5 lg:mb-0'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={28} duration={17} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={8} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>

            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[52%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            <div
              className={`${index === 0 &&
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(0)}
            >
              skills
            </div>
            <div
              className={`${index === 1 &&
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(1)}
            >
              experience
            </div>
            <div
              className={`${index === 2 &&
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(2)}
            >
              credentials
            </div>
          </div>
          <div className='py-5 mb-20 md:mb-0 flex flex-col gap-y-2 items-center xl:items-start'>
            {index === 0 && (
              <div>

                <div className='flex md:flex-row gap-x-2'>
                  <div className='flex'>
                    <div className='text-white/60 font-semibold mb-2 md:mb-0'>Frontend</div>
                    <div>-</div>
                  </div>
                  <div className=' flex flex-wrap md:flex-row  gap-x-3 items-center text-white '>
                    <div className='flex items-center'><FaHtml5 />HTML5</div>
                    <div className='flex items-center'><FaCss3 /> CSS3</div>
                    <div className='flex items-center'><SiJavascript />JavaScript</div>
                    <div className='flex items-center'><SiTypescript /> TypeScript</div>
                    <div className='flex items-center'><FaReact />ReactJs</div>
                    <div className='flex items-center'><SiRedux />Redux</div>
                    <div className='flex items-center'><SiNextdotjs />NextJs</div>
                    <div className='flex items-center'><SiFramer />Farmer</div>
                    <div className='flex items-center'><FaSass />Sass</div>
                    <div className='flex items-center'><SiTailwindcss />Tailwind</div>
                    <div className='flex items-center'><FaBootstrap />Bootstrap</div>
                  </div>

                </div>
                <div className='py-4 flex  md:flex-row  gap-x-2   '>
                  <div className='flex'>
                    <div className='text-white/60 mb-2 md:mb-0 font-semibold'>Backend</div>
                    <div>-</div>
                  </div>
                  <div className=' flex flex-wrap md:flex-row  gap-x-3 items-center text-white '>
                    <div className='flex items-center'><FaNodeJs />NodeJs</div>
                    <div className='flex items-center'><SiExpress /> ExpressJs</div>
                    <div className='flex items-center'><SiMongodb />MongoDB</div>
                    <div className='flex items-center'><FaLaravel />Laravel </div>
                    <div className='flex items-center'><SiPostgresql />PostgreSQL</div>

                  </div>

                </div>
                <div className=' flex  md:flex-row  gap-x-2   '>
                  <div className='flex'>
                    <div className='text-white/60 font-semibold mb-2 md:mb-0'>UX/UI Design</div>
                    <div >-</div>
                  </div>
                  <div className=' flex flex-wrap md:flex-row  gap-x-3 items-center text-white '>
                    <div className='flex items-center'><SiFigma />Figma</div>
                    <div className='flex items-center'><SiAdobephotoshop /> AdobePhotoshop</div>
                    <div className='flex items-center'><SiMongodb />PhotoPea</div>
                  </div>

                </div>
              </div>
            )}
            {index === 1 && (
              <div className='items-center text-white/60'>
                <div className='flex font-light mb-2 gap-x-1'>
                  <div><span className='font-semibold'>Intern</span> - Full-stack Developer - Robotbulls, Paris, France</div>
                  <div>-</div>
                  <div>02/2024 - Present</div>
                </div>
                <div>
                  <div>
                    <span className='font-semibold'>Mentor</span> - University of Łódź - 2020 - 2023
                  </div>
                </div>
              </div>
            )}
            {index === 2 && (
              <div className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>Bachelor of Computer Science - University of Lodz, Lodz, Poland</div>
                <div className='hidden md:flex'>-</div>
                <div>2019 - 2024</div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
