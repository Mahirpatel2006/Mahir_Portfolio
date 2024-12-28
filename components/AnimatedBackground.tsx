'use client'

import React from 'react'
import { motion } from 'framer-motion'
import  './AnimatedBackground.module.css'

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed-background">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {[...Array(100)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r="1"
            fill="#fff"
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default AnimatedBackground
