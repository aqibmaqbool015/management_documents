"use client";
import AdminHader from "@/app/components/adminHeader";
import TableComponent from "@/app/components/table";
import { tableBodyContent } from "@/app/constant";
import Image from "next/image";
import React, { useState } from "react";

const images = {
  bell: "header3.svg",
  user: "/user-client.svg",
  upload: "/upload.svg",
  dots: "/dots.svg",
  banner: "/event-banner.png",
  location: "/location.svg",
  date: "/date.svg",
  time: "/time.svg",
};

const Details = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Birthday Events"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="md:flex justify-between items-center ">
            <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
              Emma’s Birthday Event
            </p>
            {/* <div className="inline-block">
              <div className="bg-customGraySelect cursor-pointer inline-block mx-1 px-3 py-2 rounded-[6px] text-center my-4">
                <div className="   bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent">
                  Download
                </div>
              </div>

              <div className="bg-customGraySelect cursor-pointer inline-block mx-1 px-3 py-2 rounded-[6px] text-center my-4">
                <div className="   bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent">
                  Send message to creator
                </div>
              </div>
            </div> */}
          </div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <TableComponent
                name="Name"
                date="Location"
                file="Owner"
                last="Last Modified"
                tableBodyContent={tableBodyContent}
              />
            </div>
          </div>
          {/* <div className="md:mx-20 py-4 bg-customGraySelect">
            <Image
            width={10}
            height={10}
              src={images.banner}
              alt=""
              width={200}
              height={200}
              className="w-full h-[430px] object-contain inline-block "
            />
            <div className="my-3 px-4">
              <p className="text-black text-[20px] font-medium capitalize ">
                birthday event
              </p>
              <p className="text-black text-[16px] font-normal ">
                Join us on November 11
              </p>
              <div className="flex justify-between ">
                <p className="text-black text-[15px] font-normal ">
                  ellentesque ullamcorper tortor ut auctor consequat. Nullam sed
                  nisi massa. Aliquam eget enim nunc. Praesent blandit blandit
                  ornare. Sed lacinia felis quis elit luctus, et tincidunt elit
                  aliquam. Sed porttitor eros id purus sollicitudin, quis
                  pellentesque nunc pulvinar. Ut accumsan a sem quis dignissim.
                  Sed lacus mauris, efficitur ac lobortis id, faucibus at quam.
                  Praesent quis metus hendrerit, vulputate nibh vel, eleifend
                  nibh.
                </p>
                <div className="inline-block w-full">
                  <Image
                  width={10}
                  height={10}
                    src={images.location}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[15px] h-auto inline-block object-contain mr-2"
                  />
                  <div className="inline-block text-black font-normal ">
                    location:
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
