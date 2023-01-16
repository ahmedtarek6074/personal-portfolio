import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
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
    
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center my-auto'>
        <h3 className='absolute  mb-20 top-[120px] uppercase tracking-[20px]
         text-gray-500 text-2xl border rounded-full border-[rgb(29,161,242)]/40 pl-5 '>
             Skills 
        </h3>
        <h3 className='absolute top-40 text-sm uppercase text-gray-500 pt-4 tracking-[3px]'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 lg:gap-5 xl:gap-5 md:gap-3 sm:gap-0 md:pt-[50px] xl:pt-[230px] lg:pt-[250px]  m-2 '>
            
            <Skill imgUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' rating='80%'/>

            <Skill imgUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' rating='85%'/>

            <Skill imgUrl='https://img.icons8.com/color/512/adobe-photoshop.png' rating='85%'/>
            <Skill imgUrl='https://camo.githubusercontent.com/9e245893108b5ca27e7ac3d4a802d513f657b32aa7b5765bd92df7fb55d0ed54/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f61646f62655f696c6c7573747261746f722f61646f62655f696c6c7573747261746f722d69636f6e2e737667' rating='90%'/>

            <Skill imgUrl='https://img.icons8.com/fluency/512/unity.png' rating='75%'/>

            <Skill imgUrl='https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667' rating='90%'/>

            <Skill imgUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' rating='80%'/>


            <Skill imgUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' rating='70%'/>

            <Skill imgUrl='https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667' rating='90%'/>

            <Skill imgUrl='https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667' rating='95%'/>

            <Skill imgUrl='https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667' rating='80%'/>
            

            <Skill imgUrl='https://img.icons8.com/color/512/autodesk-autocad.png' rating='95%' />


            <Skill imgUrl='https://img.icons8.com/color/512/blender-3d.png' rating='85%' />



            <Skill imgUrl='https://img.icons8.com/color/512/microsoft-office-2019.png' rating='90%' />



            



            <Skill imgUrl='https://img.icons8.com/color/512/autodesk-revit.png' rating='80%' />

            <Skill imgUrl='https://img.icons8.com/color/512/autodesk-3ds-max.png' rating='90%' />



            <Skill imgUrl='https://img.icons8.com/color/512/html-5--v1.png' rating='95%' />


            <Skill imgUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' rating='85%' />


            <Skill imgUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' rating='90%' />

            

            <Skill imgUrl='https://img.icons8.com/fluency-systems-regular/512/nextjs.png' rating='80%' />



            


        </div>
    </motion.div>
  )
}

export default Skills