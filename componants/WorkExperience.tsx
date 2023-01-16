import React from 'react'
import{motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ExperienceCardCivil from './ExperienceCardCivil';

type Props = {}

function WorkExperience({}: Props) {
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
    
    
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center  '>

        <h3 className='absolute top-[20px] uppercase tracking-[20px] text-gray-500 text-2xl lg:top-[0px] border rounded-full border-[rgb(29,161,242)]/40 pl-5 '>
         Experience
        </h3>

        <div className='w-full xl:h-5/6 flex space-x-5 overflow-x-scroll  p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(29,161,242)]/80 overflow-y-hidden'>

            <ExperienceCardCivil />
            <ExperienceCard />
            

            

        </div>
        </motion.div>
  )
}

export default WorkExperience
