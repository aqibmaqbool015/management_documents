"use client";
import AdminHader from "@/app/components/adminHeader";
import ContactTable from "@/app/components/contactTable";
import { tableContactCategory } from "@/app/constant";
import { imagesUsers } from "@/app/utils/images";
import Image from "next/image";
import React from "react";

const ContactByme = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Contact by me"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="flex justify-between items-center">
                <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
                  Contact by Me
                </p>
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
              <ContactTable
                name="name"
                date="date"
                email="email"
                phone="phone"
                tableContactCategory={tableContactCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactByme;
