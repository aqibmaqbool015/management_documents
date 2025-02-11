import Image from "next/image";
import { imagesUsers } from "../utils/images";

const EventTypeTable = ({
  tableContentCategory,
  title,
  description,
  status,
}) => {
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
                      <p className="border-b border-b-customBg py-1 text-[14px] text-customBlack1 font-light text-left">
                        <span className="inline-block object-contain w-[20px] h-auto mr-2 ">
                          <Image
                            src={imagesUsers.upload}
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
                        Delete
                      </p>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventTypeTable;
