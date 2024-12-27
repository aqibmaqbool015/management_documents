import Image from "next/image";
import React, { useState } from "react";

const GradientDropdown = ({ options = [], images = [] }) => {
  const [selectedOption, setSelectedOption] = useState(
    options[0] || "Upload File"
  );
  const [selectedImage, setSelectedImage] = useState(images[0] || "/files.svg");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const image = {
    arrow: "/drop-arrow.svg",
  };

  const selectItem = [
    {
      image: "/files.svg",
    },
    {
      image: "/folder.svg",
    },
  ];

  return (
    <div className="relative inline-block ">
      <div
        className="px-4 py-2 min-w-[145px] text-left border border-none rounded-[25px] cursor-pointer bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent"
        onClick={toggleDropdown}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full text-left border border-[#CFCFCF] rounded-[12px] bg-white z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-2 py-2 cursor-pointer hover:bg-gray-200 text-customBlue font-medium"
              onClick={() => handleOptionClick(option)}
            >
              {/* {
                                selectItem.map((item, index) => {
                                    return (
                                        <span key={index} className='inline-block align-text-bottom mr-2 '>
                                            <Image
                                            width={15}
                                            height={15} src={item.image} alt='' className='w-[15px] h-[15px] object-contain inline-block ' />
                                        </span>
                                    );
                                })
                            } */}
              <span className="inline-block align-text-bottom mr-2 ">
                <Image
                  width={15}
                  height={15}
                  src={images}
                  alt=""
                  className="w-[15px] h-[15px] object-contain inline-block "
                />
              </span>

              {option}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
        <Image
          width={15}
          height={15}
          src={image.arrow}
          alt=""
          className="w-[12px] h-auto object-contain inline-block "
        />
      </div>
    </div>
  );
};

export default GradientDropdown;
