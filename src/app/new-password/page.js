"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { images } from "../utils/images";
import { Button } from "../utils/buttons";
import { inputFieldsPassword } from "../constant";
import CustomInput from "../components/input";
import { useFormik } from "formik";
import {
  initialValuesPassword,
  validationSchemaPassword,
} from "../utils/formikConfig";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import CustomToast from "../components/toast";
import "react-toastify/dist/ReactToastify.css";
import { resetPasswordApi } from "./api";

export default function NewPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const queryEmail = new URLSearchParams(window.location.search).get("email");
    if (queryEmail) setEmail(queryEmail);
  }, []);

  const formik = useFormik({
    initialValues: initialValuesPassword,
    validationSchema: validationSchemaPassword,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true);
      const params = {
        email: email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      try {
        const response = await resetPasswordApi(params);
        console.log(" API Response:", response);
        if (response.success) {
          toast.success(
            <CustomToast content="Password updated Successfully" />
          );
          router.push("/login");
        } else {
          toast.error(
            <CustomToast
              content={response.message || "Password updating failed"}
            />
          );
        }
      } catch (error) {
        console.error("Error during Password updating:", error);
      } finally {
        setLoading(false);
      }
    },
  });
  const { errors, touched, handleBlur, handleChange, handleSubmit, values } =
    formik;

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
            src={images.logo}
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

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {inputFieldsPassword.map((field) => (
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

            <div className="!mt-7">
              <Button
                type="submit"
                classes="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                name="Reset Password"
                onLoading={loading}
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" />
      <div className="w-full md:w-[50%]">
        <Image
          width={100}
          height={100}
          src={images.image}
          alt="Car Dealership"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
