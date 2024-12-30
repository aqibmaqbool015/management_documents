"use client";

import AdminHader from "@/app/components/adminHeader";
import CreateEventForm from "@/app/components/createEventForm";
import EventForm from "@/app/components/eventForm";

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
                  <button className="bg-customGraySelect rounded-[8px] py-2 px-3 ">
                    <p className="inline-block cursor-pointer text-[15px] bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent mr-1">
                      Create New Event
                    </p>
                  </button>
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
