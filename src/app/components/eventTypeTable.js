import Image from "next/image";
import { imageSidebar, imagesUsers } from "../utils/images";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteEventTypeApi } from "../admin/event-types/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/app/components/toast";

const EventTypeTable = ({
  tableContentCategory,
  title,
  description,
  status,
  onclickDelete,
}) => {
  const router = useRouter();
  // const [selectedEventId, setSelectedEventId] = useState(null);
  // console.log("--selectedEventId--", selectedEventId);

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

  const deleteEventData = async () => {
    if (!isDeleteModalOpen) return;
    try {
      const response = await deleteEventTypeApi(isDeleteModalOpen);
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
                {title}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {description}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {status}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableContentCategory?.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
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
                          onClick={() =>
                            router.push(`/admin/update/${item._id}`)
                          }
                        >
                          Update
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
                              Do you really want to delete this event?{item._id}
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
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ToastContainer position="top-right" /> */}
      </div>
    </>
  );
};

export default EventTypeTable;
