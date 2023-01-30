import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{
      x:-200,
      opacity: 0.
    }}
   whileInView={{
    opacity: 1,
    x:0
   }}
   transition={{
    duration:1.2
   }}
    className='flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute  mb-20 top-[120px] uppercase tracking-[20px] text-gray-500 text-2xl border rounded-full border-[rgb(29,161,242)]/40 pl-5 '>
      About</h3>
      <motion.img  className='mt-20 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover md:rounded-lg md:w-[350px] md:h-[400px] xl:w-[450px] xl:h-[500px]'
      initial={{
        x:-200,
        opacity: 0.
      }}
     whileInView={{
      opacity: 1,
      x:0
     }}
     transition={{
      duration:1.2
     }}
     
      src='https://postimg.cc/dksvsw0z'
      alt='user photo'
      />
      <div className='space-y-10 px-0 md:px-10 items-center justify-center text-center'>
        <h4 className='text-4xl font-semibold'>
          Here is a little background
        </h4>

        <p className='text-base'>
        Hi 👋, I'm Ahmed Tarek ElMashad , A web developer from Egypt, I've been coding for over 2 years now. As a frontend developer , i've worked with startups and freelancers to help build & scale thier projects.  
        </p>
      </div>
    </motion.div>
  )
}

export default About
