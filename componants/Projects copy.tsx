import React from 'react'
import { motion } from 'framer-motion'



type Props = {}

function Projects({}: Props) {
  const projects = 
 [ { id: 'keyboard',
   image: 'https://images.pexels.com/photos/2115984/pexels-photo-2115984.jpeg?auto=compress&cs=tinysrgb&w=600',
   p: 'asd'
 },
 { 
   id: 'headphones',
   image: 'https://images.pexels.com/photos/1543417/pexels-photo-1543417.jpeg?auto=compress&cs=tinysrgb&w=600',
   p: 'asdf'
 },
 { 
   id: 'mouse',
   image: 'https://images.pexels.com/photos/3737300/pexels-photo-3737300.jpeg?auto=compress&cs=tinysrgb&w=600',
   p: 'asd2'
 }
];

  

  return (
    <motion.div 
    initial={{
      opacity: 0
      }}
      whileInView={{
          opacity: 1
      }}
      transition={{
          duration: 1.5
      }}
    className='h-screen relative flex  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute  mb-20 top-[12px] uppercase tracking-[20px]
         text-gray-500 text-2xl xl:top-[80px] border rounded-full border-[rgb(29,161,242)]/40 pl-5  '>
            Projects
        </h3>

        <div className='relative w-full flex snap-x snap-mandatory z-20 xl:top-56 overflow-x-scroll overflow-y-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(29,161,242)]/80'>{projects.map((project, i ) => (

          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen xl:h-auto' key={project.id}>
             <motion.img 
             initial={{
              y:-300,
              opacity:0
             }}
             transition={{
              duration: 1.2
             }}
             whileInView={{
              opacity:1 , y:0
             }}
             viewport={{once:true}}
             src={project.image}alt=''/> 
           <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'> <span className='underline decoration-[rgb(29,161,242)]/50 '> Case study {i+1} of {projects.length} :</span> {project.id} </h4>
            <p className='text-lg text-center md:text-left'>{project.p}</p>

           </div>
          </div>

        ))}
          
        </div>

        <div className='w-full absolute top-[30%] bg-[rgb(29,161,242)]/10  left-0 h-[500px] -skew-y-12' />

        </motion.div> 
  )
}

export default Projects