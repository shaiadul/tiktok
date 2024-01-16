"use client";
import getAllVideo from "@/lib/getAllVideo";
import VideoPlayer from "../componants/videoPlayer";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  
  const videoData = [
    
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "For Bigger Blazes",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "For Bigger Escape",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Big Buck Bunny",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "For Bigger Blazes",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "For Bigger Escape",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Elephants Dream",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Big Buck Bunny",
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Elephants Dream",
    },
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoContainerRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollBy({
        top: 100,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex + delta + videoData.length) % videoData.length
    );
  };

  console.log("this is current video index", videoData[currentVideoIndex].url);
  return (
    <section className="container mx-auto my-10 select-none">
      <div
        onWheel={handleScroll}
        ref={videoContainerRef}
        className="mx-auto max-w-[360px] max-h-[600px] overflow-x-hidden overflow-y-auto scrollbar-hide cursor-pointer video_container"
      >
        
        {videoData.map((video, index) => (
          <VideoPlayer
            key={index}
            url={videoData[currentVideoIndex].url}
            video={video}
            handleVideoEnded={handleVideoEnded}
          />
        ))}

      </div>
    </section>
  );
}
