import Image from "next/image";
import { useState } from "react";

const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+92", name: "Pakistan" },
  { code: "+61", name: "Australia" },
];

export default function CountryCodeDropdown() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (country, e) => {
    e.preventDefault();
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const image = {
    earth: "/earth.svg",
  };

  return (
    <div className="relative inline-block w-full">
      <button
        type="button" // Make sure this button is of type "button" to prevent form submission
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="mt-1 block w-full px-10 py-3 text-left shadow-sm placeholder-customDarkGray focus:outline-none 
                      focus:ring-customGradiantFrom focus:border-customGradiantFrom border border-[#CFCFCF] rounded-[8px]"
      >
        <span className="text-customDarkGray">
          <Image
            width={20}
            height={20}
            src={image.earth}
            alt="earth icon"
            className="w-[20px] h-[20px] inline-block object-contain absolute left-3 top-5"
          />
          {selectedCountry.name} ({selectedCountry.code})
        </span>
      </button>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {countryCodes.map((country) => (
            <li
              key={country.code}
              onClick={(e) => handleSelect(country, e)} // Pass event to handleSelect
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {country.name} ({country.code})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
