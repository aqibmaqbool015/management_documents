"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function NewPassword() {
  const router = useRouter();

  const image = {
    image: "/create.png",
    logo: "/logo.svg",
    key: "/key.svg",
    check: "/check.svg",
    checks: "/checks.svg",
    eyeOff: "/eye-off.svg",
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

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password cannot exceed 32 characters")
      .matches(/[A-Z]/, "Must contain an uppercase character")
      .matches(/[0-9]/, "Must contain a number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirmation password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    router.push("/login"); // Redirect to login after successful submission
  };

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

          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="space-y-4">
                <div>
                  <label
                    className="text-[17px] text-customBlue"
                    htmlFor="password"
                  >
                    New Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border rounded-md p-3 mt-1"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    className="text-[17px] text-customBlue"
                    htmlFor="confirmPassword"
                  >
                    Confirm New Password
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full border rounded-md p-3 mt-1"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-customRed text-sm mt-1"
                  />
                </div>

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
                  {/* <button
                    type="button"
                    onClick={() => router.back()}
                    className="mt-5 border-customBlue text-customBlue w-full flex justify-center py-3 px-4 border rounded-[8px] text-sm font-medium"
                  >
                    Back
                  </button> */}
                </div>
              </Form>
            )}
          </Formik>
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
