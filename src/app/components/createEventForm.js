import Image from "next/image";
import { useState } from "react";
import { imagesUsers } from "../utils/images";
import {
  initialValuesEvent,
  validationSchemaEvent,
} from "../utils/formikConfig";
import { useFormik } from "formik";
import { Button, CancelButton } from "../utils/buttons";

const CreateEventForm = () => {
  const [fileName, setFileName] = useState("");

  const formik = useFormik({
    initialValues: initialValuesEvent,
    validationSchema: validationSchemaEvent,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      console.log("Form submitted", values);
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 mb-3">
        <div>
          <label
            htmlFor="date"
            className="text-customBlack1 md:text-[16px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            event type
          </label>
          <div className="relative !mt-0">
            <select
              id="service_History"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none text-customText
                      focus:ring-customGradiantFrom focus:border-customGradiantFrom border border-[#CFCFCF] rounded-[8px]"
            >
              <option value="">Select event type</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-customDarkGray"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {formik.touched.type && formik.errors.type && (
            <div className="text-customRed">{formik.errors.type}</div>
          )}
        </div>
        <div>
          <div>
            <label
              htmlFor="file"
              className="text-customBlack1 md:text-[16px] text-[14px] font-medium capitalize mb-1 block"
            >
              Upload Event Document
            </label>
            <div className="relative !mt-0">
              <label
                htmlFor="file"
                className="cursor-pointer absolute top-0 right-0 px-4 py-3 text-customText rounded-[8px]"
              >
                <Image
                  src={imagesUsers.uploadImage}
                  alt=""
                  width={10}
                  height={10}
                  className="inline-block object-contain w-[16px] h-auto "
                />
              </label>
              <input
                type="text"
                value={fileName}
                readOnly
                placeholder="Upload File"
                className="mt-[8px] block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                focus:ring-customGradiantFrom focus:border-customGradiantFrom
                      border border-[#CFCFCF] 
                     rounded-[8px] "
              />
              <input
                type="file"
                id="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          {formik.touched.file && formik.errors.file && (
            <div className="text-customRed">{formik.errors.file}</div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-3">
        <div>
          <label
            htmlFor="name"
            className="text-customBlack1 md:text-[16px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            site name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Event site name"
            className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                    focus:ring-customGradiantFrom focus:border-customGradiantFrom border border-[#CFCFCF] rounded-[8px]"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-customRed">{formik.errors.name}</div>
          )}
        </div>
        <div>
          <label
            htmlFor="manager"
            className="text-customBlack1 md:text-[16px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            add event manager
          </label>
          <input
            type="text"
            id="manager"
            name="manager"
            value={formik.values.manager}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter manager name"
            className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                    focus:ring-customGradiantFrom focus:border-customGradiantFrom border border-[#CFCFCF] rounded-[8px]"
          />
          {formik.touched.manager && formik.errors.manager && (
            <div className="text-customRed">{formik.errors.manager}</div>
          )}
        </div>
      </div>
      <div className="text-center mt-6">
        <CancelButton
          className="bg-customGraySelect cursor-pointer inline-block mx-2 px-3 py-2 rounded-[6px] text-center my-1 min-w-[140px]"
          name="Cancel"
        />
        <Button
          type="button"
          classes="inline-block py-2.5 px-3 mx-2 my-1 min-w-[140px] border border-transparent rounded-[8px] shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
          name="Create Event"
        />
      </div>
    </form>
  );
};

export default CreateEventForm;
