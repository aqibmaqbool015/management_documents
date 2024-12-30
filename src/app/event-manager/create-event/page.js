"use client";

import AdminHader from "@/app/components/adminHeader";
import EventForm from "@/app/components/eventForm";

const CreateEvent = () => {
  return (
    <>
      <div className="min-h-screen md:flex">
        <div className="md:flex-1 ">
          <AdminHader
            title="Dashboard"
            divider="/"
            subTitle1="Create New Event"
            classLabel="text-customText md:text-[17px] text-[14px] font-normal capitalize block mx-2"
          />

          <div className="md:p-6 p-3">
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="border border-customBg rounded-[10px] md:p-4 p-2 ">
                <p className="text-customTitle md:text-[18px] text-[16px] font-medium capitalize ">
                  create new birthday event
                </p>
                <div className="my-4">
                  <EventForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
