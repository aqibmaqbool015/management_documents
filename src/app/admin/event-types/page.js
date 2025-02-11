"use client";
import AdminHader from "@/app/components/adminHeader";
import EventTypeTable from "@/app/components/eventTypeTable";
import { tableEventType } from "@/app/constant";
import { Button } from "@/app/utils/buttons";
import {
  initialValuesEventTypes,
  validationSchemaEventType,
} from "@/app/utils/formikConfig";
import { imageSidebar, imagesUsers } from "@/app/utils/images";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createEventTypeApi, getAllEventTypesApi } from "./api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/app/components/toast";

const EventTypes = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [allEventTypes, setAllEventTypes] = useState();
  const [eventTypeModal, setEventTypeModal] = useState(false);
  const handleModalOpen = () => setEventTypeModal(true);
  const handleModalClose = () => setEventTypeModal(false);

  useEffect(() => {
    fetchGetAllEventTypes();
  }, []);

  const fetchGetAllEventTypes = async () => {
    const response = await getAllEventTypesApi();
    setAllEventTypes(response?.data);
  };

  const formik = useFormik({
    initialValues: initialValuesEventTypes,
    validationSchema: validationSchemaEventType,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true);
      const params = {
        title: values?.title,
        description: values?.description,
      };
      try {
        const response = await createEventTypeApi(params);
        console.log("response submitted", response);

        if (response.success) {
          setLoading(false);
          setEventTypeModal(false);
          toast.success(<CustomToast content={response?.message} />);
        } else {
          setLoading(false);
          toast.error(<CustomToast content={response?.message} />);
        }
      } catch (error) {}
    },
  });
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Event Types"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="md:flex justify-between items-center ">
            <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
              All Event Types
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
                  classes="md:my-0 my-2 font-normal rounded-[8px] text-center px-3 min-w-[100px] mx-1 text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo
                h-[40px]"
                  name="+ Add More"
                  onClick={handleModalOpen}
                />
              </div>
              <EventTypeTable
                title="Title"
                description="Description"
                status="Status"
                tableContentCategory={allEventTypes}
              />
            </div>
          </div>
        </div>
      </div>
      {eventTypeModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-[400px] max-h-[90vh] overflow-y-auto">
            <div className="p-4 relative">
              <div className="absolute right-3 top-4">
                <Image
                  src={imageSidebar.cross}
                  alt="Close"
                  className="w-[20px] h-auto cursor-pointer"
                  onClick={handleModalClose}
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <div className="my-4 px-4">
              <div className="text-center">
                <h3 className="text-customBlue font-semibold text-[22px] capitalize ">
                  Create Event
                </h3>
                <p className="text-customGrayLine font-normal text-[16px] ">
                  Add Event Title & Description
                </p>
              </div>
              <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label
                    htmlFor="title"
                    className="text-customBlue font-medium text-[16px] capitalize "
                  >
                    title
                  </label>
                  <div className="relative !mt-1">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Add event title"
                      className=" block w-full px-4 py-2 shadow-sm placeholder-customDarkGray border border-customBg rounded-[12px] focus:outline-none
                    focus:ring-customGradiantFrom focus:border-customGradiantFrom "
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title && (
                      <div className="text-customRed">
                        {formik.errors.title}
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="description"
                      className="text-customBlue font-medium text-[16px] capitalize "
                    >
                      Description
                    </label>
                    <div className="relative !mt-1">
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        rows={4}
                        placeholder="Add event description"
                        className=" block w-full px-4 py-2 shadow-sm placeholder-customDarkGray border border-customBg rounded-[12px] focus:outline-none
                    focus:ring-customGradiantFrom focus:border-customGradiantFrom "
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      ></textarea>
                      {formik.touched.description &&
                        formik.errors.description && (
                          <div className="text-customRed">
                            {formik.errors.description}
                          </div>
                        )}
                    </div>
                    <div className="my-5 text-center">
                      <span
                        onClick={handleModalClose}
                        className="bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent inline-block capitalize mx-2 bg-transparent border border-customGradiantFrom rounded-[12px] px-3 min-w-[100px] py-1
                          cursor-pointer "
                      >
                        cancel
                      </span>
                      <Button
                        type="submit"
                        classes="text-white capitalize mx-2 bg-gradient-to-r from-customGradiantFrom to-customGradiantTo border border-transparent rounded-[12px] px-3 min-w-[100px] py-1 "
                        name="next"
                        isSubmitting={formik.isSubmitting}
                        onLoading={loading}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default EventTypes;
