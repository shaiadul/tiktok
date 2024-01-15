"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";

const VideoPlayer = ({ video }) => {
  console.log("video link:", video);

  return (
    <section className="container flex justify-center mx-auto">
      <div id="id" className="border-b py-6">
        <div className="pl-3 w-full px-4">
          <div className="flex items-center justify-between pb-0.5">
            <Link href={`/profile/`}>
              <span className="font-bold hover:underline cursor-pointer">
                AWESOME REACT
              </span>
            </Link>
          </div>
          <p className="text-[14px] text-gray-500 pb-0.5">
            #fun #cool #SuperAwesome
          </p>

          <div className="mt-2.5 flex">
            <div className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
              <video
                id="video"
                loop
                controls
                autoPlay
                muted
                className="rounded-xl object-cover mx-auto h-full"
                src={video}
              />
              <img
                className="absolute right-2 bottom-8 w-8 rounded-full"
                src="https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg"
              />
            </div>

            {/* <PostMainLikes post={post} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
