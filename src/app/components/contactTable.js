import Image from "next/image";
const ContactTable = ({
  tableContactCategory,
  name,
  event,
  date,
  email,
  phone,
}) => {
  return (
    <>
      <div className="relative overflow-x-auto mt-4 ">
        <table className="md:w-full text-sm text-left rtl:text-right responsive">
          <thead className="text-[16px] text-customBlue capitalize !font-medium ">
            <tr>
              <th scope="col" className="px-3 py-3 font-medium">
                {name}
              </th>
              {/* <th scope="col" className="px-3 py-3 font-medium">
                {event}
              </th> */}
              <th scope="col" className="px-3 py-3 font-medium">
                {date}
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                {email}
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                {phone}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableContactCategory.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="min-w-[150px] px-3 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
                    <span className=" inline-block text-center w-[35px] h-[35px] p-1 text-[15px] text-customBlue">
                      <Image
                        width={15}
                        height={15}
                        src={item.image}
                        alt=""
                        className="w-full h-full object-contain inline-block mr-1"
                      />

                      {item.name}
                    </span>
                  </div>
                </td>

                <td className="min-w-[150px] px-3 py-4">
                  <p className="text-customBlue font-normal text-[15px] capitalize">
                    {item.date}
                  </p>
                </td>
                <td className="min-w-[150px] px-3 py-4">
                  <p className="text-customBlue font-normal text-[15px] capitalize">
                    {item.email}
                  </p>
                </td>
                <td className="min-w-[150px] px-3 py-4">
                  <p className="text-customBlue font-normal text-[15px] capitalize">
                    {item.phone}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactTable;
