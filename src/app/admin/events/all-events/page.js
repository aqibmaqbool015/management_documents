"use client";
import AdminHader from "@/app/components/adminHeader";
import { cards, recentCards } from "@/app/constant";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { imagesUsers } from "@/app/utils/images";

const AllEvents = () => {
  const router = useRouter();
  const clickHandleData = (index) => {
    if (index === 0) {
      router.push(`/admin/events/birthday`);
    } else if (index === 1) {
      router.push(`/admin/events/weddings`);
    } else if (index === 2) {
      router.push(`/admin/events/birthday`);
    } else if (index === 3) {
      router.push(`/admin/events/birthday`);
    }
  };
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="All Events"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {cards.map((item, index) => {
              return (
                <>
                  <div key={index} className={item.class}>
                    <div className="text-sm text-customBlue mb-3">
                      {item.title}
                    </div>
                    <div className="text-2xl text-customBlue font-semibold">
                      {item.count}
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-customBlue font-semibold mb-4">
                  All Events
                </h3>
                <span className="bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer">
                  <Image
                    src={imagesUsers.dots}
                    width={15}
                    height={15}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block align-sub "
                  />
                </span>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 mb-2 mt-5">
                {recentCards.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="bg-customCardBg shadow-custom rounded-[8px] pb-2 cursor-pointer relative"
                      >
                        <Image
                          onClick={() => clickHandleData(index)}
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
                          <span className="relative group">
                            <Image
                              src={item.icon}
                              alt=""
                              className="w-[15px] h-[15px] object-contain "
                              width={18}
                              height={18}
                            />
                            <div
                              className="absolute right-1 mt-0 w-32 p-1 bg-white border border-customGray rounded shadow-lg hidden group-hover:block
                z-50 "
                            >
                              <p className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light">
                                View Event
                              </p>
                              <p className=" text-[14px] py-1 bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent font-light">
                                Edit Event
                              </p>
                            </div>
                          </span>
                        </div>
                        <p className="text-customGray2 text-[12px] font-medium py-1 px-1">
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
  );
};

export default AllEvents;
