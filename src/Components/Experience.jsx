import React from 'react'
import { Internships } from '../Constants/Content'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <div className='w-full text-white border-b border-amber-950'>
        <motion.h2 whileInView={{opacity:1,y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duration:2}} className='text-4xl my-20 text-center' id='experience'>Experience</motion.h2>
        <div className='w-full flex justify-center'>
        <div className='min-sm:w-[60vw] w-full flex flex-col items-center'>
           {Internships.map((Internship,index)=>(
            <div key={index} className='mb-8 flex flex-wrap min-sm:flex-nowrap w-[90%] min-sm:justify-center'>
                <motion.div whileInView={{opacity:1,x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration:1}} className='w-full min-sm:w-[30%] min-sm:pr-12 min-sm:text-right text-amber-600 '>
                <p>{Internship.year}</p>
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}}
            initial={{x:100, opacity:0}}
            transition={{duration:1}} className='w-full min-sm:w-[70%] flex flex-col gap-3 '>
                <p>{Internship.role}, {Internship.company}</p>
                <p className='text-justify tracking-tight text-neutral-400'>{Internship.description}</p>
                <div className='flex gap-2 text-sm'>{Internship.technologies.map((tech,index)=>(
                  <div key={index} className='text-amber-900'>{tech}</div>
                ))}</div>
                </motion.div>
                
            </div>
           ))}

        </div>
        </div>
    </div>
  )
}

export default Experience