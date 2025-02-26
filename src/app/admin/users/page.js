"use client";
import AdminHader from "@/app/components/adminHeader";
import { Button, CancelButton } from "@/app/utils/buttons";
import { imageSidebar, imagesUsers } from "@/app/utils/images";
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
  // const [requestUser, setRequestUser] = useState();
  const handleModalOpen = () => setAcceptedModal(true);
  const handleModalClose = () => setAcceptedModal(false);
  const handleModalOpenReject = () => setRejectedModal(true);
  const handleModalCloseReject = () => setRejectedModal(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [requestUser, setRequestUser] = useState([]);
  const [acceptedModal, setAcceptedModal] = useState(false);
  const [rejectedModal, setRejectedModal] = useState(false);

  useEffect(() => {
    fetchGetAllUsers();
    console.log("Current Page:", currentPage);
  }, [currentPage]);

  const fetchGetAllUsers = async () => {
    try {
      const response = await getAllUsersApi({
        page: currentPage,
        limit: rowsPerPage,
      });

      if (response?.data) {
        setRequestUser(response.data);
        setTotalPages(response?.pagination?.totalPages || 1);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleShowMore = (direction) => {
    setCurrentPage((prevPage) => {
      let newPage = prevPage;
      if (direction === "next" && prevPage < totalPages) {
        newPage = prevPage + 1;
      } else if (direction === "prev" && prevPage > 1) {
        newPage = prevPage - 1;
      }
      return newPage;
    });
  };

  const handleSubmitRequest = async (userId, action) => {
    try {
      const response = await reviewUserApi(userId, action);

      console.log(`${action} request response:`, response);

      if (response?.success) {
        setAcceptedModal(false);
        setRejectedModal(false);
        toast.success(
          <CustomToast content={`User ${action}ed successfully!`} />
        );
        // setRequestUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
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

              <div></div>

              {requestUser && requestUser?.length === 0 ? (
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
                        onClick={handleModalOpen}
                      />

                      <CancelButton
                        className="bg-customGraySelect cursor-pointer inline-block mx-2 px-3 py-1.5 rounded-[6px] text-center my-1 min-w-[90px]"
                        name="Decline"
                        onClick={handleModalOpenReject}
                      />
                    </div>
                    {acceptedModal && (
                      <div className="fixed inset-0 bg-gray-900 bg-opacity-[0.01] flex justify-center items-center">
                        <div className="bg-white rounded-lg w-11/12 sm:w-1/2 md:w-[400px] max-h-[90vh] overflow-y-auto">
                          <div className="p-4 relative">
                            <div className="absolute right-3 top-4">
                              <Image
                                src={imageSidebar.cross}
                                alt="Close"
                                className="w-[20px] h-auto cursor-pointer"
                                onClick={handleModalClose}
                                width={15}
                                height={15}
                              />
                            </div>
                          </div>
                          <div className="my-4 px-4">
                            <p className="text-[15px] text-customBlackLight text-center ">
                              Do you really want to reviewed this user request.
                            </p>
                            <div className="my-3 text-center">
                              <span
                                onClick={handleModalClose}
                                className="text-customBlue inline-block capitalize mx-2 bg-transparent border border-customBlue rounded-[20px] px-3 min-w-[100px] py-1
                          cursor-pointer "
                              >
                                cancel
                              </span>
                              <button
                                onClick={() =>
                                  handleSubmitRequest(item?._id, "reviewed")
                                }
                                className="text-white capitalize mx-2 bg-gradient-to-r from-customGradiantFrom to-customGradiantTo border border-transparent rounded-[20px] px-3 min-w-[100px] py-1 "
                              >
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {rejectedModal && (
                      <div className="fixed inset-0 bg-gray-900 bg-opacity-[0.01] flex justify-center items-center">
                        <div className="bg-white rounded-lg w-11/12 sm:w-1/2 md:w-[400px] max-h-[90vh] overflow-y-auto">
                          <div className="p-4 relative">
                            <div className="absolute right-3 top-4">
                              <Image
                                src={imageSidebar.cross}
                                alt="Close"
                                className="w-[20px] h-auto cursor-pointer"
                                onClick={handleModalCloseReject}
                                width={15}
                                height={15}
                              />
                            </div>
                          </div>
                          <div className="my-4 px-4">
                            <p className="text-[15px] text-customBlackLight text-center ">
                              Do you really want to reject this user request.
                            </p>
                            <div className="my-3 text-center">
                              <span
                                onClick={handleModalClose}
                                className="text-customBlue inline-block capitalize mx-2 bg-transparent border border-customBlue rounded-[20px] px-3 min-w-[100px] py-1
                          cursor-pointer "
                              >
                                cancel
                              </span>
                              <button
                                onClick={() =>
                                  handleSubmitRequest(item?._id, "rejected")
                                }
                                className="text-white capitalize mx-2 bg-customRed border border-transparent rounded-[20px] px-3 min-w-[100px] py-1 "
                              >
                                Rejected
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
              {requestUser?.length > 0 && (
                <div className="flex justify-end w-full mt-2">
                  <p className="text-customBlack inline-block mr-5">
                    Rows per page: {rowsPerPage}
                  </p>
                  <p className="text-customBlack inline-block mr-5">
                    {currentPage} - {totalPages}
                  </p>
                  <span className="inline-block">
                    <span
                      className={`inline-block text-center w-[27px] h-[27px] rounded-full mx-1 ${
                        currentPage === 1
                          ? "bg-customGrayLine cursor-not-allowed"
                          : "bg-customGreen"
                      }`}
                      onClick={() =>
                        currentPage !== 1 && handleShowMore("prev")
                      }
                    >
                      <Image
                        src={imagesUsers.leftArrow}
                        alt=""
                        width={20}
                        height={20}
                        className={`w-[12px] h-[12px] object-contain inline-block mx-1 ${
                          currentPage === 1
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                      />
                    </span>
                    <span
                      className={`inline-block text-center w-[27px] h-[27px] rounded-full mx-1 ${
                        currentPage === totalPages
                          ? "bg-customGrayLine cursor-not-allowed"
                          : "bg-customGreen"
                      }`}
                      onClick={() =>
                        currentPage !== totalPages && handleShowMore("next")
                      }
                    >
                      <Image
                        src={imagesUsers.RightArrow}
                        alt=""
                        width={20}
                        height={20}
                        className={`w-[12px] h-[12px] object-contain inline-block mx-1 ${
                          currentPage === totalPages
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                      />
                    </span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Requests;
