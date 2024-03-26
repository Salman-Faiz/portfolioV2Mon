/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';


// icons
import {
 FaHtml5,
 FaCss3,
 FaJs,
 FaReact,
 FaBootstrap,
 FaSass,
 FaNodeJs,
 FaNode,
 FaLaravel,
 FaFigma,
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
 SiPhotopea,
 SiExpress,
 SiFigma,
} from 'react-icons/si';

//  about data
// export const aboutData = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Frontend',
//         icons: [
//           <span key="a" className='text-sm flex justify-center items-center'><FaHtml5 />HTML5</span>,
//           <span key="a" className='text-sm flex justify-center items-center'><FaCss3 />CSS3</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <FaJs />JavaScript</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <SiTypescript />TypeScript</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <FaReact />ReactJs</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <SiNextdotjs />NextJs</span>,

//         ],
//       },
//       {
//         title: 'Backend',
//         icons: [
//           <span key="a" className='text-sm flex justify-center items-center'><FaNode />NodeJs</span>,
//           <span key="a" className='text-sm flex justify-center items-center'><FaNodeJs />ExpressJs</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <SiMongodb />MongoDB</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <FaLaravel />Laravel</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <SiPostgresql />PostgreSQL</span>,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [
//           <span key="a" className='text-sm flex justify-center items-center'> <FaFigma />Figma</span>,
//           <span key="a" className='text-sm flex justify-center items-center'> <SiAdobephotoshop />AdobePhotoshop</span>,
//         ],
//       },
//     ],
//   },

//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'Intern Full-stack Developer - Robotbulls, Geneva, Switzerland',
//         stage: '02/2024 - Present',
//       },
//       {
//         title: 'Mentor - University of Lodz',
//         stage: '2020 - 2023',
//       },

//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Bachelor of Computer Science - University of Lodz, Lodz, Poland',
//         stage: '2019 - 2024',
//       },
//     ],
//   },
// ];

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
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
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
   <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
    {/* text */}
    <div className='flex-1 flex flex-col justify-center'>
     <motion.h3
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='text-4xl'

     >
      Passionate <span className='text-accent'>Full-Stack Developer</span> Building Tomorrow's Web Solutions Today.
     </motion.h3>
     <motion.p
      variants={fadeIn('right', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='max-w-[500px] mx-auto xl:mx-0 xl:my-5 mb-6 xl:mb-12 px-2 xl:px-0'
     >
      2 years ago, I began freelancing as a developer. Since then, I've
      done remote work for many clients, counsulted for startups, and
      collaborated on digital products for business and consumer use.
     </motion.p>
     {/* <ParticlesContainer /> */}
     {/* counters */}
     <motion.div
      variants={fadeIn('right', 0.6)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
     >
      <div className='flex flex-1 xl:gap-x-6'>
       {/* experience */}
       <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
        <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
         <CountUp start={0} end={1} duration={5} /> +
        </div>
        <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
         Years of experience
        </div>
       </div>
       {/* clients */}
       <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
        <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
         <CountUp start={0} end={25} duration={17} /> +
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
     className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
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
     <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
      {index === 0 && (
       <div>

        <div className=' flex  md:flex-row  gap-x-2  text-white/60 '>
         <div className='flex'>
          <div className='font-light mb-2 md:mb-0'>Frontend</div>
          <div className='hidden md:flex'>-</div>
         </div>
         <div className=' flex flex-wrap md:flex-row  gap-x-2 items-center text-white/60 '>
          <div className='flex items-center'><FaHtml5 />HTML5</div>
          <div className='flex items-center'><FaCss3 /> CSS3</div>
          <div className='flex items-center'><SiJavascript />JavaScript</div>
          <div className='flex items-center'><SiTypescript /> TypeScript</div>
          <div className='flex items-center'><FaReact />ReactJs</div>
          <div className='flex items-center'><SiNextdotjs />NextJs</div>
          <div className='flex items-center'><SiFramer />Farmer</div>
          <div className='flex items-center'><FaSass />Sass</div>
          <div className='flex items-center'><SiTailwindcss />Tailwind</div>
          <div className='flex items-center'><FaBootstrap />Bootstrap</div>
         </div>

        </div>
        <div className='py-4 flex  md:flex-row  gap-x-2  text-white/60 '>
         <div className='flex'>
          <div className='font-light mb-2 md:mb-0'>Backend</div>
          <div className='hidden md:flex'>-</div>
         </div>
         <div className=' flex flex-wrap md:flex-row  gap-x-2 items-center text-white/60 '>
          <div className='flex items-center'><FaNodeJs />NodeJs</div>
          <div className='flex items-center'><SiExpress /> ExpressJs</div>
          <div className='flex items-center'><SiMongodb />MongoDB</div>
          <div className='flex items-center'><FaLaravel />Laravel </div>
          <div className='flex items-center'><SiPostgresql />PostgreSQL</div>

         </div>

        </div>
        <div className=' flex  md:flex-row  gap-x-2  text-white/60 '>
         <div className='flex'>
          <div className='font-light mb-2 md:mb-0'>UX/UI Design</div>
          <div className='hidden md:flex'>-</div>
         </div>
         <div className=' flex flex-wrap md:flex-row  gap-x-2 items-center text-white/60 '>
          <div className='flex items-center'><SiFigma />Figma</div>
          <div className='flex items-center'><SiAdobephotoshop /> AdobePhotoshop</div>
          <div className='flex items-center'><SiMongodb />PhotoPea</div>
         </div>

        </div>
       </div>
      )}
      {index === 1 && (
       <div className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
        <div className='font-light mb-2 md:mb-0'>Intern Full-stack Developer - Robotbulls, Geneva, Switzerland</div>
        <div className='hidden md:flex'>-</div>
        <div>02/2024 - Present</div>
        <div>Mentor - University of Lodz</div>
        <div>2020 - 2023</div>
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
