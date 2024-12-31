"use client";
import AdminHader from "@/app/components/adminHeader";
import TableComponent from "@/app/components/table";
import { tableBodyContent } from "@/app/constant";
import React from "react";
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
        </div>
      </div>
    </div>
  );
};

export default Details;
