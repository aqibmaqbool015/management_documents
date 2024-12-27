"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { legalName } from "../constant";

const image = {
  image: "/signup2.png",
  logo: "/logo.svg",
  mail: "/mail.svg",
  key: "/key.svg",
  calendar: "/calendar.svg",
  user: "/user.svg",
  google: "/social.svg",
  facebook: "/social2.svg",
  apple: "/social3.svg",
  gap: "/or.svg",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const CompleteSignup = () => {
  const router = useRouter();

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log("Form submitted successfully:", values);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Head>
        <title>Signup Page</title>
      </Head>
      <div className="w-full md:w-[50%] relative">
        <Image
          src={image.image}
          alt="Car Dealership"
          className="h-lvh w-full !relative"
          width={300}
          height={300}
        />
        <div className="text-left w-full">
          <Image
            src={image.logo}
            alt="Car Dealership"
            className="w-[140px] h-auto absolute left-3 top-3"
            width={140}
            height={70}
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-center">
        <div className="max-w-md w-full py-5 px-4 md:px-0">
          <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
            Enter Details To Signup
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4 mt-10">
                <div>
                  <label htmlFor="fullName" className="block mb-1 text-sm">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-sm">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm">
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter your phone number"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-1 text-sm">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-1 text-sm"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <div className="my-4">
            <Image
              width={100}
              height={100}
              src={image.gap}
              className="w-full h-auto"
              alt=""
            />
          </div>
          <div className="mt-6 flex justify-center grid-cols-2 gap-3">
            <div className="w-full text-center bg-transparent border border-customBg py-2 px-2 rounded-[8px]">
              <Image
                width={100}
                height={100}
                src={image.google}
                alt="Google"
                className="w-[21px] inline-block h-auto align-sub"
              />
              <span className="mx-2 text-customBlue font-medium text-[16px] capitalize ">
                continue with google
              </span>
            </div>
          </div>
          <h6 className="text-2xl font-normal text-center mb-8 text-[15px] text-customText my-3">
            Already have an account?{" "}
            <span
              className="text-customBlue font-medium cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CompleteSignup;
