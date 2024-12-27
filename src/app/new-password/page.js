"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../constant";
import Image from "next/image";

export default function NewPassword() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const placeholders = ["1", "2", "3", "4", "5", "6"];

  const image = {
    image: "/create.png",
    logo: "/logo.svg",
    key: "/key.svg",
    check: "/check.svg",
    checks: "/checks.svg",
    eyeOff: "/eye-off.svg",
    cross: "/cross.svg",
  };

  const message = [
    {
      icon: image.checks,
      text: "Password must be between 8 to 32 characters.",
    },
    {
      icon: image.checks,
      text: "Must contain an uppercase character.",
    },
    {
      icon: image.checks,
      text: "Must contain a number.",
    },
    {
      icon: image.check,
      text: "Must contain one special character.",
    },
  ];

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    let validationErrors = {};

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    if (!newPassword) {
      validationErrors.newPassword = "Confirmation password is required.";
    } else if (newPassword.length < 6) {
      validationErrors.newPassword = "Password must be at least 6 characters.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); 
    const isValid = validateForm();
    setIsFormValid(isValid);
    router.push('/login')
    // if (isValid) {
    //   openModal();
    //   console.log("Form submitted successfully!");
    // } else {
    //   console.log("Form has errors, please correct them.");
    // }
  };

  const inputFields = [
    {
      label: "New Password",
      type: "password",
      id: "password",
      name: "password",
      value: password,
      change: (e) => setPassword(e.target.value),
      placeholder: "Enter your password",
      labelClass: "text-[17px] text-customBlue",
      icon: image.key,
      eye: image.eyeOff,
      error: formSubmitted ? errors.password : "", // Show error only after submission
    },
    {
      label: "Confirm New Password",
      type: "password",
      id: "confirmPassword",
      name: "confirmPassword",
      value: newPassword,
      change: (e) => setNewPassword(e.target.value),
      placeholder: "Re-enter your password",
      labelClass: "text-[17px] text-customBlue",
      icon: image.key,
      eye: image.eyeOff,
      error: formSubmitted ? errors.newPassword : "", // Show error only after submission
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Create Password</title>
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
            Create New Password
          </h1>
          <h6 className="text-2xl font-normal mb-8 text-center text-[14px] leading-normal text-customBlue">
            Enter the email of your account, and we will send an email to reset
            your password.
          </h6>

          <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
            {inputFields.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name}
                value={field.value}
                placeholder={field.placeholder}
                labelClass={field.labelClass}
                onChange={field.change}
                icon={field.icon}
                eye={field.eye}
                error={field.error}
              />
            ))}

            <div className="my-5">
              {message.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src={item.icon}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block"
                  />
                  <p className="mx-2 text-[14px] text-customBlue font-normal">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="!mt-7">
              <button
                type="submit"
                className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              >
                Reset Password
              </button>
              <button className="mt-5 border-customBlue text-customBlue w-full flex justify-center py-3 px-4 border rounded-[8px] text-sm font-medium">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>

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
