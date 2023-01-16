import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function ExperienceCardCivil({}: Props) {
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
        src='https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/external-engineer-engineering-kiranshastry-lineal-color-kiranshastry.png' alt=''/>

        <div className='pl-5 md:px-10 overflow-y-scroll h-96 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(29,161,242)]/80'>
            <h4 className='text-4xl font-light'>
            Civil Engineer
            </h4>
            <p className='font-bold text-xl mt-1' >
            Technical office Engineer and Site Engineer 
            </p>
            <div className='flex px-2 my-2 flex-wrap '>
                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/autodesk-autocad.png' alt='autocad' />
                
                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/blender-3d.png' alt='Blender3D' />

<img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/microsoft-office-2019.png' alt='MicrosoftOffice' />
                
                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/microsoft-excel-2019.png' alt='Excel' />
                
                <img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/autodesk-revit.png' alt='Revit' />

<img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/autodesk-3ds-max.png' alt='3DMaxs' />

<img 
                className='h-10 w-10 '
                src='https://img.icons8.com/color/512/adobe-photoshop.png' alt='PS' />


            </div>
            <p className='uppercase py-5 text-gray-300'>
                Started work from ( 2018 – present )
            </p>
            <ul className='list-disc space-y-1 ml-5 text-lg xl:mb-10 h-96'>
                <li>Worked with civil engineers in the design and planning of airfields roads tunnels water and sewage systems tunnels and bridges. </li>
                <li>Conducted drafting and scale drawing for the build of projects </li>
                <li>Used various land development programs such as Auto CAD & Tekla & 3DMaxs & Revit and ArcGis. </li>

                <li>Created PDF files using color scanners and software such as Photoshop </li>

                <li>Developed Excel spreadsheets and shop drawing for linking to Auto CAD files</li>
                <li>Real Estate experience & modifications experience & Interior design & Awareness of (finishing works & finishing materials & choices)</li>
                <li>
                High level of knowledge of industry standard detailing practices & Proficiency in TEKLA Structures software.
                </li>
                
            </ul>

        </div>
        
    </article>
  )
}

export default ExperienceCardCivil