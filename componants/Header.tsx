import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion';
import Link from 'next/link';

type Props = {}

function Header({}: Props) {


  

  
  return ( <>
    <header className='sticky top-0 p-5 bg-[rgba(255,255,255,0.2)] hover:opacity-80 opacity-20 transition-opacity duration-200 overflow-hidden flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center flex-wrap	space-y-1'>
        <motion.div
        initial={{
          x:-500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{ 
          duration:1.25,
        }}

         className='flex flex-row items-center space-x-2' >
          
            {/* Social Icons */}
            <SocialIcon url="https://twitter.com/ahmedLmashad" 
             />
            <SocialIcon url="https://www.instagram.com/ahmedelmashad_/"  />

            <SocialIcon url="https://www.linkedin.com/in/ahmedtarek6074/" />

            <SocialIcon url="https://github.com/ahmedtarek6074"  />

            <SocialIcon url="https://www.facebook.com/ahmed.t.elmashad" />

        </motion.div>

        
       
        <motion.div 
        
        initial={{
          x:500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{ 
          duration:1.25,
        }}

        className='flex flex-row items-center text-grey-300 space-x-1 '>
            {/* avatar */}
        
        <SocialIcon 
        className=" hover:bg-[rgb(29,161,242)]/40 rounded-full border border-[rgb(29,161,242)]/50 "
        url='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ahmed.elmashad1811@gmail.com'
        network='email'
        fgColor='grey '
        bgColor='transparent'
        />
        <Link href='#contact'>
        <p className='uppercase md:inline-flex text:sm sm:text-xs text-grey-400  hover:text-[rgb(29,161,242)]/40 '>
            Get In Touch
        </p>
        </Link>
          
        </motion.div>
        
        
    </header>
    </>

  )
}

export default Header