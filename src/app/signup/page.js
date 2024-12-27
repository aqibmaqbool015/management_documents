"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, socials } from "../constant";
import Link from "next/link";
import CountryCodeDropdown from "../components/countryCode";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const image = {
    image: "/signup.png",
    logo: "/logo.svg",
    mail: "/mail.svg",
    key: "/key.svg",
    earth: "/earth.svg",
    phone: "/phone.svg",
  };

  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let validationErrors = {};
    if (!number) {
      validationErrors.number = "Phone is required.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormValid(true);
      router.push("/complete-signup");
      console.log("Form submitted successfully!");
    } else {
      setIsFormValid(false);
      console.log("Form has some errors.");
    }
  };

  const inputFields = [
    {
      type: "number",
      id: "tel",
      name: "tel",
      placeholder: "Phone number",
      labelClass: "text-[17px] text-customBlue",
      icon: image.phone,
      value: number,
      change: (e) => setNumber(e.target.value),
      error: errors.number,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Signup Page</title>
      </Head>

      <div className="w-full md:w-[50%] flex flex-col items-center">
        <div className="text-left w-full">
          <Image
            width={10}
            height={10}
            src={image.logo}
            alt="Car Dealership"
            className="w-[140px] h-auto"
          />
        </div>

        <div className="max-w-md w-full py-5 px-4 md:px-0">
          <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
            Sign Up
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <CountryCodeDropdown />
            {inputFields.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                labelClass={field.labelClass}
                icon={field.icon}
                value={field.value}
                onChange={field.change}
                error={
                  field.error && isFormValid === false ? field.error : null
                }
              />
            ))}

            <div className="!mt-7">
              <p className="text-2xl font-normal mb-5 text-[14px] leading-normal text-customBlue">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
                <b>Privacy Policy</b>
              </p>
              <button
                type="submit"
                className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              >
                Sign up
              </button>
            </div>

            <h6 className="text-2xl font-normal mb-8 text-center text-[15px] text-customText">
              Already have an account?{" "}
              <span
                className="text-customGradiantFrom font-medium cursor-pointer"
                onClick={handleSignUpClick}
              >
                Login
              </span>
            </h6>
          </form>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {socials.map((item, index) => (
              <div
                key={index}
                className="text-center border border-customBg py-2 px-2 rounded-[8px]"
              >
                <Link href="#">
                  <div className="flex items-center justify-center">
                    <Image
                      width={10}
                      height={10}
                      src={item.image}
                      alt=""
                      className="w-[21px] inline-block h-auto"
                    />
                    <p className="mx-3 text-customBlue text-[16px] font-medium capitalize">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <Image
          width={10}
          height={10}
          src={image.image}
          alt="Car Dealership"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
