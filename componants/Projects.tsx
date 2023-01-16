import React from 'react'
import { motion } from 'framer-motion'



type Props = {}

function Projects({}: Props) {
  const projects = 
 [ { id: 'Amazone-clone',
   image: 'https://user-images.githubusercontent.com/83834084/138574010-81407185-3be0-41c1-9d0a-8933b09a32d8.jpg',
   p: 'Tech I Used :ReactJs, Firebase Hosting, Firebase Auth, Firebase Storag, React-Dom, ReactRedux, ReactRouter, deployment with Vercel & Features :Login and Logout, Add to cart , Remove from cart, Neat and clean UI',
   live:'https://amazone-clone-atm.vercel.app/'
 },
 { 
   id: 'kasper-project',
   image: 'https://i.postimg.cc/x8vnmft7/Untitled-1.png',
   p: 'We Are Kasper We Make Art. simple landing page for kasper agency by HTML And CSS3 with a responsive web for all devices',
   live : 'https://ahmedtarek6074.github.io/second-project/'
 },
 { 
   id: 'Personal Portfolio',
   image: 'https://i.postimg.cc/wv7bngPr/Untitled-a2.png',
   p: 'A RESPONSIVE Modern Portfolio with NEXT.JS (Framer Motion, Tailwind CSS, Sanity.io, React) &   Just Deployed this masterpiece to Vercel so you can enjoy it',
   live: ''
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
            <h3 className='text-4xl font-semibold text-center'><a className='text-3xl text-center text-[rgb(29,161,242)] hover:text-[rgb(29,161,242)]/40 focus:text-[rgb(29,161,242)]/20 ' href={project.live}> Try Live Demo </a></h3>
            
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