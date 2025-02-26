"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slice";
import { setLocalStorageItem } from "@/utils/localStorage";
import { loginInitialValues, LoginSchema } from "./utils/formikConfig";
import { imageLogin } from "./utils/images";
import { inputFields } from "./constant";
import CustomInput from "./components/input";
import { Button } from "./utils/buttons";

export default function MainPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const dispath = useDispatch();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true);
      const params = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = await loginApi(params);
        console.log("-----response----", response);
        if (response.success === true) {
          setLoading(false);
          // dispath(setUser(response));
          await setLocalStorageItem("token", response.token);
          toast.success(<CustomToast content="Login Successfully" />);
          if (response?.data?.reviewStatus === "reviewed") {
            router.push("/users/dashboard");
          } else {
            setLoading(false);
            toast.success(
              <CustomToast content="User account is under review, need to account verified." />
            );
          }
          if (response?.data?.role) {
            localStorage.setItem("role", response.data.role);
            if (response.data.role === "admin") {
              router.push("/admin/dashboard");
            } else if (response.data.role === "manager") {
              if (response?.data?.reviewStatus === "reviewed") {
                router.push("/event-manager/dashboard");
              }
            } else {
            }
          }
        } else {
          setLoading(false);
          toast.error(
            <CustomToast content={response.message || "Login Failed"} />
          );
          setLoading(false);
        }
      } catch (error) {
        toast.error(<CustomToast content="Something went wrong" />);
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  const { errors, touched, handleBlur, handleChange, handleSubmit, values } =
    formik;

  const handleSignUpClick = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  const handleForgotClick = (e) => {
    e.preventDefault();
    router.push("/forgot");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Login Page</title>
      </Head>

      <div className="w-full md:w-[50%] flex flex-col items-center">
        <div className="text-left w-full">
          <Image
            src={imageLogin.logo}
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
          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            {inputFields.map((field) => (
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
            <div className="mt-[10px]">
              <div
                className="text-sm text-left font-medium text-customText cursor-pointer inline-block"
                onClick={handleForgotClick}
              >
                Forgot password?
              </div>
            </div>

            <Button
              type="submit"
              classes="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              name="Sign In"
              isSubmitting={formik.isSubmitting}
              onLoading={loading}
            />

            <div className="my-4">
              <Image
                src={imageLogin.gap}
                className="w-full h-auto"
                width={200}
                height={10}
                alt=""
              />
            </div>

            <div className="mt-6 flex justify-center grid-cols-2 gap-3">
              <div className="w-full text-center bg-transparent border border-customBg py-2 px-2 rounded-[8px]">
                <Image
                  src={imageLogin.google}
                  alt="Google"
                  className="w-[21px] inline-block h-auto align-sub"
                  width={21}
                  height={21}
                />
                <span className="mx-2 text-customBlue font-medium text-[16px] capitalize">
                  continue with google
                </span>
              </div>
            </div>
            <h6 className="text-2xl font-normal text-center mb-8 text-[15px] text-customText">
              Don't have an account?{" "}
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
      <div className="w-full md:w-[50%]">
        <Image
          src={imageLogin.image}
          alt="Car Dealership"
          className="h-full w-full !relative"
          fill
        />
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
