import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full text-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,140,0,0.3),rgba(0,0,0,1))] backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
        <div className='text-2xl font-bold'>PPR</div>
        
        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={toggleMenu} aria-label='Toggle menu'>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-lg'>
          <li className='hover:text-amber-500'><a href="#home">Home</a></li>
          <li className='hover:text-amber-500'><a href="#about">About</a></li>
          <li className='hover:text-amber-500'><a href="#skills">Skills</a></li>
          <li className='hover:text-amber-500'><a href="#experience">Experience</a></li>
          <li className='hover:text-amber-500'><a href="#projects">Projects</a></li>
          <li className='hover:text-amber-500'><a href="/PPR_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>
      
      {/* Mobile Menu with Transition */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className='md:hidden flex flex-col items-center gap-6 py-4 bg-black text-lg absolute top-16 left-0 w-full'
        >
          <ul>
            <li className='hover:text-amber-500'><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li className='hover:text-amber-500'><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className='hover:text-amber-500'><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li className='hover:text-amber-500'><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li className='hover:text-amber-500'><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li className='hover:text-amber-500'><a href="/PPR_resume.pdf" target="_blank" onClick={toggleMenu}>Resume</a></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
