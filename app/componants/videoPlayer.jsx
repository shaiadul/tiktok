"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ video, handleVideoEnded }) => {
 
  return (
    <section className="container flex justify-center mx-auto scroll_aria">
      <div id="id" className="py-6">
        <div className="pl-3 w-full px-4">
          <div className="flex items-center justify-between pb-0.5">
            <Link href={`/video`}>
              <span className="font-bold hover:underline cursor-pointer">
                {video.title}
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
                className="rounded-md object-cover mx-auto h-full"
                src={video.url}
                onEnded={handleVideoEnded}
              />
              {/* <img
                className="absolute right-2 bottom-9 w-6 rounded-full"
                src="https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
