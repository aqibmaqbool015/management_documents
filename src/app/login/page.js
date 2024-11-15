"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const image = {
  image: "/signup.png",
  logo: "/logo.svg",
  google: "/social.svg",
  facebook: "/social2.svg",
  apple: "/social3.svg",
  mail: "/mail.svg",
  key: "/key.svg",
  gap: "or.svg",
};

export default function LoginPage() {
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSubmitted) {
      validateForm();
    }
  }, [formValues.email, formValues.password]);

  const validateForm = () => {
    let validationErrors = {};

    if (!formValues.email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      validationErrors.email = "Email is invalid.";
    }

    if (!formValues.password) {
      validationErrors.password = "Password is required.";
    } else if (formValues.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    validateForm();

    if (isFormValid) {
      // API call for login can go here
      // const response = await LoginApi(formValues);
      // if (response) {
      //   dispatch(setUser(response));
      //   router.push("/profile");
      // }
      router.push('/')
      console.log("Form is valid, submitting...");
    } else {
      console.log("Form has errors:", errors);
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    router.push("/complete-signup");
  };

  const handleForgotClick = (e) => {
    e.preventDefault();
    router.push("/forgot");
  };

  const inputFields = [
    {
      label: "Email",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email",
      labelClass: "text-[17px] text-customBlue",
      icon: image.mail,
      error: errors.email,
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Enter your password",
      labelClass: "text-[17px] text-customBlue",
      icon: image.key,
      error: errors.email,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Login Page</title>
      </Head>

      <div className="w-full md:w-[65%] flex flex-col items-center">
        <div className="text-left w-full">
          <Image
            src={image.logo}
            alt="Car Dealership"
            className="w-[140px] h-auto"
            width={140}
            height={70}
          />
        </div>

        <div className="max-w-md w-full py-5 px-4 md:px-0">
          <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
            Login to Manage Events
          </h1>

          <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
            {inputFields.map((field) => (
              <div key={field.id}>
                <CustomInput
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formValues[field.name]}
                  labelClass={field.labelClass}
                  onChange={handleInputChange}
                  icon={field.icon}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <div className="mt-[10px]">
              <div
                className="text-sm text-left font-medium text-customText"
                onClick={handleForgotClick}
              >
                Forgot password?
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
            >
              Sign In
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

            <h6 className="text-2xl font-normal mb-8 text-[15px] text-customText">
              Don’t have an account?{" "}
              <span
                className="text-customBlue font-medium cursor-pointer"
                onClick={handleSignUpClick}
              >
                Sign Up
              </span>
            </h6>
          </form>
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <Image
          src={image.image}
          alt="Car Dealership"
          className="h-full w-full !relative"
          fill
        />
      </div>
    </div>
  );
}
