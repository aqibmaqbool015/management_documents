"use client";
import AdminHader from "@/app/components/adminHeader";
import CategoryTable from "@/app/components/categoryTable";
import { tableContentCategory } from "@/app/constant";
import { Button } from "@/app/utils/buttons";
import { imageSidebar, imagesUsers } from "@/app/utils/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  createEventCategoryApi,
  getAllEventCategoryApi,
  getAllEventTypesApi,
} from "./api";
import { useFormik } from "formik";
import {
  initialValuesEventCategory,
  validationSchemaEventCategory,
} from "@/app/utils/formikConfig";
import { SelectInput } from "@/app/components/select";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import CustomToast from "@/app/components/toast";

const Category = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [alleventCategory, setAllEventCategory] = useState([]);
  const [allEvents, setAllEventType] = useState([]);

  const [eventTypeModal, setEventTypeModal] = useState(false);
  const handleModalOpen = () => setEventTypeModal(true);
  const handleModalClose = () => setEventTypeModal(false);

  useEffect(() => {
    fetchGetAllEventCategory();
    fetchGetAllEventType();
  }, []);

  const fetchGetAllEventCategory = async () => {
    const response = await getAllEventCategoryApi();
    setAllEventCategory(response?.data);
  };

  const fetchGetAllEventType = async () => {
    const response = await getAllEventTypesApi();
    setAllEventType(response?.data);
  };

  const formik = useFormik({
    initialValues: initialValuesEventCategory,
    validationSchema: validationSchemaEventCategory,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      // setLoading(true);
      const formData = new FormData();
      formData.append("title", values?.title || "");
      formData.append("eventType", values?.eventType || "");
      formData.append("description", values?.description || "");
      if (values?.image) {
        formData.append("image", values?.image);
      }
      console.log(values,"---values-------");
      try {
        const response = await createEventCategoryApi(formData);
        console.log("response submitted", response);
        if (response?.success) {
          setLoading(false);
          setEventTypeModal(false);
          // toast.success(<CustomToast content={response?.message} />);
        } else {
          setLoading(false);
          // toast.error(
          //   <CustomToast content={response?.message || response?.error} />
          // );
        }
      } catch (error) {
        setLoading(false);
      }
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 3 * 1024 * 1024) {
      const previewUrl = URL.createObjectURL(file);
      formik.setFieldValue("image", file);
      formik.setFieldValue("picturePreview", previewUrl);
    } else {
      // toast.error("File size must be less than 3MB");
    }
  };

  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Category"
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
                <div className="relative md:w-[450px] md:my-0 my-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
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
                    className="block w-full py-2 px-10 border border-customBorderSearch rounded-[12px] bg-transparent "
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
              <CategoryTable
                image="Image"
                title="Title"
                type="Type"
                status="Status"
                tableContentCategory={alleventCategory}
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
                    <div className="mt-3">
                      <SelectInput
                        label="Event Types"
                        options={allEvents?.map((item) => ({
                          label: item?.title,
                          value: item?._id,
                        }))}
                        name="eventType"
                        id="eventType"
                        value={formik.values.eventType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.eventType && formik.errors.eventType && (
                        <div className="text-customRed">
                          {formik.errors.eventType}
                        </div>
                      )}
                    </div>
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
                  </div>
                  <div className="mt-3">
                    <label className="text-customBlue font-medium text-[16px] capitalize">
                      Upload Image
                    </label>
                    <div className="border-dashed border-2 border-customGray min-h-[150px] rounded-lg p-2 relative mt-2">
                      {formik.values.picturePreview ? (
                        <div className="relative">
                          <Image
                            src={formik.values.picturePreview}
                            alt="Profile Preview"
                            width={100}
                            height={100}
                            className="rounded-[5px] w-full object-cover"
                          />
                          <button
                            type="button"
                            className="absolute top-0 right-0 bg-customRed text-white p-1 rounded-full text-xs w-[24px]"
                            onClick={() => {
                              formik.setFieldValue("image", null);
                              formik.setFieldValue("picturePreview", "");
                            }}
                          >
                            X
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer text-center absolute w-full top-[30px] ">
                          <Image
                            src={imagesUsers.upload}
                            alt="Upload"
                            width={25}
                            height={25}
                            className="inline-block"
                          />
                          <p className="text-customDarkGray text-[16px] pt-4">
                            Drop file here or click to upload.
                          </p>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                            onBlur={formik.handleBlur}
                          />
                        </label>
                      )}
                    </div>
                    {formik.errors.image && (
                      <div className="text-red-500 text-sm mt-2">
                        {formik.errors.image}
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
              </form>
            </div>
          </div>
        </div>
      )}
      {/* <ToastContainer position="top-right" /> */}
    </div>
  );
};

export default Category;
