"use client";
import Head from "next/head";
import { useFormik } from "formik";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { forgotPageImages as image } from "../utils/images";
import {
  forgotPasswordInitialValues,
  forgotPasswordSchema,
} from "../utils/formikConfig";
import { Button } from "../utils/buttons";

export default function ForgotPage() {
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
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      setIsModalOpen(true);
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const otpSubmit = () => {
    router.push("/new-password");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Forgot Password</title>
      </Head>

      <div className="w-full md:w-[50%] flex flex-col items-center">
        <div className="text-left w-full">
          <Image
            width={100}
            height={100}
            src={image.logo}
            alt="Car Dealership"
            className="w-[140px] h-auto"
          />
        </div>
        <div className="max-w-md w-full py-5 px-4 md:px-0">
          <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
            Forgot Password
          </h1>
          <h6 className="text-2xl font-normal mb-8 text-center text-[14px] leading-normal text-customBlue">
            Enter the email of your account and we will send the email to reset
            your password.
          </h6>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-[17px] text-customBlue">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-[8px] py-3 px-4 text-sm text-customBlue focus:outline-none"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-customRed">{formik.errors.email}</div>
                )}
              </div>
            </div>
            <div className="!mt-7">
              <Button
                type="submit"
                class="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                name=" Next"
              />
            </div>
          </form>
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
      <div className="w-full md:w-[50%]">
        <Image
          width={100}
          height={100}
          src={image.image}
          alt="Car Dealership"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
