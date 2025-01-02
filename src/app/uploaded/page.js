"use client";
import React, { useState } from "react";
import TableComponent from "../components/table";
import { tableBodyContent } from "../constant";
import AdminHader from "../components/adminHeader";
import Image from "next/image";
import { imagesUsers } from "../utils/images";

const Uploaded = () => {

  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader title="Dashboards" divider="/" subTitle="Overview" />
        <div className="md:p-6 p-3">
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-customBlue font-semibold mb-4">
                  Uploaded Files
                </h3>
                <span className="bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer">
                  <Image
                    width={15}
                    height={15}
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
                tableBodyContent={tableBodyContent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
