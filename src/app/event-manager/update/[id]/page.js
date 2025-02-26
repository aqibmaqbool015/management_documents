"use client";
import AdminHader from "@/app/components/adminHeader";
import { Button } from "@/app/utils/buttons";
import {
  initialValuesEventCategory,
  initialValuesEventTypes,
  SchemaEventCategoryUpdate,
  validationSchemaEventCategory,
  validationSchemaEventType,
} from "@/app/utils/formikConfig";
import { useFormik } from "formik";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/app/components/toast";
import { updateEventCategoryApi } from "../api";
import { imagesUsers } from "@/app/utils/images";
import Image from "next/image";
import {
  getAllEventCategoryApi,
  getAllEventTypesApi,
} from "../../category/api";

const Update = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allEventCategory, setAllEventCategory] = useState([]);

  console.log("---userId--", userId);

  useEffect(() => {
    const parts = pathname.split("/");
    const user_id = parts[parts.length - 1];
    setUserId(user_id);
  }, [pathname]);

  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  const eventData = data ? JSON.parse(decodeURIComponent(data)) : null;
  console.log("===eventData", eventData);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: null,
    },
    enableReinitialize: true,
    validationSchema: SchemaEventCategoryUpdate,
    onSubmit: async (values) => {
      setLoading(true);
      if (!userId) {
        toast.error("User ID not found!");
        return;
      }
      const formData = new FormData();
      formData.append("title", values?.title || "");
      formData.append("description", values?.description || "");
      if (values?.image) {
        formData.append("image", values?.image);
      }

      try {
        const response = await updateEventCategoryApi(userId, formData);
        if (response?.success) {
          toast.success(<CustomToast content={response?.message} />);
          router.push("/event-manager/category");
        } else {
          toast.error(<CustomToast content={response?.message} />);
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        toast.error("File size must be less than 3MB");
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      formik.setFieldValue("image", file);
      formik.setFieldValue("picturePreview", previewUrl);
      formik.setTouched({ ...formik.touched, image: true });
      formik.setFieldError("image", "");
    }
  };

  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Event Types"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="md:flex justify-between items-center">
            <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
              Update the events
            </p>
          </div>
          <div className="my-4 px-4">
            <div className="text-center">
              <h3 className="text-customBlue font-semibold text-[22px] capitalize">
                Update Event
              </h3>
              <p className="text-customGrayLine font-normal text-[16px]">
                Add Event Title & Description
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="title"
                  className="text-customBlue font-medium text-[16px] capitalize"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Add event title"
                  className="block w-full px-4 py-2 shadow-sm placeholder-customDarkGray border border-customBg rounded-[12px] mt-2 focus:outline-none
                    focus:ring-customGradiantFrom focus:border-customGradiantFrom"
                  value={formik.values.title || eventData?.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-customRed">{formik.errors.title}</div>
                )}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="description"
                  className="text-customBlue font-medium text-[16px] capitalize"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Add event description"
                  className="block w-full px-4 py-2 shadow-sm placeholder-customDarkGray border border-customBg rounded-[12px] mt-2 focus:outline-none
                    focus:ring-customGradiantFrom focus:border-customGradiantFrom"
                  value={formik.values.description || eventData?.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <div className="text-customRed">
                    {formik.errors.description}
                  </div>
                )}
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
                          formik.setTouched({ ...formik.touched, image: true });
                          formik.setFieldError("image", "Image is required");
                        }}
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer text-center absolute w-full top-[30px]">
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
                {formik.touched.image && formik.errors.image && (
                  <div className="text-customRed text-sm mt-2">
                    {formik.errors.image}
                  </div>
                )}
              </div>

              <div className=" !my-10 text-center">
                <button
                  type="button"
                  onClick={() => router.push("/admin/events")}
                  className="border rounded-[12px] px-3 mx-2 min-w-[150px] py-2"
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  classes="text-white capitalize mx-2 bg-gradient-to-r from-customGradiantFrom to-customGradiantTo border border-transparent rounded-[12px] px-3 mx-2 min-w-[150px] py-2 "
                  name="Update"
                  isSubmitting={formik.isSubmitting}
                  onLoading={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Update;
