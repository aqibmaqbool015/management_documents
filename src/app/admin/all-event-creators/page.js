"use client";
import AdminHader from "@/app/components/adminHeader";
import { cards, tableContacts } from "@/app/constant";
import React from "react";
import Image from "next/image";
import ContactTableAdmin from "@/app/components/contactTableAdmin";
import { imagesUsers } from "@/app/utils/images";

const AllEventCreators = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="All Event Creators"
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
                  Contacts
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
              <div className="grid grid-cols-1 gap-2 mb-2">
                <ContactTableAdmin
                  name="name"
                  date="date"
                  email="email"
                  phone="phone no."
                  tableContactCategory={tableContacts}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventCreators;
