"use client";
import AdminHader from "@/app/components/adminHeader";
import ChartComponent from "@/app/components/Chart";
import { cards, recentCards } from "@/app/constant";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { imagesUsers } from "@/app/utils/images";

const Dashboard = () => {
  const [file, setFile] = useState();
  const [filePreview, setFilePreview] = useState();
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);

  const openCommentModal = () => setCommentModalOpen(true);
  const closeCommentModal = () => setCommentModalOpen(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  const router = useRouter();
  const clickHandleData = (index) => {
    if (index === 0) {
      router.push(`/event-manager/events/birthday`);
    } else if (index === 1) {
      router.push(`/event-manager/events/weddings`);
    } else if (index === 2) {
      router.push(`/event-manager/events/birthday`);
    } else if (index === 3) {
      router.push(`/event-manager/events/birthday`);
    }
  };
  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Overview"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {cards.map((item, index) => {
              return (
                <>
                  <div key={index} className={item.class}>
                    <div className="text-sm text-customBlue mb-3">
                      {item.title}
                    </div>
                    <div className="text-2xl text-customBlue font-semibold">
                      {item.count}
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="grid md:grid-cols-12 gap-4 mb-2">
            <div className="lg:col-span-7 col-span-12">
              <div className="border-2 border-dashed border-customBg rounded-lg min-h-[250px] md:h-[300px] h-[350px] mb-8 block items-center justify-center relative ">
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .gif, .pdf, .doc, .docx, .xls, .xlsx, .txt, .csv, .zip, .rar, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.ms-excel, application/pdf, application/zip, image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                {file ? (
                  <>
                    {file.type.startsWith("image/") ? (
                      <Image
                        fill
                        src={filePreview}
                        alt="Uploaded"
                        className="h-full w-full rounded-[8px] !relative"
                      />
                    ) : (
                      <div className="text-center relative top-[35%]">
                        <p className="text-customBlue font-semibold md:text-[20px]">
                          {file.name}
                        </p>
                        <p className="text-customGray text-[16px]">
                          File uploaded: {file.type}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-center relative top-[35%]">
                      <Image
                        src={imagesUsers.upload}
                        width={40}
                        height={40}
                        alt=""
                        className="w-[40px] h-[40px] object-contain inline-block align-sub mr-3 "
                      />
                      <p className="text-customBlue font-semibold md:text-[20px]">
                        Drop files here or click to upload
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12">
              <div className="bg-white p-4 border border-custom rounded-[12px] md:h-[300px]">
                <h3 className="text-xl text-customBlue font-semibold mb-4">
                  Traffic by Location
                </h3>
                <ChartComponent />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-customBlue font-semibold mb-4">
                  Recent Events
                </h3>
                <span className="bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer">
                  <Image
                    src={imagesUsers.dots}
                    width={15}
                    height={15}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block align-sub "
                  />
                </span>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 mb-2 mt-5">
                {recentCards.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="bg-customCardBg shadow-custom rounded-[8px] pb-2 cursor-pointer relative"
                      >
                        <Image
                          onClick={() => clickHandleData(index)}
                          src={item.picture}
                          width={200}
                          height={200}
                          alt
                          className="w-full md:h-[130px] rounded-tl-[8px] rounded-tr-[8px] "
                        />
                        <div className="px-1 py-2 flex justify-between items-start ">
                          <p className="text-customBlack1 text-[12px] font-medium ">
                            {item.title}
                          </p>
                          <span className="relative group">
                            <Image
                              src={item.icon}
                              alt=""
                              className="w-[15px] h-[15px] object-contain "
                              width={18}
                              height={18}
                            />
                            <div
                              className="absolute right-1 mt-0 w-32 p-1 bg-white border border-customGray rounded shadow-lg hidden group-hover:block
                z-50 "
                            >
                              <p className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light">
                                View Event
                              </p>
                              <p className=" text-[14px] py-1 bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent font-light">
                                Edit Event
                              </p>
                            </div>
                          </span>
                        </div>
                        <p className="text-customGray2 text-[12px] font-medium py-1 px-1">
                          {item.date}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCommentModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-1/2 max-h-[90vh] overflow-y-auto">
            <div className="p-4 relative">
              <h2 className="text-[19px] text-customBlue font-semibold capitalize mb-4">
                Write a Comment
              </h2>
              <div className="absolute right-3 top-4">
                <Image
                  src={imagsimagesUserss.cross}
                  alt="Close"
                  className="w-[20px] h-auto cursor-pointer"
                  width={15}
                  height={15}
                  onClick={closeCommentModal}
                />
              </div>
              <form className="space-y-4">
                <label
                  htmlFor="message"
                  className="text-[16px] font-medium text-customDarkGray"
                >
                  Comment
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 shadow-sm placeholder-customDarkGray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                                 border border-[#CFCFCF] rounded-[25px]"
                  placeholder="Write a comment"
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="flex justify-center py-2.5 px-12 border border-transparent rounded-[25px] shadow-sm text-sm font-medium text-white bg-customOrange !mt-2"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
