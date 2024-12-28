"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Rocket,School, Cpu, Zap,Binary,Recycle, Gamepad2, Atom, Plane, Github} from 'lucide-react';

import Navbar from '@/components/Navbar';
const ProjectShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [time, setTime] = useState(0);
  const containerRef = useRef(null);

  // Projects data remains the same as before...
  const projects = [
    {
      title: "QR-Based Menu",
      description: "A modern solution for restaurants to create and manage digital menus through QR codes.whch reduce expenses and improve customer experience.",
      technologies: ["Next.js", "Razorpay", "MongoDB", "QR API"],
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=2940",
      githubUrl: "https://github.com/Mahirpatel2006/QR-menu",
      liveUrl: "#",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      g: <Github className="w-6 h-6" />
    },
    {
      title: "Travelo",
      description: "A comprehensive travel booking platform, reviews, and personalized recommendations with AI-chatbot.",
      technologies: ["nodejs", "Express.js", "HTML", "CSS", "JavaScript","mongoDB"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2935",
      githubUrl: "https://github.com/Mahirpatel2006/Travelo",
      liveUrl: "#",
      icon: <Plane className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      g: <Github className="w-6 h-6" />
    },
    {
      title: "E-Wastemart",
      description: "a platform that connects buyers and sellers, simplifying the process of buying and selling e-waste.",
      technologies: ["Next.js", "React", "Razorpay",],
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=2874",
      githubUrl: "https://github.com/Mahirpatel2006/E-Wastemart2",
      liveUrl: "#",
      icon: <Recycle className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      g: <Github className="w-6 h-6" />
    },
    {
      title: "UNIVERA",
      description: "Comprehensive university management system handling everything from admissions to alumni relations.",
      technologies: ["Next.js", "prisma", "versel", "Redis"],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2940",
      githubUrl: "https://github.com/Mahirpatel2006/univera",
      liveUrl: "#",
      icon: <School className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      g: <Github className="w-6 h-6" />
    },
    {
      title: "Flappy Bird",
      description: "A modern recreation of the classic game with.",
      technologies: ["Python", "Pygame", "Tkinter"],
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=2874",
      githubUrl: "https://github.com/Mahirpatel2006/flappy-bird",
      liveUrl: "#",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      g: <Github className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e:any) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    const animationFrame = () => {
      setTime(prev => prev + 0.01);
    };

    const animationId = setInterval(animationFrame, 16);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate background objects
  const generateBackgroundObjects = () => {
    const objects = [];
    const scalingFactor = 0.05;
    // Tech Icons (SVG paths as floating elements)
    const techIcons = [
      { path: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25", color: "purple" }, // Database
      { path: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M14 4l-2 1M14 4v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 7l2-1m-2 1l2 1m-2-1v2.5", color: "cyan" }, // Code structure
      { path: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", color: "yellow" }, // Lightning bolt
      { path: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z", color: "green" }, // Key/Security
      { path: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25", color: "pink" }, // Monitor
      { path: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", color: "blue" }, // Globe
      { path: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59", color: "orange" }, // Compass
      { path: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75", color: "red" }, // Sliders
      { path: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m18 0l-2.25 1.313m2.25-1.313l-2.25-1.313M3 9.75l2.25-1.313m-2.25 1.313l2.25 1.313m0 0l-2.25 1.313M3 14.25v-2.25m0 2.25l2.25-1.313M3 14.25l2.25 1.313M3 16.5v-2.25m18 0l-2.25 1.313m2.25-1.313l-2.25-1.313m0 0l2.25-1.313M21 14.25v-2.25m0 2.25l-2.25-1.313m2.25 1.313l-2.25 1.313m0 0l2.25 1.313M21 16.5v-2.25m-10.5-6l2.25-1.313m-2.25 1.313l-2.25-1.313m2.25 1.313l2.25 1.313m-2.25-1.313l-2.25 1.313M12 21.75l-2.25-1.313m2.25 1.313l2.25-1.313m-2.25 1.313V19.5m0 2.25V19.5m0 0l-2.25 1.313M12 19.5l2.25 1.313m-2.25 0V16.5m0 0l-2.25 1.313m2.25-1.313l2.25 1.313m0 0l2.25-1.313M12 16.5v-2.25m0 2.25l2.25-1.313m-2.25 1.313l-2.25-1.313", color: "teal" }, // CPU chip
      { path: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z", color: "indigo" }, // Wifi/Signal
      { path: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z", color: "emerald" }, // Document
      { path: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z", color: "amber" }, // Search/Magnifier
    ];

    // Render tech SVG icons
    for (let i = 0; i < techIcons.length; i++) {
      const icon = techIcons[i];
      objects.push(
        <div
          key={`tech-${i}`}
          className="absolute"
          style={{
            transform: `
              translate3d(
                ${Math.sin((time + i) * 0.15) *10}px, // Reduced frequency from 0.3 to 0.15
                ${Math.cos((time + i) * 0.2) * 10}px, // Reduced frequency from 0.4 to 0.2
                ${Math.sin((time + i) * 0.1) * 10}px  // Reduced frequency from 0.2 to 0.1
              )
              rotate(${time * 10 + i * 15}deg) // Reduced rotation speed
              scale(${0.8 + Math.sin(time + i) * 0.2})
            `,
            left: `${(i / techIcons.length) * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.15 + Math.sin(time + i) * 0.1,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8"
            stroke={`rgb(${Math.sin(time + i) * 50 + 200}, ${Math.cos(time + i) * 50 + 150}, 255)`}
            strokeWidth="1.5"
          >
            <path d={icon.path} />
          </svg>
        </div>
      );
    }

   // Matrix-like falling characters
for (let i = 0; i < 12; i++) {
  objects.push(
    <div
      key={`matrix-${i}`}
      className="absolute font-mono text-xs tracking-wider"
      style={{
        left: `${(i / 12) * 100}%`,
        top: `${(time * (25 + i * 10)) % 100}%`, // Reduced speed here
        transform: `translateZ(${Math.sin(time + i) * 50}px)`,
        opacity: 0.3,
        color: `rgb(0, ${150 + Math.sin(time + i) * 50}, 0)`,
      }}
    >
      {[0, 1][Math.floor((time + i) * 5) % 2]}
    </div>
  );
}

    // Geometric shapes (original hexagons)
    for (let i = 0; i < 15; i++) {
      objects.push(
        <div
          key={`hex-${i}`}
          className="absolute border-2 border-purple-500/20"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `
              translateZ(${Math.sin((time + i) * 0.5) * 50}px)
              rotate(${time * 20 + i * 30}deg)
            `,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            opacity: Math.sin((time + i) * 0.5) * 0.3 + 0.3,
            transition: 'all 0.4s ease-out'
          }}
        />
      );
    }
    
    // Floating circuits
    for (let i = 0; i < 10; i++) {
      objects.push(
        <div
          key={`circuit-${i}`}
          className="absolute"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: '2px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(90deg, 
              transparent 10%, 
              rgba(147, 51, 234, ${Math.random() * 0.3}) 10%, 
              transparent 10%
            )`,
            transform: `
              rotate(${Math.random() * 360}deg)
              translateZ(${Math.sin((time + i) * 0.3) * 30}px)
            `,
            opacity: Math.sin((time + i) * 0.3) * 0.5 + 0.5
          }}
        />
      );
    }

    // Glowing orbs
    for (let i = 0; i < 8; i++) {
      objects.push(
        <div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle at center, 
              rgba(${Math.random() * 100 + 155}, ${Math.random() * 100}, 255, 0.5) 0%, // Increased alpha for clarity
              transparent 70%
            )`,
            transform: `
              translateX(${Math.sin((time + i) * 0.25) * 50}px) // Reduced frequency for slower movement
              translateY(${Math.cos((time + i) * 0.25) * 50}px) // Reduced frequency for slower movement
              translateZ(${Math.sin((time + i) * 0.15) * 100}px) // Reduced frequency for slower movement
              scale(${1 + Math.sin(time + i) * 0.2})
            `,
            filter: 'blur(4px)', // Reduced blur for clearer images
            opacity: Math.sin((time + i) * 0.25) * 0.7 + 0.3 // Increased minimum opacity for clarity
          }}
        />
      );
    }
    return objects;
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black text-white relative overflow-hidden"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
     
      <Navbar/>
      {/* Dynamic background */}
      <div className="absolute inset-0 overflow-hidden">
        {generateBackgroundObjects()}
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                 linear-gradient(0deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               transform: `rotateX(60deg) translateZ(-100px) translateY(${time * 50}px)`
             }} />
      </div>
    
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Enhanced heading */}
        <div className="relative mb-16">
          <h1 
            className="text-7xl md:text-9xl font-bold text-center relative z-10"
            style={{
              transform: `
                translateZ(${50 + Math.sin(time) * 3}px)
                rotateX(${mousePosition.y * 1}deg)
                rotateY(${mousePosition.x * 1}deg)
              `,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 blur-3xl opacity-30"
                    style={{
                      transform: `translateZ(-50px) scale(1.5)`,
                      animation: 'pulse 4s infinite'
                    }} />
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Selected Projects
              </span>
            </span>
          </h1>
          
          {/* Decorative elements around heading */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <Atom 
              className="absolute left-1/4 top-0 text-purple-500/30"
              size={60}
              style={{
                transform: `
                  rotate(${time * 30}deg)
                  translateY(${Math.sin(time) * 20}px)
                `
              }}
            />
            <Binary 
              className="absolute right-1/4 bottom-0 text-cyan-500/30"
              size={60}
              style={{
                transform: `
                  rotate(${-time * 30}deg)
                  translateY(${Math.cos(time) * 20}px)
                `
              }}
            />
          </div>
        </div>

        {/* Projects grid (remains the same as before) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
          {/* Project cards code remains the same */}
          {projects.map((project, index:any) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              // on click user is move on github link which i have provided in githubUrl
              onClick={() => window.open(project.githubUrl, '_blank')}
              style={{
                transform: `
                  translateZ(${activeProject === index ? 100 : 0}px)
                  rotateY(${activeProject === index ? mousePosition.x * 20 : 0}deg)
                  rotateX(${activeProject === index ? -mousePosition.y * 20 : 0}deg)
                `,
                transition: 'all 0.3s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r w-full h-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                   style={{
                     backgroundImage: `linear-gradient(45deg, ${project.color})`
                   }} />
              
              <div className="relative bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       backgroundImage: `linear-gradient(45deg, ${project.color})`
                     }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                         style={{
                           backgroundImage: `linear-gradient(45deg, ${project.color})`
                         }}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    {/* <div >
                    <div >{project.g}</div>
                    </div> */}
                  </div>
                  
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full text-white/75 group-hover:text-white border border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    
                  </div>
                </div>

                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
<br />

      <div className='relative  flex flex-col items-end px-20 bottom-20'>
<button 
  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
>
  <div
    className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:scale-110 animate-gradient"
  ></div>

  <div
    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-white blur-xl"
  ></div>

  <div className="absolute inset-0 overflow-hidden rounded-full">
    <div className="glitter-container">
      <div className="glitter"></div>
      <div className="glitter"></div>
      <div className="glitter"></div>
    </div>
  </div>

  <div
    className="absolute inset-0 rounded-full border-2 border-white opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-300"
  ></div>

  <div className="absolute inset-0 rounded-full overflow-hidden">
    <div className="wave"></div>
  </div>

  <span className="relative z-10 flex items-center gap-2">
  <a href="/contact">
    <span className="tracking-wider" >Contact Me</span>
      </a>
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M13 7l5 5m0 0l-5 5m5-5H6"
        strokeWidth="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    ></span>
  </span>
</button>

            
      {/* Scroll progress indicator */}
      <div 
        className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
        style={{ width: `${scrollProgress}%` }}
      />
</div>
      
    </div>
  );
};

export default ProjectShowcase;