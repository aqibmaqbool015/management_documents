"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { legalName } from "../constant";
import Image from "next/image";

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

export default function CompleteSignup() {
  const router = useRouter();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formValues.firstName) {
      validationErrors.firstName = "Name is required";
    }
    if (!formValues.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formValues.phone) {
      validationErrors.phone = "Phone is required";
    } else if (/0-9/.test(formValues.phone)) {
      validationErrors.phone = "Phone is invalid";
    }
    if (!formValues.password) {
      validationErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (!formValues.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (formValues.confirmPassword.length < 6) {
      validationErrors.confirmPassword =
        "Confirm Password must be at least 6 characters long";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push("/login");
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors.");
    }
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
          className="h-full w-full !relative"
          fill
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

          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
            {legalName.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name]}
                labelClass={field.labelClass}
                onChange={handleInputChange}
                icon={field.icon}
                error={errors[field.name]}
              />
            ))}

            <div className="!mt-7">
              <button
                type="submit"
                className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              >
                Sign Up
              </button>
              <div className="my-4">
                <Image
                  src={image.gap}
                  className="w-full h-auto"
                  width={200}
                  height={10}
                  alt=""
                />
              </div>
              <div className="mt-6 flex justify-center grid-cols-2 gap-3">
                <div className="w-full text-center bg-transparent border border-customBg py-2 px-2 rounded-[8px]">
                  <Image
                    src={image.google}
                    alt="Google"
                    className="w-[21px] inline-block h-auto align-sub"
                    width={21}
                    height={21}
                  />
                  <span className="mx-2 text-customBlue font-medium text-[16px] capitalize ">
                    google
                  </span>
                </div>
                <div className="w-full text-center bg-transparent border border-customBg py-2 px-2 rounded-[8px]">
                  <Image
                    src={image.facebook}
                    alt="Facebook"
                    className="w-[21px] inline-block h-auto align-sub "
                    width={21}
                    height={21}
                  />
                  <span className="mx-2 text-customBlue font-medium text-[16px] capitalize ">
                    facebook
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-center grid-cols-1 gap-3">
                <div className="w-full text-center bg-transparent border border-customBg py-2 px-2 rounded-[8px]">
                  <Image
                    src={image.apple}
                    alt="Apple"
                    className="w-[21px] inline-block h-auto align-sub "
                    width={21}
                    height={21}
                  />
                  <span className="mx-2 text-customBlue font-medium text-[16px] capitalize ">
                    apple
                  </span>
                </div>
              </div>
              <h6 className="text-2xl font-normal mb-8 text-[15px] text-customText my-3">
                Already have an account? {""}
                <span
                  className="text-customBlue font-medium cursor-pointer"
                  onClick={handleSignUpClick}
                >
                  Login
                </span>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
