"use client";
import getAllVideo from "@/lib/getAllVideo";
import VideoPlayer from "../componants/videoPlayer";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const videoData = [
    {
      url: "https://www.shutterstock.com/shutterstock/videos/1094015235/preview/stock-footage-abstract-intro-animation-count-and-go-text-cartoon-style-banner-on-alpha-channel.webm",
      title: "Elephants Dream",
    },
    {
      url: "https://media.istockphoto.com/id/1435103578/video/man-measuring-waist-with-a-tape-trying-to-look-thinner-weightloss-obsession.mp4?s=mp4-640x640-is&k=20&c=mvz3s1hUnNm8GsPwheFFtPWqjbllTFssW2eFblWx6f0=",
    },
    {
      url: "https://www.shutterstock.com/shutterstock/videos/1076410847/preview/stock-footage-simple-countdown-motion-graphics.webm",
      title: "BD Skilful",
    },
    {
      url: "https://www.shutterstock.com/shutterstock/videos/1099878783/preview/stock-footage-the-hand-of-a-young-man-on-a-green-background-a-man-s-hand-shows-interesting-finger-movements.webm",
      title: "Big Buck Bunny",
    },

    {
      url: "https://www.shutterstock.com/shutterstock/videos/1099813375/preview/stock-footage-the-number-zooms-in-and-out.webm",
      title: "For Bigger Blazes",
    },
    {
      url: "https://media.istockphoto.com/id/1291756717/video/a-young-woman-shows-joy-at-her-growth-by-holding-a-measuring-tape-next-to-her.mp4?s=mp4-640x640-is&k=20&c=Pi64zX4A9MsddJo749iBgJzLyVjNcaqLjEGF6J6DAnk=",
      title: "For Bigger Escape",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoContainerRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoContainerRef.current) {
      const videoContainer = videoContainerRef.current;
      const nextVideoIndex = (currentVideoIndex + 1) % videoData.length;
      setCurrentVideoIndex(nextVideoIndex);
      videoContainer.children[nextVideoIndex].scrollIntoView({
        behavior: "smooth",
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
