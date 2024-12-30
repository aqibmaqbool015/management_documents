"use client";
import Head from "next/head";
import CustomInput from "../components/input";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import CustomToast from "../components/toast";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();

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
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Enter your password",
      labelClass: "text-[17px] text-customBlue",
      icon: image.key,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Login Page</title>
      </Head>

      <div className="w-full md:w-[50%] flex flex-col items-center">
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

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              toast.success(<CustomToast content="Login Successfully" />);
              router.push("/");
              setSubmitting(false);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form className="space-y-4 mt-8">
                {inputFields.map((field) => (
                  <div key={field.id}>
                    <CustomInput
                      label={field.label}
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      labelClass={field.labelClass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      icon={field.icon}
                    />
                    {errors[field.name] && touched[field.name] && (
                      <p className="text-red-500 text-sm">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div className="mt-[10px]">
                  <div
                    className="text-sm text-left font-medium text-customText cursor-pointer"
                    onClick={handleForgotClick}
                  >
                    Forgot password?
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                >
                  {isSubmitting ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50 mr-2"></span>
                  ) : null}
                  {isSubmitting ? "Loading..." : "Sign In"}
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
                    <span className="mx-2 text-customBlue font-medium text-[16px] capitalize">
                      continue with google
                    </span>
                  </div>
                </div>
                <h6 className="text-2xl font-normal text-center mb-8 text-[15px] text-customText">
                  Don’t have an account?{" "}
                  <span
                    className="text-customBlue font-medium cursor-pointer"
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </span>
                </h6>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <Image
          src={image.image}
          alt="Car Dealership"
          className="h-full w-full !relative"
          fill
        />
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
