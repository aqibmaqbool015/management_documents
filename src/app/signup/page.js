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
import { registerApi, resendOTPApi, verifyOtpApi } from "./api";
import { toast, ToastContainer } from "react-toastify";
import CustomToast from "../components/toast";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [time, setTime] = useState(90);

  const placeholders = ["1", "2", "3", "4", "5", "6"];
  const inputRefs = useRef([]);

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
  const formik = useFormik({
    initialValues: initialValuesSignup,
    validationSchema: validationSchemaSignup,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true);
      const params = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        confirmPassword: values.confirmPassword,
        role: values.role,
      };
      console.log("--params----", params);

      try {
        const response = await registerApi(params);
        console.log("---------respnonse--", response?.message);

        if (response && response.success) {
          setLoading(false);

          setIsModalOpen(true);
          setEmailForOtp(values.email);
        } else {
          setLoading(false);
          toast.error(
            <CustomToast content={response.message || "Signup Failed"} />
          );
          setLoading(false);
        }
      } catch (error) {
        toast.error(<CustomToast content="Something went wrong" />);
      } finally {
        setLoading(false);
      }
    },
  });
  const closeModal = () => {
    setIsModalOpen(false);
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
      const response = await verifyOtpApi(params);
      console.log(" API Response:", response);
      if (response.success) {
        toast.success(<CustomToast content="OTP verified successfully!" />);
        closeModal();
        router.push("/login");
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
                {field.type === "select" ? (
                  <div>
                    <label className={field.labelClass}>{field.label}</label>
                    <select
                      id={field.id}
                      name={field.name}
                      value={values[field.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mt-1 block w-full text-customDarkGray px-3 py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                      focus:ring-customGradiantFrom focus:border-customGradiantFrom border border-[#CFCFCF] rounded-[8px]"
                    >
                      <option value="">Select Role</option>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
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
                )}

                {errors[field.name] && touched[field.name] && (
                  <p className="text-customRed text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <Button
              type="submit"
              classes="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              name="Sign Up"
              onLoading={loading}
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
        </div>
      )}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Signup;
