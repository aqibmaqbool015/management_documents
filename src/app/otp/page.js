"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OtpPage() {
  const router = useRouter();

  const handleNewClick = (e) => {
    e.preventDefault(); 
    router.push("/new-password");
  };
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const image = {
    image: "/auth-otp.png",
    logo: "/logo.svg",
  };
  const placeholders = ["1", "2", "3", "4", "5", "6"];
  const [time, setTime] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };
  return (
    <div className=" min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>OTP Page</title>
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
        <div className="max-w-md w-full py-8 md:py-16 px-4 md:px-0">
          <h1
            className="text-2xl font-semibold mb-2 text-center text-[30px]
                    text-customBlue"
          >
            OTP Verification
          </h1>
          <h6
            className="text-2xl font-normal mb-8 text-center text-[14px] leading-normal
                    text-customBlue"
          >
            Please enter the 6 digit code sent to alibaba@gmail.com{" "}
          </h6>

          <form className="space-y-4" onSubmit={handleNewClick}>
            <div className="flex flex-col items-center space-y-4">
              <label htmlFor="otp" className="text-lg font-medium">
                OTP Code
              </label>
              <div className="flex space-x-4">
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="number"
                      maxLength="1"
                      placeholder={placeholders[index]}
                      className="w-10 h-10 text-center text-lg border border-customBlue rounded-full focus:outline-none focus:border-black appearance-none
                                            placeholder-customBlue"
                      onInput={(e) => handleInput(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[25px] shadow-sm text-sm font-medium text-white 
                        bg-customBlue !mt-7"
            >
              Send
            </button>
            <div className="flex justify-between items-center w-full">
              <span className="text-customOrange">Resend code to</span>
              <span className="text-customOrange">{formatTime(time)}</span>
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
          className="h-screen w-full"
        />
      </div>
    </div>
  );
}
