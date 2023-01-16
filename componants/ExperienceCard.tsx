import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[350px] md:w-[700px] xl:w-[600px] xl:h-[775px] lg:h-[775px] lg:w-[350]  snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden p-2  '>
        <motion.img 
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity: 1,
            y:0,
        }}

        
        className='w-32 h-44 rounded-full xl:w-[280px] xl:h-[200px] object-contain object-center p-1'
        src='https://cdn-icons-png.flaticon.com/512/5044/5044785.png' alt=''/>

        <div className='pl-5 md:px-10 overflow-y-scroll h-96 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(29,161,242)]/80'>
            <h4 className='text-4xl font-light'>
            Web Developer
            </h4>
            <p className='font-bold text-xl mt-1' >
            Front-End Developer & UI/UX Designer
            </p>
            <div className='flex px-1 space-x-2 space-y-1 my-2 flex-wrap'>


                <img 
                className='h-10 w-10 '
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' alt='C#' />

                
                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/html-5--v1.png' alt='HTML' />

                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/css3.png' alt='Css' />

                
                <img 
                className='h-10 w-10 '
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' alt='JavaScript' />
                
                <img 
                className='h-10 w-10 '
                src='https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667' alt='Figma' />


                <img 
                className='h-10 w-10 '
                src='https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667' alt='git' />

<img 
                className='h-10 w-10 '
                src='https://camo.githubusercontent.com/9e245893108b5ca27e7ac3d4a802d513f657b32aa7b5765bd92df7fb55d0ed54/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f61646f62655f696c6c7573747261746f722f61646f62655f696c6c7573747261746f722d69636f6e2e737667' alt='AI' /> 

                
<img 
                className='h-10 w-10 '
                src='https://img.icons8.com/fluency/512/unity.png' alt='Unity3D' />


<img 
                className='h-10 w-10 '
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' alt='React' />





                <img 
                className='h-10 w-10 '
                src='https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667' alt='Tailwind' />


<img 
                className='h-10 w-10 '
                src='https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667' alt='XD' />

                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/fluency-systems-regular/512/nextjs.png' alt='NextJs' />



                
                

            </div>
            <p className='uppercase py-5 text-gray-300'>
                Started work from ( 2020 – present )
            </p>
            <ul className='list-disc space-y-1 ml-5 text-lg xl:mb-10 h-96'>
                <li>2 years of experience in front-end development.</li>
                <li>Strong Experience with HTML5, CSS3, Java Script and Type Script and ECMAscript. </li>
                <li>Web experience with developing responsive web designs and Ul/UX interfaces </li>
                <li>Strong Experience with react.js, redux, redux-toolkit , Framer motion , Next js and Sanity io </li>
                <li> Experience with web services API integration (REST, JSON).</li>
                <li>Good understanding of asynchronous requests and promises and Knowledge of modern authorization mechanisms, such as JSON Web Token. </li>
                <li>Knowledge of SEO principles.</li>
                
            </ul>

        </div>
        
    </article>
  )
}

export default ExperienceCard