"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
import { InputWithButton } from "./InputWithButton/InputWithButton.story";

export function ColourfulTexts() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-black">
      <motion.img
        src="/Product.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_20%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        The Ultimate <ColourfulText text="Toolkit " /> <br /> for YouTubers
      </h1>
      <div className="absolute bottom-70 left-1/  ">
      < InputWithButton />
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-200 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
