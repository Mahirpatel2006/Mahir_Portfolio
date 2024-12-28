'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

const LoadingScreen: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth
      const height = containerRef.current.offsetHeight
     
      // Initialize nodes with random positions and velocities
      const initialNodes = Array.from({ length: 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      }))

      setNodes(initialNodes)

      // Animation loop for moving nodes
      const animate = () => {
        setNodes(prevNodes => 
          prevNodes.map(node => {
            let newX = node.x + node.vx
            let newY = node.y + node.vy

            // Bounce off edges
            if (newX < 0 || newX > width) node.vx *= -1
            if (newY < 0 || newY > height) node.vy *= -1

            return {
              ...node,
              x: newX < 0 ? 0 : newX > width ? width : newX,
              y: newY < 0 ? 0 : newY > height ? height : newY
            }
          })
        )
        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animationFrameRef.current = requestAnimationFrame(animate)

      // Progress counter
      const interval = setInterval(() => {
        setProgress(prev => prev >= 100 ? 100 : prev + 1)
      }, 100)

      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
        clearInterval(interval)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-gradient-to-r from-black via-slate-800 to-black"
      
    >
      <svg className="absolute inset-0 w-full h-full">
        {/* Draw connections between nodes */}
        {nodes.map((node, i) =>
          nodes.map((otherNode, j) => {
            if (i < j) {
              const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y)
              if (distance < 150) {
                const opacity = (1 - distance / 150) * 0.15
                return (
                  <motion.line
                    key={`line-${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={otherNode.x}
                    y2={otherNode.y}
                    stroke={`rgba(255, 255, 255, ${opacity})`}
                    strokeWidth="0.5"
                  />
                )
              }
            }
            return null
          })
        )}
        
        {/* Draw nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="#fff"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>

      {/* Center progress display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Add outer glow layers */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(255, 255, 255, 0.05)',
                '0 0 60px rgba(255, 255, 255, 0.15), 0 0 100px rgba(255, 255, 255, 0.1)',
                '0 0 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(255, 255, 255, 0.05)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div 
            className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)'
            }}
          >
            <motion.div
              className="text-3xl font-bold text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {progress}%
            </motion.div>
          </div>
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full border-t border-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen

