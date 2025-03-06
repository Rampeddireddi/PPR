import React from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.div whileInView={{opacity:1,y:0}}
    initial={{y:200, opacity:0}}
    transition={{duration:1}} id="footer" className='text-white border min-sm:rounded-t-full h-[20vh] w-full mt-12 border-white flex justify-center items-center'>
    <div className='flex min-sm:w-[70vw] w-full flex-col items-center justify-center gap-4'>
        <p>rampeddireddi1@gmail | 23a95a0508@aec.edu.in</p>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
        <div className='flex gap-2'> <a href="https://www.linkedin.com/in/rampeddireddi1" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
            LinkedIn
          </a>
          <a href="https://github.com/Rampeddireddi" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
            GitHub
          </a>
          <a href="mailto:rampeddireddi1@gmail.com" className="hover:text-red-400">
            Email
          </a></div>
    </div>
    </motion.div>
  )
}

export default Footer