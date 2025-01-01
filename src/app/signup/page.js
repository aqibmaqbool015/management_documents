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

const Signup = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValuesSignup,
    validationSchema: validationSchemaSignup,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      router.push("/login");
      setSubmitting(false);
    },
  });

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

            <Button
              type="submit"
              class="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
              name=" Sign Up"
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
    </div>
  );
};

export default Signup;
