"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "TubeBuddy - Grow your channel",
      button: "Explore",
      src: "https://uploads-ssl.webflow.com/641567d752044c0a219c1faa/64441c966a788fdd091acca7_image3.png",
    },
    {
      title: "Epidemic Sound - Music without copyright strikes",
      button: "Explore",
      src: "https://www.epidemicsound.com/blog/content/images/2022/08/fabian-image.001-1.jpeg",
    },
    {
      title: "Canva Pro - Make thumbnails fast",
      button: "Explore",
      src: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/07/screenshots-of-canva-showing-some-canva-pro-features.jpg",
    },
    {
      title: " Descript - Edit videos like text",
      button: "Explore",
      src: "https://assets-global.website-files.com/5d761d627a6dfa6a5b28ab12/611ae20e6437e9af44306b9c_Descript_Podcast_App_Features.png"
    }
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
