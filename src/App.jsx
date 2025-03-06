import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import './App.css'

function App() {

  return (
    
     <div className='w-full h-full flex flex-col items-center relative overflow-x-hidden'>
    <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,140,0,0.3),rgba(0,0,0,1))]"></div>
   <Navbar></Navbar>
   <Hero/>
   <About/>
   <Skills/>
  <Experience/>
  <Projects/>
  <Footer/>
   </div>
  )
}

export default App
