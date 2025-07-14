'use client'
import React from 'react'
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { useRouter } from 'next/navigation';
const HERO = () => {
     const router = useRouter()
   
     const handleClick = () => {
      router.push('/tools');
  }
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Video Background */}
      
      <video 
        autoPlay
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2023/10/20/185787-876545918_large.mp4" type="video/mp4" />
        <source src="your-video-file.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Left aligned content */}
      <div className="relative z-10 flex items-center h-full px-8 lg:px-16">
        <div className="max-w-3xl animate-slidefade">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
           Best Tools for YouTubers & Content Creators (2025)
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-xl leading-relaxed">
            Discover the best gear, software, and guides to start or level up your YouTube channel — for every budget.

          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <InteractiveHoverButton onClick={handleClick}>Explore Gear</InteractiveHoverButton>
            <ShinyButton>Start a Channel</ShinyButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-200 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </div>
  )
}

export default HERO
