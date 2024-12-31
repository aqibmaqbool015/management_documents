"use client";
import AdminHader from "@/app/components/adminHeader";
import CategoryTable from "@/app/components/categoryTable";
import { tableContentCategory } from "@/app/constant";
import { Button } from "@/app/utils/buttons";
import { imagesUsers } from "@/app/utils/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Category = () => {
  const router = useRouter();
  const handleClickCreateEvent = () =>
    router.push("/event-manager/create-event");
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
              All Events Category
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="md:flex justify-between items-center">
                <div class="relative md:w-[450px] md:my-0 my-2">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 ">
                    <Image
                      src={imagesUsers.search}
                      alt=""
                      width={15}
                      height={15}
                      className="w-[20px] h-auto object-contain inline-block "
                    />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full py-2 px-10 border border-customBorderSearch rounded-[12px] bg-transparent "
                    placeholder="Tap to Search"
                    required
                  />
                </div>
                <Button
                  type="button"
                  class="md:my-0 my-2 font-normal rounded-[8px] text-center px-3 min-w-[100px] mx-1 text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo
                h-[40px]"
                  name="+ Add More"
                />
              </div>
              <CategoryTable
                image="Image"
                title="Title"
                type="Type"
                status="Status"
                tableContentCategory={tableContentCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
