"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";

const VideoPlayer = ({ url, handleVideoEnded, title }) => {
  // const videoRef = useRef(null);

  // const handleVideoEnded = () => {
  //   // Scroll to the next video when the current one ends
  //   const nextVideo = videoRef.current.parentNode.nextSibling;

  //   if (nextVideo) {
  //     nextVideo.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="container flex justify-center mx-auto">
      <div id="id" className="py-6">
        <div className="pl-3 w-full px-4">
          <div className="flex items-center justify-between pb-0.5">
            <Link href={`/video`}>
              <span className="font-bold hover:underline cursor-pointer">
                {title}
              </span>
            </Link>
          </div>
          <p className="text-[14px] text-gray-500 pb-0.5">
            #fun #cool #SuperAwesome
          </p>

          <div className="mt-2.5 flex">
            <div className="relative min-h-[480px] max-h-[580px] max-w-[350px] flex items-center bg-black rounded-xl cursor-pointer">
              <video
                id="video"
                // loop
                controls
                autoPlay
                muted
                className="rounded-xl object-cover mx-auto h-full"
                src={url}
                onEnded={handleVideoEnded}
              />
              {/* <img
                className="absolute right-2 bottom-8 w-8 rounded-full"
                src="https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg"
              /> */}
            </div>

            {/* <PostMainLikes post={post} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
