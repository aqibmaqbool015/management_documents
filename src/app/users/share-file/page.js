"use client";
import AdminHader from "@/app/components/adminHeader";
import { documentsFile, recentCards, recentCardsBirthday } from "@/app/constant";
import Image from "next/image";
import React from "react";

const SharedToMe = () => {
  const images = {
    bell: "header3.svg",
    user: "/user-client.svg",
    upload: "/upload.svg",
    dots: "/dots.svg",
    date: "/date.svg",
    location: "/location.svg",
  };

  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Events"
          divider1="/"
          subTitle1="Shared to me"
          classLabel="text-customText md:text-[17px] text-[14px] font-normal capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-customBlue font-semibold mb-4">
                  Shared to me
                </h3>
                <span className="bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer">
                  <Image
                    width={10}
                    height={10}
                    src={images.dots}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block align-sub "
                  />
                </span>
              </div>
              <div className="">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 mb-2 mt-5">
                  {recentCardsBirthday.map((item, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className=" bg-customCardBg shadow-custom rounded-[8px] pb-2 cursor-pointer "
                          onClick={() => clickHandleData(index)}
                        >
                          <Image
                            src={item.picture}
                            width={200}
                            height={200}
                            alt
                            className="w-full md:h-[130px] rounded-tl-[8px] rounded-tr-[8px] "
                          />
                          <div className="px-1 py-2 flex justify-between items-start ">
                            <p className="text-customBlack1 text-[12px] font-medium ">
                              {item.title}
                            </p>
                            <Image
                              src={item.icon}
                              alt=""
                              className="w-[15px] h-[15px] object-contain "
                              width={18}
                              height={18}
                            />
                          </div>
                          <p className="text-customTextCard text-[12px] font-light px-1">
                            <span className="inline-block w-[13px] h-[13px]">
                              <Image
                                src={images.date}
                                alt=""
                                className=" object-contain w-full h-full align-baseline inline-block "
                                width={10}
                                height={10}
                              />
                            </span>{" "}
                            {item.date}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedToMe;
