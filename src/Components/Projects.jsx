import React from 'react'
import { projects } from '../Constants/Content'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <>
    <div className=' border-y-amber-950 text-white'>
    <motion.div whileInView={{opacity:1,y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duration:2}} className='text-white text-4xl text-center my-20' id='projects'>Projects</motion.div>
    <div className='w-full flex justify-center'>
           <div className='min-sm:w-[60vw] w-full flex flex-col items-center gap-2'>
              {projects.map((project,index)=>(
               <div key={index} className='mb-8 flex flex-wrap min-sm:flex-nowrap w-[90%] min-sm:justify-center'>
                   <div className='w-full min-sm:w-[30%] min-sm:pr-12 min-sm:text-right text-amber-600 '>
                   <motion.div whileInView={{opacity:1,x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration:0.5}} className='rounded-3xl overflow-hidden'><img src={project.image}></img></motion.div>
                   </div>
                   <motion.div whileInView={{opacity:1,x:0}}
            initial={{x:100, opacity:0}}
            transition={{duration:0.5}} className='w-full min-sm:w-[70%] flex flex-col gap-3  '>
                   <div className='flex justify-between flex-wrap'> <p>{project.name}, {project.year}</p> 
                   <p> {project.live ? 
                   (<a href={project.live} target="_blank" rel="noopener noreferrer" className='pr-2'>Preview</a>) : null}  
                   <a href={project.git} target="_blank" rel="noopener noreferrer">Github</a>
                   </p> </div>
                   <p className='text-justify tracking-tight text-neutral-400'>{project.description}</p>
                   <div className='flex gap-2 text-sm'>{project.techStack.map((tech,index)=>(
                     <div key={index} className='text-amber-800'>{tech}</div>
                   ))}</div>
                   </motion.div>
                   
               </div>
              ))}
   
           </div>
           </div>
           </div>
    </>
  )
}

export default Projects