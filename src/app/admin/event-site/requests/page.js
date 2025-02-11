"use client";
import AdminHader from "@/app/components/adminHeader";
import { Button, CancelButton } from "@/app/utils/buttons";
import { imagesUsers } from "@/app/utils/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllUsersApi, reviewUserApi } from "./api";
import { formatDistance } from "date-fns";
import { Image_base } from "@/networking/network";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/app/components/toast";

const Requests = () => {
  const router = useRouter();
  const [requestUser, setRequestUser] = useState();

  useEffect(() => {
    fetchGetAllUsers();
  }, []);

  const fetchGetAllUsers = async () => {
    const response = await getAllUsersApi();
    setRequestUser(response?.data);
  };

  const handleSubmitRequest = async (userId, action) => {
    try {
      const response = await reviewUserApi(userId, action);
      console.log(`${action} request response:`, response);

      if (response?.success) {
        toast.success(
          <CustomToast content={`User ${action}ed successfully!`} />
        );
        // setRequestUser((prevUsers) =>
        //   prevUsers.filter((user) => user.id !== userId)
        // );
      } else {
        toast.error(`Failed to ${action} request.`);
      }
    } catch (error) {
      console.error(`${action} request failed:`, error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen md:flex">
      <div className="md:flex-1 ">
        <AdminHader
          title="Dashboards"
          divider="/"
          subTitle="Event Requests"
          classLabel="text-customBlack md:text-[17px] text-[14px] font-medium capitalize block mx-2"
        />
        <div className="md:p-6 p-3">
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-white p-4 border border-custom rounded-[12px] ">
              <div className="md:flex justify-between items-center ">
                <p className="text-customBlue md:text-[18px] text-[15px] font-medium capitalize mb-3">
                  Event Requests
                </p>
              </div>
              {requestUser && requestUser.length === 0 ? (
                <p className="text-center my-5 flex justify-center animate-spin rounded-full h-12 w-12 border-t-2 border-customBlue border-opacity-50 mr-2"></p>
              ) : (
                requestUser?.map((item, index) => (
                  <div
                    key={index}
                    className="md:flex justify-between items-center mt-5 cursor-pointer hover:bg-customBgLight p-1 border-b border-b-customBorderBottom pb-3 "
                  >
                    <div className="relative md:w-[450px] md:my-0 my-2">
                      <div className="flex items-center">
                        <span className="inline-block w-[40px] h-[40px] mr-2">
                          <Image
                            width={40}
                            height={40}
                            src={
                              item?.profilePicture
                                ? `${Image_base}${item?.profilePicture}`
                                : imagesUsers.users
                            }
                            alt={item?.name || "User profile"}
                            className="w-full h-full rounded-full inline-block"
                          />
                        </span>
                        <div>
                          <p className="text-customBlackC1 text-[14px] font-medium">
                            {item?.name}
                          </p>
                          <p className="text-customText text-[12px] font-normal">
                            {item?.role}
                          </p>
                          <p className="text-customText text-[12px] font-normal">
                            Has Requested to Create <b>Wedding Event.</b>
                          </p>
                          <p className="text-customText text-[12px] font-normal">
                            {item?.createdAt
                              ? `${formatDistance(
                                  new Date(item.createdAt),
                                  new Date(),
                                  {
                                    addSuffix: true,
                                  }
                                )}`.replace("about ", "")
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="my-2">
                      <Button
                        type="button"
                        classes="inline-block py-1.5 px-3 mx-2 my-1 min-w-[90px] border border-transparent rounded-[8px] shadow-sm text-sm font-normal text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                        name="Accept"
                        onClick={() =>
                          handleSubmitRequest(item?._id, "reviewed")
                        }
                      />

                      <CancelButton
                        className="bg-customGraySelect cursor-pointer inline-block mx-2 px-3 py-1.5 rounded-[6px] text-center my-1 min-w-[90px]"
                        name="Decline"
                        onClick={() =>
                          handleSubmitRequest(item?._id, "reviewing")
                        }
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default Requests;
