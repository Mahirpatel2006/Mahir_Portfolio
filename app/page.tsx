'use client'

import React, { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar"
import ScrollingEffect from "@/components/ScrollingEffect"
import ButtonWithHoverEffect from "@/components/ButtonWithHoverEffect"
import FluidCursor from "@/components/FluidCursor"
import LoadingScreen from "@/components/LoadingScreen"

const Homepage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 7000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
      {/* Uncomment the Navbar */}
      <FluidCursor/>
      <Navbar/>
      
      {/* Add the GitHub button with hover effect */}
      <ButtonWithHoverEffect />
         
      {/* Add ScrollingEffect if needed */}
      <ScrollingEffect />
      
    </div>
  )}
  </>
)
}

export default Homepage;
