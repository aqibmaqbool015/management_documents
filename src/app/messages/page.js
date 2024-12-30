"use client";
import { useRef, useState } from "react";
import AdminHader from "@/app/components/adminHeader";
import Image from "next/image";

const images = {
  user1: "/user1.svg",
  user2: "/user2.svg",
  user3: "/user3.svg",
  images: "/images.svg",
  back: "/back.png",
};

function Messages() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSendMessage = () => {
    console.log({ message, uploadedImage });
    setMessage("");
    setUploadedImage(null);
  };
  const handleUserClick = () => {
    setIsChatOpen(true);
  };

  const handleBackToUsers = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <AdminHader
        title="Dashboards"
        divider="/"
        subTitle="Messages"
        classLabel="text-customText md:text-[17px] text-[14px] font-normal capitalize block mx-2"
      />
      <div className="min-h-screen md:flex">
        <div
          className={`md:w-1/4 p-2 border-r border-r-customLightBorder overflow-y-auto md:h-[600px] bg-transparent cursor-pointer ${
            isChatOpen ? "hidden md:block" : "block"
          }`}
        >
          <div className="space-y-6">
            <div
              className="flex items-start space-x-3 my-3 p-1 hover:bg-customGraySelect rounded-[5px] "
              onClick={handleUserClick}
            >
              <Image
                width={40}
                height={40}
                src={images.user1}
                alt="img"
                className="w-[40px] h-[40px] rounded-full object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold text-customBlue">John Doe</p>
                <p className="text-sm text-customDarkGray">okay</p>
              </div>
              <span className="text-xs text-customDarkGray relative right-0 block text-right mt-1">
                12 hours
              </span>
            </div>
          </div>
        </div>
        <div
          className={`md:w-3/4 flex flex-col overflow-y-auto h-[600px] ${
            isChatOpen ? "w-full" : "hidden md:flex"
          }`}
        >
          <div className="bg-white p-4 border-b border-b-customLightBorder flex items-center">
            {isChatOpen && (
              <div
                onClick={handleBackToUsers}
                className="mr-3 text-customBlue text-sm md:hidden"
              >
                <Image
                  src={images.back}
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain inline-block w-[15px] h-auto "
                />
              </div>
            )}
            <Image
              width={40}
              height={40}
              src={images.user2}
              alt="img"
              className="w-[40px] h-[40px] rounded-full object-contain"
            />
            <h1 className="font-bold text-lg text-customBlue mx-3">John Doe</h1>
          </div>
          <div className="flex-1 md:p-6 space-y-4 overflow-y-auto">
            <div className="text-center">
              <p className="text-sm font-medium text-customDarkGray">Today</p>
            </div>
            <div className="flex">
              <Image
                width={40}
                height={40}
                src={images.user3}
                alt=""
                className="rounded-full w-[40px] h-[40px] mx-3 object-contain"
              />
              <div className="min-w-[180px] p-4 bg-customDotBg text-customBlack1 rounded-lg ml-3">
                <p>okayyyyy</p>
                <span className="text-xs block text-right mt-1 text-customBlack1">
                  9 hours
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="min-w-[180px] p-4 text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo rounded-lg ml-3">
                <p>wait...</p>
                <span className="block text-right mt-1 text-white">
                  9 hours
                </span>
              </div>
              <Image
                width={40}
                height={40}
                src={images.user2}
                alt=""
                className="rounded-full w-[40px] h-[40px] mx-3 object-contain"
              />
            </div>
          </div>
          <div className="bg-white md:p-4 p-2 border-t-customLightBorder flex items-center">
            <div className="relative w-full flex items-center bg-transparent border-customLightBorder border md:p-2 p-2 rounded-[25px]">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              />

              <Image
                src={images.images}
                alt="Upload"
                width={30}
                height={30}
                className="md:w-[30px] w-[20px] h-auto object-contain mr-2 cursor-pointer"
                onClick={handleImageClick}
              />

              {uploadedImage && (
                <div className="w-[40px] h-[40px] mr-2">
                  <img
                    src={uploadedImage}
                    alt="Preview"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              )}

              <input
                type="text"
                className="flex-1 bg-transparent outline-none placeholder:text-customSmallGray border-none"
                placeholder="Write a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo min-w-[80px] p-2 rounded-[20px] mx-2"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;