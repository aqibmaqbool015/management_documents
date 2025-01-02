import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { notificationsBar } from "../constant";
import { imagesUsers } from "../utils/images";

function AdminHader({
  title,
  divider,
  subTitle,
  divider1,
  subTitle1,
  classLabel,
}) {

  const [userRole, setUserRole] = useState(false);
  const [isopenDropdown, setIsOpenDropdown] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsOpenDropdown(!isopenDropdown);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const router = useRouter();
  const handleClickAccount = () => router.push("/login");
  return (
    <>
      <div className="border-b border-b-custom py-4 md:px-4 px-2 md:flex justify-between items-center">
        <div className="flex">
          <label className="text-customText md:text-[17px] text-[14px] font-normal capitalize block mx-2">
            {title}
          </label>
          <span className="text-customText mx-2">{divider}</span>
          <label className={classLabel}>{subTitle}</label>
          <label className="text-customText text-[17px] font-normal block mx-2">
            {divider1}
          </label>
          <li className=" text-customBlackC1 inline-block md:text-[17px] text-[14px] font-medium cursor-pointer mx-2">
            {subTitle1}
          </li>
        </div>
        <div className="flex items-center">
          <Image
            src={imagesUsers.bell}
            height={10}
            width={18}
            alt=""
            className="w-[18px] h-[18px] object-contain inline-block align-text-bottom mx-2 cursor-pointer "
            onClick={toggleDropdown}
          />

          <span className="">
            {isDropdownOpen && (
              <div
                className="absolute md:right-24 right-0 mt-6 z-50 md:w-[400px] p-1 px-2 bg-white border border-customGray rounded shadow-lg
                h-[300px] overflow-auto "
              >
                <div className="md:mx-2 my-3">
                  <div className="flex justify-between items-center">
                    <div className="capitalize font-medium text-customBlue ">
                      Notifications{" "}
                      <span className="inline-block text-center rounded-full text-[15px] font-normal w-[25px] h-[25px] text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo">
                        2
                      </span>
                    </div>
                    <div className="">
                      <div className="inline-block cursor-pointer text-[11px] bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent mr-1">
                        Mark all as read
                      </div>
                      <Image
                        height={10}
                        width={18}
                        src={imagesUsers.dots}
                        alt=""
                        className="w-[12px] h-[12px] object-contain inline-block align-middle cursor-pointer "
                      />
                    </div>
                  </div>
                  <div className="px-2 py-1 my-2 ">
                    {notificationsBar.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full border-b border-b-customBorderBottom py-2 "
                        >
                          <div className="flex items-center">
                            <Image
                              src={item.image}
                              alt=""
                              className="w-[30px] h-[30px] rounded-full object-contain mr-2"
                              width={30}
                              height={30}
                            />
                            <p className="text-customBlue font-normal text-[14px] ">
                              <span className="font-medium capitalize">
                                {item.name}
                              </span>{" "}
                              {item.invite}{" "}
                              <span className="font-medium capitalize">
                                {item.event}
                              </span>{" "}
                              on{" "}
                              <span className="font-medium capitalize">
                                {item.date}
                              </span>
                            </p>
                          </div>
                          {userRole && (
                            <div className="my-2">
                              <button className="font-normal rounded-[8px] text-center py-1 px-3 min-w-[100px] mx-1 text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo">
                                Accept
                              </button>
                              <button className="font-normal rounded-[8px] text-center py-1 px-3 min-w-[100px] mx-1 text-customButtontext border border-customBorderBottom  ">
                                Deny
                              </button>
                            </div>
                          )}

                          <p className="text-customColorNav text-[14px] font-normal">
                            {item.time}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </span>
          <Image
            onClick={handleClick}
            src={imagesUsers.user}
            alt=""
            className="cursor-pointer w-[40px] h-[40px] object-contain inline-block align-text-bottom mx-2 "
            height={10}
            width={18}
          />
          {isopenDropdown && (
            <div className="absolute right-5  mt-36 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li className="px-4 text-customBlue font-medium py-2 hover:bg-gray-100 cursor-pointer">
                  <span className="inline-block mr-2">
                    <Image
                      src={imagesUsers.profile}
                      alt=""
                      className="w-[20px] h-[20px] object-contain inline-block "
                      height={10}
                      width={10}
                    />
                  </span>
                  User Profile
                </li>
                <li
                  onClick={handleClickAccount}
                  className="px-4 text-customBlue font-medium py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <span className="inline-block mr-2">
                    <Image
                      height={10}
                      width={18}
                      src={imagesUsers.logout}
                      alt=""
                      className="w-[20px] h-[20px] object-contain inline-block "
                    />
                  </span>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminHader;
