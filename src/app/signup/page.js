"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { imageSignup } from "../utils/images";
import {
  initialValuesSignup,
  validationSchemaSignup,
} from "../utils/formikConfig";
import { Button } from "../utils/buttons";
import { inputFieldsSignup } from "../constant";
import CustomInput from "../components/input";
import { useEffect, useRef, useState } from "react";
import { forgotPageImages as image } from "../utils/images";

const Signup = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const placeholders = ["1", "2", "3", "4", "5", "6"];
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const [time, setTime] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };
  const formik = useFormik({
    initialValues: initialValuesSignup,
    validationSchema: validationSchemaSignup,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      setIsModalOpen(true);
      setSubmitting(false);
    },
  });
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const otpSubmit = () => {
    router.push("/login");
  };

  const { errors, touched, handleBlur, handleChange, values } = formik;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Head>
        <title>Signup Page</title>
      </Head>
      <div className="w-full md:w-[50%] relative">
        <Image
          src={imageSignup.image}
          alt="Car Dealership"
          className="h-lvh w-full !relative"
          width={300}
          height={300}
        />
        <div className="text-left w-full">
          <Image
            src={imageSignup.logo}
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

          <form onSubmit={formik.handleSubmit} className="space-y-4 mt-10">
            {inputFieldsSignup.map((field) => (
              <div key={field.id}>
                <CustomInput
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  labelClass={field.labelClass}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon={field.icon}
                />
                {errors[field.name] && touched[field.name] && (
                  <p className="text-customRed text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <Button
              type="submit"
              class="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              name=" Sign Up"
            />
          </form>

          <div className="my-4">
            <Image
              width={100}
              height={100}
              src={imageSignup.gap}
              className="w-full h-auto"
              alt=""
            />
          </div>
          <div className="mt-6 flex justify-center grid-cols-2 gap-3">
            <div className="w-full text-center bg-transparent border border-customBg py-2 px-2 rounded-[8px]">
              <Image
                width={100}
                height={100}
                src={imageSignup.google}
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
      {isModalOpen && (
        <div
          id="myModal"
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-[550px] overflow-y-auto">
            <div className="p-4 relative">
              <div className="absolute right-3 top-4">
                <Image
                  width={100}
                  height={100}
                  src={image.cross}
                  alt="Close"
                  className="w-[20px] h-auto cursor-pointer"
                  onClick={closeModal}
                />
              </div>
              <h4 className="text-[26px] text-center font-medium text-customBlue capitalize mt-4">
                Enter OTP Code
              </h4>
              <div>
                <h6 className="text-[20px] font-semibold capitalize mt-4 text-transparent bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo">
                  Check your email
                </h6>
                <p className="text-customBlue text-[16px] font-normal">
                  We ve sent a 6-digit confirmation OTP code to{" "}
                  <b>username@gmail.com</b>. Make sure you enter the correct
                  code.
                </p>
                <div className="text-center md:mt-4">
                  {placeholders.map((_, index) => (
                    <input
                      key={index}
                      type="number"
                      maxLength="1"
                      className="w-10 h-16 text-center text-lg border border-customBg rounded-[8px] focus:outline-none focus:border-customGradiantFrom appearance-none placeholder-customBlue mx-2 md:my-3 my-2"
                      onInput={(e) => handleInput(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
                  <div className="px-10 mt-4">
                    <Button
                      type="button"
                      name="Continue"
                      class="w-full flex justify-center py-3 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                      onClick={otpSubmit}
                    />
                    <p className="text-customBlue text-[14px] mt-3 mb-5">
                      Didn't receive a code?{" "}
                      <div className="flex justify-between items-center w-full">
                        <span className="text-customOrange cursor-pointer">
                          Resend code to
                        </span>
                        <span className="text-customOrange">
                          {formatTime(time)}
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//

export default Signup;
