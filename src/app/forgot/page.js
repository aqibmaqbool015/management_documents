"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../constant";

export default function ForgotPage() {
  const router = useRouter();

  const image = {
    image: "/login.png",
    logo: "/logo.svg",
    mail: "/mail.svg",
    cross: "/cross.svg",

  };

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    router.push("/new-password");
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (submitted) {
      validateForm();
    }
  }, [email, submitted]);

  const validateForm = () => {
    let validationErrors = {};
    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid.";
    }
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  };
  const placeholders = ["1", "2", "3", "4", "5", "6"];
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const isValid = validateForm();
    setIsFormValid(isValid);
    openModal();
    if (isValid) {
      openModal();
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors, please correct them.");
    }
  };

  const inputFields = [
    {
      label: "Email",
      type: "email",
      value: email,
      change: (e) => setEmail(e.target.value),
      id: "email",
      name: "email",
      placeholder: "Enter your email",
      labelClass: "text-[17px] text-customBlue",
      icon: image.mail,
      error: errors.email, // Display error based on validation
    },
  ];

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
          <h6
            className="text-2xl font-normal mb-8 text-center text-[14px] leading-normal
                    text-customBlue"
          >
            Enter the email of your account and we will send the email to reset
            your password.
          </h6>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {inputFields.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                type={field.type}
                value={field.value}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                labelClass={field.labelClass}
                onChange={field.change}
                icon={field.icon}
                error={submitted ? field.error : null}
              />
            ))}

            <div className="!mt-7">
              <button className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo">
                Next
              </button>

              {/* <button
                className="mt-5 border-customBlue text-customBlue
                            w-full flex justify-center py-3 px-4 border rounded-[8px] text-sm font-medium "
              >
                Back
              </button> */}
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
              <div className="">
                <h6 className="text-[20px] font-semibold capitalize mt-4 text-transparent bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo">
                  Check your email
                </h6>
                <p className="text-customBlue text-[16px] font-normal">
                  We’ve sent a 6-digit confirmation OTP code to{" "}
                  <b>username@gmail.com</b>. Make sure you enter the correct
                  code.
                </p>

                <div className="text-center md:mt-4">
                  {Array(6)
                    .fill("")
                    .map((_, index) => (
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
                    <Button name="Continue" onClick={handleClick} />
                    <p className="text-customBlue text-[14px] mt-3 mb-5">
                      Didn't receive a code?{" "}
                      <a href="#" className="text-customGradiantFrom">
                        Resend code
                      </a>
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
