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
import { toast, ToastContainer } from "react-toastify";
import CustomToast from "../components/toast";
import "react-toastify/dist/ReactToastify.css";
import { forgotPasswordOtpApi, verifyForgotPasswordOtpApi } from "./api";
import { resendOTPApi } from "../signup/api";

export default function ForgotPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [time, setTime] = useState(90);
  const placeholders = ["1", "2", "3", "4", "5", "6"];
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formik = useFormik({
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const params = {
        email: values.email,
      };
      try {
        const response = await forgotPasswordOtpApi(params);
        console.log("========", response);

        if (response && response.success) {
          setIsModalOpen(true);
          setEmailForOtp(values.email);
        } else {
          toast.error(
            <CustomToast content={response.message || "Signup failed"} />
          );
        }
      } catch (error) {
        console.error("Error during signup:", error);
        toast.error(<CustomToast content="An error occurred" />);
      } finally {
        setLoading(false);
      }
    },
  });
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (!/\d/.test(value) && value !== "") return;
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpSubmit = async () => {
    setOtpLoading(true);
    const otp = otpValues.join("");

    if (otp.length < 6) {
      toast.error(<CustomToast content="Please enter a valid OTP" />);
      setOtpLoading(false);
      return;
    }

    const params = {
      email: emailForOtp,
      OTP: otp,
    };
    console.log("------------->", params);

    try {
      const response = await verifyForgotPasswordOtpApi(params);
      console.log(" API Response:", response);
      if (response.success) {
        toast.success(<CustomToast content="OTP verified successfully!" />);
        closeModal();
        if (response.success) {
          const url = `/new-password?email=${encodeURIComponent(params.email)}`;
          console.log("------", url);
          router.push(url);
        }
      } else {
        toast.error(
          <CustomToast
            content={response.message || "OTP verification failed"}
          />
        );
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (time === 0) {
      const params = {
        email: emailForOtp,
      };
      try {
        const response = await resendOTPApi(params);
        if (response.success) {
          toast.success(<CustomToast content={response?.message} />);
          setTime(90);
        } else {
          toast.error(<CustomToast content={response?.message} />);
        }
      } catch (error) {
        console.error("API error while resending OTP:", error.message);
        console.error(error);
      }
      return;
    }
    toast.error(<CustomToast content="Please wait for the time to stop" />);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
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
                  className="w-full border rounded-[8px] py-3 px-4 text-sm text-customBlue focus:outline-none
                  focus:ring-customGradiantFrom focus:border-customGradiantFrom"
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
                classes="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                name=" Next"
                onLoading={loading}
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
              <div>
                <h6 className="text-[20px] font-semibold mt-4 text-customTextColor text-center">
                  Enter verification code
                </h6>
                <p className="text-customText text-center text-[14px] font-normal">
                  We,ve sent a 6-digit confirmation OTP code to
                  <br />
                  <b>{emailForOtp}</b>
                </p>
                <div className="text-center md:mt-4">
                  {placeholders.map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-14 text-center text-lg border rounded-[8px] mx-2 md:my-3 my-2
                                focus:ring-customGradiantFrom focus:border-customGradiantFrom border-[#CFCFCF]"
                      onInput={(e) => handleInput(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                      value={otpValues[index]}
                    />
                  ))}
                  <div className="px-10 mt-4">
                    <Button
                      type="submit"
                      name="Submit"
                      classes="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                      onClick={handleOtpSubmit}
                      onLoading={otpLoading}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full mt-4 px-3">
                {time > 0 ? (
                  <button
                    className="text-customText cursor-not-allowed "
                    onClick={() => handleResendOtp()}
                  >
                    Resend code to {emailForOtp}
                  </button>
                ) : (
                  <button
                    className="text-customOrange cursor-pointer"
                    onClick={() => handleResendOtp()}
                  >
                    Resend code to {emailForOtp}
                  </button>
                )}

                <span className="text-customOrange">{formatTime(time)}</span>
              </div>
            </div>
          </div>
          <ToastContainer position="top-right" />
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
