import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useState } from "react";

const images = {
  upload: "/upload.svg",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Event title is required"),
  date: Yup.date().required("Event date is required"),
  time: Yup.string().required("Event time is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Event description is required"),
  file: Yup.mixed()
    .required("File is required")
    .test("fileType", "Unsupported file type", (value) =>
      value
        ? ["image/jpeg", "image/png", "image/gif"].includes(value.type)
        : true
    ),
});

const EventForm = () => {
  const [filePreview, setFilePreview] = useState();

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      time: "",
      description: "",
      file: null,
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      console.log("Form submitted", values);
    },
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      formik.setFieldValue("file", selectedFile);

      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 gap-4 mb-3">
        <div>
          <label
            htmlFor="title"
            className="text-customBlack1 md:text-[17px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            event title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter event title"
            className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                    focus:ring-indigo-500 focus:border-indigo-500 border border-[#CFCFCF] rounded-[8px]"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-customRed">{formik.errors.title}</div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-3">
        <div>
          <label
            htmlFor="date"
            className="text-customBlack1 md:text-[17px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                    focus:ring-indigo-500 focus:border-indigo-500 border border-[#CFCFCF] rounded-[8px]"
          />
          {formik.touched.date && formik.errors.date && (
            <div className="text-customRed">{formik.errors.date}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="time"
            className="text-customBlack1 md:text-[17px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                    focus:ring-indigo-500 focus:border-indigo-500 border border-[#CFCFCF] rounded-[8px]"
          />
          {formik.touched.time && formik.errors.time && (
            <div className="text-customRed">{formik.errors.time}</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-3">
        <div>
          <label
            htmlFor="description"
            className="text-customBlack1 md:text-[17px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter event description"
            className="mt-1 block w-full py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                    focus:ring-indigo-500 focus:border-indigo-500 border border-[#CFCFCF] rounded-[8px]"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <div className="text-customRed">{formik.errors.description}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="file"
            className="text-customBlack1 md:text-[17px] text-[14px] font-medium capitalize mb-1 inline-block"
          >
            Upload Image
          </label>
          <div className="border-2 border-dashed border-customBg rounded-lg min-h-[250px] mb-2 flex items-center justify-center relative">
            <input
              type="file"
              id="file"
              accept="image/jpeg, image/png, image/gif"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              onBlur={formik.handleBlur}
            />
            {filePreview ? (
              <Image
                src={filePreview}
                alt="Preview"
                fill
                className="h-full w-full rounded-[8px] object-cover !relative"
              />
            ) : (
              <div className="text-center">
                <Image
                  src={images.upload}
                  width={40}
                  height={40}
                  alt="Upload"
                  className="mb-3 inline-block"
                />
                <p className="text-customBlue font-semibold">
                  Drop files here or click to upload
                </p>
              </div>
            )}
          </div>
          {formik.touched.file && formik.errors.file && (
            <div className="text-customRed">{formik.errors.file}</div>
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="bg-customGraySelect cursor-pointer inline-block mx-2 px-3 py-2 rounded-[6px] text-center my-1 min-w-[140px]">
          <div className=" capitalize  bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent">
            cancel
          </div>
        </div>
        <button
          type="submit"
          className="inline-block capitalize rounded-[8px] mx-2 py-2 px-3 min-w-[140px] text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
        >
          create event
        </button>
      </div>
    </form>
  );
};

export default EventForm;
