import React from 'react'
import { Cursor , useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/20210722_183725.jpg'
import Link from 'next/link'


type Props = {}

function Hero({}: Props) {
    const [text , count] = useTypewriter({
        words :[
            'Hi , My Name is "Ahmed Tarek ElMashad"',
            'Guy-who-loves-{Codes,Chess}.tsx',
            '<ButLovesToPlayFootballMore />'
        ],
        loop : true,
        delaySpeed: 2000 ,
    }); 

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden top-24 '>
        <BackgroundCircles />

        <img className='relative rounded-full h-36 w-36 mx-auto text-center overflow-hidden  object-cover'
        
        src='https://pbs.twimg.com/profile_images/1475238711658954753/pEBtKRaL_400x400.jpg'
        alt='profile picture'
        />
        

         




    <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[6px]">
        frontend developer
        </h2>
        <h3 className="text-xs uppercase text-gray-500 pb-2 tracking-[2px]">
         also iam a civil Engineer   
         </h3>
        <h1 className='text-2xl lg:text-5xl sm:text-2xl font-semibold px-10'>
        <span className='mr-3 '> {text} </span>
        <Cursor cursorColor="rgb(29,161,242)" />
        </h1>
        <div className='lg:pt-5 pt-16'>
            <Link href='#about'
            >
            <button className='heroButton'>About</button>
            </Link>

            <Link href='#experience'>
            <button className='heroButton'>Experience</button>
            </Link>

            <Link href='#skills'>
            <button className='heroButton'>Skills</button>
            </Link>

            <Link href='#projects'>
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
    </div>
        
    </div>
  )
}

export default Hero 