import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';
const Variants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  },
});
const Skills = () => {
  return (
    <div className='text-white border-b-1 pb-4 border-neutral-900 w-full'>
        <motion.h2  whileInView={{opacity:1,y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duration:2}} className='text-center text-4xl my-20' id='skills'>Skills <span className='text-orange-500'>&</span> Tools</motion.h2>
        <div className='flex w-full justify-center mb-4'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration:1.5}}
            
            className='flex w-full min-sm:w-[35vw] flex-wrap gap-6 justify-center'>
            <motion.div variants={Variants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <IoLogoJavascript  className='text-yellow-500 text-7xl p-3 '/>
            </motion.div> 
            <motion.div variants={Variants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <RiTailwindCssFill  className='text-cyan-500 text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <BiLogoMongodb  className='text-green-500 text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <SiExpress  className='text-white text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <FaNodeJs  className='text-green-500 text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <RiReactjsFill className='text-cyan-500 text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <FaAws  className='text-orange-500 text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <FaDocker  className='text-blue-500 text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(3.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <FaGithub className=' text-7xl p-3 '/>
            </motion.div>
            <motion.div variants={Variants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-amber-950'>
            <VscVscode  className=' text-7xl p-3  text-blue-500'/>
            </motion.div>
            
            </motion.div>
        </div>

    </div>

  )
}

export default Skills