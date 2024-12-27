"use client";
import AdminHader from "@/app/components/adminHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const images = {
  user: "/avatar-image.svg",
};

const Requests = () => {
  const router = useRouter();
  const handleClickCreateEvent = () =>
    router.push("/event-manager/create-event");
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Create Event Site"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="md:flex justify-between items-center ">
                <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
                  Event Requests
                </p>
                <button className="bg-customGraySelect rounded-[8px] py-2 px-3 ">
                  <p className="inline-block cursor-pointer text-[15px] bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent mr-1">
                    Create New Event
                  </p>
                </button>
              </div>
              <div className="md:flex justify-between items-center mt-5 cursor-pointer hover:bg-customBgLight p-1 border-b border-b-customBorderBottom pb-3 ">
                <div class="relative md:w-[450px] md:my-0 my-2">
                  <div className="flex items-center">
                    <span className=" inline-block w-[40px] h-[40px] mr-2">
                      <Image
                        width={15}
                        height={15}
                        src={images.user}
                        alt=""
                        className="w-full h-full object-contain rounded-full inline-block"
                      />
                    </span>
                    <div className="">
                      <p className="text-customBlackC1 text-[14px] font-medium ">
                        Edward Curr
                      </p>
                      <p className="text-customText text-[12px] font-normal ">
                        Has Requested to Create <b>Wedding Event.</b>
                      </p>
                      <p className="text-customText text-[12px] font-normal ">
                        17 minutes ago
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-2">
                  <button className="font-normal rounded-[8px] text-center py-2 px-3 min-w-[100px] mx-1 text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo">
                    Accept
                  </button>
                  <button className="font-normal rounded-[8px] text-center py-2 px-3 min-w-[100px] mx-1 text-customButtontext border border-customBorderBottom bg-white  ">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
