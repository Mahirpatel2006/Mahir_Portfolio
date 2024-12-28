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
    // Check if the user has already visited the page
    const hasVisited = localStorage.getItem('hasVisited')

    if (hasVisited) {
      // If the user has visited before, skip the loading screen
      setIsLoading(false)
    } else {
      // If this is the user's first visit, show the loading screen
      const timer = setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem('hasVisited', 'true') // Mark as visited
      }, 7000) // Adjust the timeout as needed

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <FluidCursor />
          <Navbar />
          <ButtonWithHoverEffect />
          <ScrollingEffect />
        </div>
      )}
    </>
  )
}

export default Homepage
