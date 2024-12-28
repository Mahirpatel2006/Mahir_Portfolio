"use client"; // Ensure the page is a client component

import Navbar from "@/components/Navbar";
import ScrollingEffect from "../components/ScrollingEffect"; // Default import
import ButtonWithHoverEffect from "@/components/ButtonWithHoverEffect";
import FluidCursor from "@/components/FluidCursor"; 
const Homepage = () => {
  return (
    <div>
      {/* Uncomment the Navbar */}
      <FluidCursor/>
      <Navbar/>
      
      {/* Add the GitHub button with hover effect */}
      <ButtonWithHoverEffect />
         
      {/* Add ScrollingEffect if needed */}
      <ScrollingEffect />
      
    </div>
  );
};

export default Homepage;
