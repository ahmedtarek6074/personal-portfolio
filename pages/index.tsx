import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../componants/Header'
import Hero from '../componants/Hero'
import About from '../componants/About'
import WorkExperience from '../componants/WorkExperience'
import Skills from '../componants/Skills'
import Projects from '../componants/Projects'
import ContactMe from '../componants/ContactMe'
import Link from 'next/link'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(29,161,242)]/80">
      <Head>
        <title> Ahmed's Portfolio </title>
      </Head>

      {/* header  */}
      <Header />
       
      

      {/* hero snap */}

      <section id='hero'  >
        <Hero />
      </section>

      {/* about  snap */}
      <section id='about' >
        <About />
      </section>

      {/* experience snap */}
      <section id='experience' className='pt-2 '> 
        <WorkExperience />
      </section>

       {/* skills */}
       <section id='skills' > 
        <Skills />
      </section>

       {/* projects */}
       <section id='projects' className='pt-2'>
         <Projects />
       </section>

       {/* contact me */}

       <section id='contact' className='pt-20'>
         <ContactMe />
       </section>

       
        <footer id='footer' className='sticky bottom-5 w-full p-5   '>
          <div className='flex items-center justify-end'>
          <Link href='#hero' >
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://img.icons8.com/color/96/null/circled-up-2--v1.png" alt=''/>
             </Link>
          </div>
        </footer>
       



       </div>
    
  )
}
