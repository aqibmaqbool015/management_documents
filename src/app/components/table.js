import Image from "next/image";

const TableComponent = ({
  tableBodyContent,
  name,
  date,
  file,
  last,
  showCheckbox,
}) => {
  return (
    <>
      <div className="relative overflow-x-auto mt-4 ">
        <table className="md:w-full text-sm text-left rtl:text-right ">
          <thead className="text-[16px] text-customBlue capitalize !font-medium ">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                {name}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {date}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {file}
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {last}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableBodyContent.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
                    {showCheckbox && (
                      <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        className="w-4 h-4 mx-2 text-customGradiantTo bg-white border-customGrayLine rounded focus:outline-none focus:border-none"
                      />
                    )}
                    <span className="bg-customBgYellow rounded-[8px] inline-block text-center w-[30px] h-[30px] p-1">
                      <Image
                        width={15}
                        height={15}
                        src={item.image}
                        alt={item.name}
                        className="w-[15px] h-[15px] object-contain inline-block"
                      />
                    </span>
                    <p className="text-customBlue font-normal text-[15px] capitalize mx-2">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-customBlue font-normal text-[15px] capitalize">
                    {item.date}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-customBlue font-normal text-[15px] capitalize">
                    {item.size}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="text-customBlue font-normal text-[15px] capitalize">
                    {item.modify}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
