"use client";
import AdminHader from "@/app/components/adminHeader";
import TableComponent from "@/app/components/table";
import { tableBodyContentUser } from "@/app/constant";
import { imagesUsers } from "@/app/utils/images";
import Image from "next/image";
import React from "react";

const AllEvents = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Events"
          divider1="/"
          subTitle1="All Events"
          classLabel="text-customText md:text-[17px] text-[14px] font-normal capitalize block mx-2"
        />

        <div className="md:p-6 p-3">
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-customBlue font-semibold mb-4">
                  Shared Files
                </h3>
                <span className="bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer">
                  <Image
                    width={10}
                    height={10}
                    src={imagesUsers.dots}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block align-sub "
                  />
                </span>
              </div>
              <TableComponent
                name="Name"
                date="Date"
                file="File Size"
                last="Last Modified"
                tableBodyContent={tableBodyContentUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
