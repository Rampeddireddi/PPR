import React from 'react'
import { motion } from 'framer-motion'
import { About_text } from '../Constants/Content'
const About = () => {
  return (
    <>
    <div className='border-b border-amber-950 mt-9 flex flex-col  text-white text-2xl min-sm:h-[90vh] gap-4 min-sm:w-[90vw]  items-center justify-center'>
        <motion.div whileInView={{opacity:1,y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duration:2}} className='text-4xl' id='about'>About <span className='text-amber-700'>Me</span></motion.div>
  <motion.div whileInView={{opacity:1,y:0}}
            initial={{y:100, opacity:0}}
            transition={{duration:1}} className='  w-[max(45vw,300px)]  text-xl p-3 rounded-md text-justify tracking-tight'>{About_text}</motion.div>
    </div>
    </>
  )
}

export default About