import Image from "next/image";
import { useState } from "react";
import { Button } from "../utils/buttons";
import { imageSidebar, imagesUsers } from "../utils/images";
import { Image_base } from "@/networking/network";
import { useRouter } from "next/navigation";
import { deleteEventCategoryByIdApi } from "../event-manager/category/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/app/components/toast";
const CategoryTable = ({
  tableContentCategory,
  image,
  title,
  type,
  status,
}) => {
  const router = useRouter();
  const [shareModal, setShareModal] = useState(false);
  const openshareModal = () => setShareModal(true);
  const closeshareModal = () => setShareModal(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleModalOpen = (eventId) => {
    setIsDeleteModalOpen(eventId);
  };

  const handleModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleDropdownToggle = (eventId) => {
    setOpenDropdownId(openDropdownId === eventId ? null : eventId);
  };
  const handleEdit = (item) => {
    const encodedData = encodeURIComponent(JSON.stringify(item));
    router.push(`/event-manager/update/${item._id}?data=${encodedData}`);
  };

  const deleteEventData = async () => {
    if (!isDeleteModalOpen) return;
    try {
      const response = await deleteEventCategoryByIdApi(isDeleteModalOpen);
      console.log("---respomse---", response);

      if (response?.success) {
        setIsDeleteModalOpen(false);
        toast.success(<CustomToast content={response?.message} />);
      }
    } catch (error) {
      // toast.error(<CustomToast content="Something went wrong!" />);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto mt-4 ">
        <table className="md:w-full text-sm text-left rtl:text-right ">
          <thead className="text-[16px] text-customBlue capitalize !font-medium ">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                {image}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {title}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {type}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {status}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableContentCategory?.map((item, index) => {
              console.log('----return',item, );
              
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <span className=" inline-block text-center w-[45px] h-[45px] p-1">
                        <Image
                          width={15}
                          height={15}
                          src={
                            item?.image
                              ? `${Image_base}${item?.image}`
                              : imagesUsers.users
                          }
                          alt=""
                          className="w-full h-full rounded-full object-contain inline-block"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-customBlue font-normal text-[15px] capitalize">
                      {item.title}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-customBlue font-normal text-[15px] capitalize">
                      {item.description}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="cursor-pointer relative inline-block text-center w-[30px] h-[30px] p-1"
                      onClick={() => handleDropdownToggle(item._id)}
                    >
                      <Image
                        width={15}
                        height={15}
                        src={"/three-dots.svg"}
                        alt=""
                        className="w-[15px] h-[15px] object-contain inline-block"
                      />

                      {openDropdownId === item._id && (
                        <div className="absolute left-1 mt-0 w-32 p-1 bg-white border border-customGray rounded shadow-lg z-50">
                          <p
                            className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light text-left"
                            onClick={() => handleEdit(item)}
                          >
                            Update
                          </p>
                          <p
                            className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light text-left"
                            onClick={openshareModal}
                          >
                            {/* <span className="inline-block object-contain w-[20px] h-auto mr-2 ">
                            <Image
                              src={imagesUsers.upload}
                              alt=""
                              width={20}
                              height={20}
                              className="w-[15px] h-auto object-contain "
                            />
                          </span> */}
                            Share
                          </p>
                          <p
                            className="text-[14px] text-customBlack1 font-light text-left cursor-pointer"
                            onClick={() => handleModalOpen(item._id)}
                          >
                            Delete
                          </p>
                        </div>
                      )}
                      {isDeleteModalOpen === item._id && (
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-[400px] max-h-[90vh] overflow-y-auto">
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
                              <p className="text-[15px] text-customBlackLight text-center">
                                Do you really want to delete this event?
                                {item._id}
                              </p>
                              <div className="my-3 text-center">
                                <span
                                  onClick={handleModalClose}
                                  className="text-customBlue inline-block capitalize mx-2 bg-transparent border border-customBlue rounded-[20px] px-3 min-w-[100px] py-1 cursor-pointer"
                                >
                                  Cancel
                                </span>
                                <button
                                  onClick={deleteEventData}
                                  className="text-white capitalize mx-2 bg-customRed border border-transparent rounded-[20px] px-3 min-w-[100px] py-1"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4">
                  <span className="cursor-pointer relative inline-block text-center w-[30px] h-[30px] p-1 group">
                    <Image
                      width={15}
                      height={15}
                      src={"/three-dots.svg"}
                      alt=""
                      className="w-[15px] h-[15px] object-contain inline-block"
                    />
                    <div
                      className="absolute left-1 mt-0 w-32 p-1 bg-white border border-customGray rounded shadow-lg hidden group-hover:block
                z-50 "
                    >
                      <p
                        className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light text-left"
                        onClick={() =>
                          router.push(`/event-manager/update/${item._id}`)
                        }
                      >
                        <span className="inline-block object-contain w-[20px] h-auto mr-2 ">
                          <Image
                            src={imagesUsers.uploadImage}
                            alt=""
                            width={20}
                            height={20}
                            className="w-[15px] h-auto object-contain "
                          />
                        </span>
                        Update
                      </p>

                      <p className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light text-left">
                        <span className="inline-block object-contain w-[20px] h-auto mr-2 ">
                          <Image
                            src={imagesUsers.trash}
                            alt=""
                            width={20}
                            height={20}
                            className="w-[15px] h-auto object-contain "
                          />
                        </span>
                        Move to bin
                      </p>
                    </div>
                  </span>
                </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        {shareModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-[500px] max-h-[90vh] overflow-y-auto">
              <div className="p-4 relative">
                <h2 className="text-[19px] text-customBlue font-semibold capitalize mb-4">
                  Share Event
                </h2>
                <div className="absolute right-3 top-4">
                  <Image
                    src={imagesUsers.cross}
                    alt="Close"
                    className="w-[20px] h-auto cursor-pointer"
                    width={15}
                    height={15}
                    onClick={closeshareModal}
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative w-full md:my-0 my-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                      <Image
                        src={imagesUsers.search}
                        alt=""
                        width={15}
                        height={15}
                        className="w-[20px] h-auto object-contain inline-block "
                      />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full py-2 px-10 border border-customBorderSearch rounded-[12px] bg-transparent "
                      placeholder="Add People to the event"
                      required
                    />
                  </div>
                  <h3 className="text-[16px] text-customBlue font-semibold mb-4">
                    People with access
                  </h3>
                  <div className="flex items-start space-x-3 my-3 p-1 hover:bg-customGraySelect rounded-[5px] ">
                    <Image
                      width={40}
                      height={40}
                      src={imagesUsers.access}
                      alt="img"
                      className="w-[40px] h-[40px] rounded-full object-contain"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-[15px] text-customBlue">
                        Darrell Steward (You)
                      </p>
                      <p className="text-[14px] font-light text-customTextCard">
                        georgia.young@example.com
                      </p>
                    </div>
                    <span className="text-xs text-customDarkGray relative right-0 block text-right mt-1">
                      Owner
                    </span>
                  </div>
                  <h3 className="text-[16px] text-customBlue font-semibold mb-4">
                    General Access
                  </h3>
                  <div className="flex items-start space-x-3 my-3 p-1 hover:bg-customGraySelect rounded-[5px] ">
                    <span className="bg-customBgSpan rounded-full p-1 w-[40px] h-[40px] inline-block text-center ">
                      <Image
                        width={40}
                        height={40}
                        src={imagesUsers.lock}
                        alt="img"
                        className="w-[20px] h-[20px] inline-block"
                      />
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-[15px] text-customBlue">
                        Restricted
                      </p>
                      <p className="text-[14px] font-light text-customTextCard">
                        Only people with the access can open the link
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      classes="flex justify-center py-2 px-12 border border-transparent rounded-[25px] shadow-sm text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo !mt-2"
                      name="Done"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};

export default CategoryTable;
