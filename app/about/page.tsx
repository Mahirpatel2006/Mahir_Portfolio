'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaFootballBall, FaQuoteLeft } from 'react-icons/fa'
import AnimatedBackground from '@/components/AnimatedBackground'
import { div } from 'framer-motion/client'
import Navbar from '@/components/Navbar'
import FluidCursor from "@/components/FluidCursor"; 
export default function AboutMe() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (

<div>
    <Navbar/>
    <FluidCursor/>
    <div className="relative min-h-screen bg-black text-white p-8 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto">
        <HeroSection />
        <AcademicBackground />
        <SkillsExpertise />
        <PassionForInnovation />
        <BeyondTechnology />
        <InspirationalQuote />
       

  <div className="relative group m-11 left-3/4">
  <a href="/Projects">
    <button
      className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600 md:relative right-36"
    >
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>
      <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
        <div className="relative z-10 flex items-center space-x-3">
          <span
            className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
            >My Projects</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
          >
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            ></path>
          </svg>
        </div>
      </span>
    </button>
    </a>
  </div>
</div>

      </div>
    </div>
    
  )
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20"
    >
      <motion.h1 
        className="text-6xl font-bold mb-4 text-gradient"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Mahir Patel
      </motion.h1>
      <h2 className="text-2xl text-gray-400 mb-8">
        <Typewriter
          words={['Computer Engineering Student', 'Aspiring Developer', 'Tech Enthusiast']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
    </motion.section>
  )
}

function AcademicBackground() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-16"
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 flex items-center"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaGraduationCap className="mr-4 text-purple-500" />
        Academic and Professional Background
      </motion.h2>
      <p className="text-gray-300 leading-relaxed">
        Hailing from Visnagar, I completed my 12th grade with distinction (76%) from PM Shree Jawahar Navodaya Vidyalaya. Currently, I'm pursuing a B.Tech degree in Computer Engineering at Sankalchand Patel University. My journey in technology has equipped me with a strong foundation in programming and problem-solving, driving my passion for innovation and development. I'm actively seeking an internship opportunity to further enhance my skills and contribute meaningfully to impactful projects.
      </p>
    </motion.section>
  )
}

function SkillsExpertise() {
  const skills = ['JavaScript', 'Python', 'C', 'Java', 'HTML',"css", 'React', 'Next.js', 'Bootstrap', 'Node.js', 'MongoDB', 'Git']

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-16"
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 flex items-center"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaLaptopCode className="mr-4 text-blue-500" />
        Skills and Expertise
      </motion.h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-gray-800 px-4 py-2 rounded-full"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function PassionForInnovation() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-16"
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 flex items-center"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaLightbulb className="mr-4 text-yellow-500" />
        Passion for Innovation
      </motion.h2>
      <p className="text-gray-300 leading-relaxed">
        What excites me most is the endless potential of technology to transform lives. I thrive on learning new technologies and tackling challenging problems head-on, pushing boundaries to create solutions that matter.
      </p>
    </motion.section>
  )
}

function BeyondTechnology() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mb-16"
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 flex items-center"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaFootballBall className="mr-4 text-green-500" />
        Beyond Technology
      </motion.h2>
      <p className="text-gray-300 leading-relaxed">
        Outside the realm of programming, I am deeply passionate about sports. My involvement in sports mirrors my professional ethos: teamwork, strategy, and a relentless drive to improve.
      </p>
    </motion.section>
  )
}

function InspirationalQuote() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaQuoteLeft className="text-4xl text-gray-500 mb-4 mx-auto" />
        <blockquote className="text-2xl font-italic text-gray-300">
          "Why take the easy route when you can debug your way to glory? Challenges make the victory sweeter (and the coffee stronger)."
        </blockquote>
      </motion.div>
    </motion.section>
  )
}

