/* eslint-disable react/no-unescaped-entities */
// components
import Circles from '/components/Circles';
import toast, { Toaster } from 'react-hot-toast';
// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';
import React from 'react';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b3a1f97-1179-4778-9001-ea3e0c2b5422");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Message send to Muntasir')
      setResult('')
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <div className=' md:!h-full bg-primary/30  relative' >
      <ParticlesContainer />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full  max-w-[700px] relative'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12 mt-20 md:mt-20'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form onSubmit={onSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto '
          >

            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input name='name' type='text' placeholder='name' className='input' required />
              <input name='email' type='email' placeholder='email' className='input' required />
            </div>
            <input name='subject' type='text' placeholder='subject' className='input' required />
            <textarea name='message' placeholder='message' className='textarea text-base' required></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
            <Toaster></Toaster>
            <span className='text-red-600'>{result}</span>
          </motion.form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
