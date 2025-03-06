import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
const Hero = () => {
   
  return (
    <div className='min-sm:h-[90vh] min-sm:w-[90vw]  flex min-sm:justify-center min-sm:items-center 
    min-sm:flex-row  flex-col justify-center overflow-hidden '>
    
   <div className=' min-sm:w-[30vw] relative min-sm:h-full h-auto w-full flex justify-start items-start min-sm:pt-38 pt-24 '>
   <motion.img 
   whileHover={{ scale: 1.0 }}
   whileTap={{ scale: 1.0 }}
   drag="x"
   dragConstraints={{ left: -100, right: 100 }}
   src="/reactjs.png" className='absolute w-[20%] h-auto min-sm:bottom-[20%] bottom-[-40%] opacity-40 left-[70%] z-2' alt="" />
   
   <motion.div   
  whileInView={{opacity:1,x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration:1}}
  className='bg-white h-auto w-full flex flex-col justify-start items-center rounded-xl p-4 '>
   <div  className='flex gap-2 text-2xl text-orange-400'><MdWavingHand className='text-yellow-500'/>Hi, Reach out anytime</div>

    <div  className='flex'><IoIosMail className='relative top-1'/><a href="mailto:rampeddireddi1@gmail.com">mail: rampeddireddi1@gmail.com</a></div>
   </motion.div>
   </div>
    
   <div className='min-sm:w-[40vw] min-sm:h-full h-auto w-full relative' id="home">
    <motion.img initial={{y:20, opacity:0}} animate={{y:0, opacity:1}}  transition={{duration:1, delay:0.2}} src="/PPR-image-edit.png" alt="PPR image" className='z-5 min-sm:w-[100%]  min-sm:h-[600px] min-sm:absolute min-sm:bottom-[-3%]'/>
     <motion.img initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}}  transition={{duration:1, delay:0.1}} src='/Gradient_blob.png' className='hidden min-sm:block z-0 min-sm:w-[100%]  min-sm:h-[600px] min-sm:absolute min-sm:bottom-[-35%]'/>
   </div>
   
   <div className=' min-sm:w-[30vw] min-sm:h-full h-auto w-full flex  justify-end items-end pb-12 relative'>
   <motion.img  
   whileHover={{ scale: 1.0 }}
   whileTap={{ scale: 1.0 }}
   drag="x"
   dragConstraints={{ left: 0, right: -100 }}
   src="/aws.png" className='absolute w-[20%] h-auto min-sm:top-[50%] top-[-30%] opacity-80 right-[80%]' alt="" />
  


   <motion.div  
  whileInView={{opacity:1,x:0}}
            initial={{x:100, opacity:0}}
            transition={{duration:1.5}}
  className='bg-white h-auto w-full flex flex-col gap-2 justify-start items-center rounded-xl p-4 '>
    <div className='text-2xl text-orange-600'>I'm Peddireddi Panasaramanna</div>
    <div className='text-xl text-orange-400'>I craft with MERN, I scale with AWS</div>
    <div className='flex gap-3 text-xl'>
    <a href="https://www.linkedin.com/in/rampeddireddi1/"><FaLinkedin className="text-blue-600 cursor-pointer"/></a>
    <a href="https://github.com/Rampeddireddi"><FaGithub /> </a> 
    <a href="https://www.instagram.com/rampeddireddi1/"><FaSquareInstagram className='text-pink-600'/> </a>
    <a href="https://x.com/Rampeddireddi2"><FaSquareXTwitter /></a></div>
   </motion.div>
</div>
    </div>
  )
}

export default Hero