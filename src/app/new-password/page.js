"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { images } from "../utils/images";
import {
  initialValuesPassword,
  validationSchemaPassword,
} from "../utils/formikConfig";
import { Button } from "../utils/buttons";

export default function NewPassword() {
  const router = useRouter();

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    router.push("/login");
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

          <Formik
            initialValues={initialValuesPassword}
            validationSchema={validationSchemaPassword}
            onSubmit={handleSubmit}
          >
            {() => (
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
                    className="text-customRed text-sm mt-1"
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

                <div className="!mt-7">
                  <Button
                    type="submit"
                    class="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                    name="Reset Password"
                  />
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
          src={images.image}
          alt="Car Dealership"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
