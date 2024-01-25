"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ video, handleVideoEnded }) => {
  return (
    <section className="container flex justify-center mx-auto scroll_aria">
      <div id="id" className="">
        {/* <div className="pl-3 w-full px-4"> */}
          {/* <div className="flex items-center justify-between pb-0.5">
            <Link href={`/video`}>
              <span className="font-bold hover:underline cursor-pointer">
                {video.title}
              </span>
            </Link>
          </div>
          <p className="text-[14px] text-gray-500 pb-0.5">
            #fun #cool #SuperAwesome
          </p> */}

          <div className="my-5 flex">
            <div className="relative min-h-[580px] max-h-[940px] w-full flex items-center rounded-xl cursor-pointer">
              <video
                id="video"
                // loop
                // controls
                autoPlay
                muted
                className="rounded-md object-cover mx-auto h-full"
                src={video.url}
                onEnded={handleVideoEnded}
              />
              <div className="grid grid-cols-6 justify-between items-end absolute right-6 left-6 bottom-0 mx-auto mb-3">
                <div className=" w-full col-span-5">
                  <p className="text-[14px] text-white">Hitachi Refrigerator R-V490P8PB (BBK)</p>
                  <div className="text-white flex justify-start items-center"><h4 className="font-semibold text-[18px]">৳105000</h4> <delete className="line-through text-[14px] ml-2">৳108000</delete></div>
                  <div className="text-white flex justify-start items-center my-2">
                    <div><img src="https://i.ibb.co/K9ZxLS3/Ellipse-2.png" alt="brand name" /></div>
                    <div><h2 className="uppercase mx-3">HITACHI</h2></div>
                    <div><img src="https://i.ibb.co/qxDsKpN/Group.png" alt="love_icon" /></div>
                  </div>

                  <div className="text-white flex justify-start items-center">
                    <button className="bg-[#F26522] text-[14px] font-semibold flex justify-center px-4 py-2 rounded-3xl">
                      <img className="mr-2" src="https://i.ibb.co/Wk6MgY7/Vector.png" alt="card" />
                      Add to cart
                    </button>
                    <span className="text-[14px] ml-3">View Details</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <img
                    src="https://i.ibb.co/Nt39sjN/like.png"
                    alt="like"

                  />
                  <img
                    src="https://i.ibb.co/9TN35Rv/share.png"
                    alt="share"
                    className="my-3"
                  />
                  <img
                    className=" w-[40px] h-[40px] rounded-full border-2 border-white"
                    src="https://i.ibb.co/2FTRg9W/6913351.png"
                  />
                  
                  <img
                    className=" w-[40px] h-[40px] my-3"
                    src="https://i.ibb.co/hHbPZB2/Rectangle-2.png"
                  />

                  <img
                    className=" w-[40px] h-[40px] rounded-full border-2 border-white"
                    src="https://i.ibb.co/2SS6GTf/product.png"
                  />
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default VideoPlayer;


// https://i.ibb.co/Wk6MgY7/Vector.png
// https://i.ibb.co/qxDsKpN/Group.png
// https://i.ibb.co/K9ZxLS3/Ellipse-2.png