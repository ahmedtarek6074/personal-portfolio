import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }} 
    animate={{
      scale:[1,2,2,3,1],
      opacity: [0.1,0.2,0.4,0.8,0.1,1],
      borderRadius : ["20%","20%","50%","80%","20%"],
    }}
    transition={{
      duration: 2.5, 
    }}
    
    className='relative flex justify-center items-center '>
      <div className='absolute border  border-[#333333] rounded-full h-[200px] w-[200px] mt-60 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-60 animate-ping'/>
      <div className='absolute border border-[rgb(29,161,242)] opacity-20 rounded-full lg:h-[650px] lg:w-[650px] h-[350px] w-[350px] mt-[300px]  animate-pulse'/>
      
    </motion.div>
  )
}

export default BackgroundCircles