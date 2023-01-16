import React from 'react'
import{motion}  from 'framer-motion'

type Props = { 
    directionLeft?:boolean; 
     imgUrl:string; 
     rating:string; 
}

function Skill({directionLeft,imgUrl,rating}: Props) {
  return (

    
        <div className='group relative flex cursor-pointer'>
            <motion.img className=' bg-transparent object-cover 
            sm:w-14 sm:h-14 w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out p-1'

                initial={{
                    x:directionLeft? -200:200,
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1 , x:0
                }}

                src={imgUrl}
                alt='name'
            
            />

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[rgb(29,161,242)]/20  group-focus:bg-[rgb(29,161,242)]/20 sm:w-14 sm:h-14 w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20  z-0 '>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100 '>{rating}</p>
                </div>
            </div>


        </div>
        
         

         


        




 
    
    

    

    
       
        
    
  )
}

export default Skill