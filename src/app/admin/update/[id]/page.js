"use client";
import AdminHader from "@/app/components/adminHeader";
import { Button } from "@/app/utils/buttons";
import {
  initialValuesEventTypes,
  validationSchemaEventType,
} from "@/app/utils/formikConfig";
import { useFormik } from "formik";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/app/components/toast";
import { updateEventTypeApi } from "../api";

const Update = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const parts = pathname.split("/");
    const user_id = parts[parts.length - 1];
    setUserId(user_id);
  }, [pathname]);

  const formik = useFormik({
    initialValues: initialValuesEventTypes,
    validationSchema: validationSchemaEventType,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (!userId) {
        toast.error("User ID not found!");
        return;
      }
      setLoading(true);
      const params = {
        title: values.title,
        description: values.description,
      };
      try {
        const response = await updateEventTypeApi(userId, params);
        console.log("Response received:", response);

        if (response?.success) {
          setLoading(false);
          toast.success(<CustomToast content={response?.message} />);
          router.push("/admin/event-types");
        } else {
          setLoading(false);
          toast.error(<CustomToast content={response?.message} />);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

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
                  value={formik.values.title}
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
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <div className="text-customRed">
                    {formik.errors.description}
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
