"use client";

import AdminHader from "@/app/components/adminHeader";
import CreateEventForm from "@/app/components/createEventForm";
import { CancelButton } from "@/app/utils/buttons";
const EventCreate = () => {
  return (
    <>
      <div className="min-h-screen md:flex">
        <div className="md:flex-1 ">
          <AdminHader
            title="Dashboard"
            divider="/"
            subTitle="Create New Event"
            classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
          />

          <div className="md:p-6 p-3">
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="border border-customBg rounded-[10px] md:p-4 p-2 ">
                <div className="md:flex justify-between items-center ">
                  <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
                    Create Event Site
                  </p>
                  <CancelButton
                    className="bg-customGraySelect cursor-pointer inline-block mx-2 px-3 py-2 rounded-[6px] text-center my-1 min-w-[140px]"
                    name="Create New Event"
                  />
                </div>
                <div className="my-4">
                  <CreateEventForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCreate;
