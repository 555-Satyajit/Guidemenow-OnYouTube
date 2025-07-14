"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: " Best Budget YouTube Setup Under $300",
    description: (
      <>
        <p>
 Want to look and sound professional without spending thousands? We’ve put together a complete beginner-friendly YouTube kit for under $300 — including a crisp webcam or entry-level camera, a USB microphone that beats built-in audio, and affordable lighting that transforms your shots. Perfect for vlogs, tutorials, or gaming streams. We even break down extras like tripods and backdrops that make a huge difference. Whether you’re starting your first channel or upgrading from your phone, see exactly what gear gives you the most bang for your buck.

        </p>
       
       
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1666890665956-ff34ea13c2cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "10 Editing Tricks to Keep Viewers Watching",
    description: (
      <>
        <p>
          Even great footage can flop without smart editing. These 10 simple but powerful editing techniques — from tight cuts and zooms to text overlays and jump cuts — will instantly level up your videos and keep people watching longer. Discover how pacing influences watch time, how to use sound effects to maintain energy, and what on-screen prompts boost engagement. Whether you’re editing in Premiere, Final Cut, or even free tools, these tips work across the board. Master them, and you’ll turn casual clicks into loyal fans.



        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1515846865653-cfda085cca48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How to Hit 1,000 Subscribers Fast",
    description: (
      <>
        <p>
          Your first 1,000 subscribers are the hardest — but the most crucial for building momentum and unlocking monetization. This guide lays out proven strategies that work today: how to craft irresistible thumbnails, write SEO-rich titles and descriptions, organize playlists that keep viewers binge-watching, and use posting consistency to feed the algorithm. We’ll also show you clever ways to cross-promote on social media and leverage analytics so every upload does better than the last. Ready to celebrate that 1K milestone sooner? Dive in.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1521302200778-33500795e128?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

   {
    title: "Royalty-Free Music: Where to Find It & How to Use It",
    description: (
      <>
        <p>
          Music sets the vibe for your entire channel — but picking the wrong track could mean demonetization or takedowns. This guide reveals the best free and affordable royalty-free music sites (like Epidemic Sound, Artlist, and hidden gems), how licensing works, and even tips for customizing tracks so they feel unique to your brand. Plus, learn smart audio mixing basics to keep your voice clear over background music. Stay safe from copyright strikes while making your videos sound top-notch.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1612499810017-b70bf0de17b9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
