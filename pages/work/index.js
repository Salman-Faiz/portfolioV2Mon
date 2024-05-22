// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-24 lg:py-0 flex items-center relative overflow-y-scroll'>
      {/* <ParticlesContainer /> */}
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 pt-80 md:pt-40 lg:pt-0 xl:mt-12'
            >
              My work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 lg:mt-0 max-w-[400px] mx-auto lg:mx-0'
            >
              Specializing in full-stack web development, I utilize ReactJS, NodeJS, NextJS, Tailwind CSS, Bootstrap, MongoDB, and PostgreSQL. Projects feature dynamic React-based front ends, efficient NodeJS back ends, and responsive designs with Tailwind CSS and Bootstrap. Data management is flexible, utilizing MongoDB for scalability and PostgreSQL for relational needs.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
