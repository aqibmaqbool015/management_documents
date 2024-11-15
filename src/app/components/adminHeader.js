import { useRouter } from "next/navigation";
import { useState } from "react";

function AdminHader({ title, divider, subTitle, divider1, subTitle1, classLabel }) {
    const images = {
        bell: '/header3.svg',
        user: '/user-client.svg',
        profile: '/profile.svg',
        logout: '/logout.svg',
    }

    const [isopenDropdown, setIsOpenDropdown] = useState();

    const handleClick = () => {
        setIsOpenDropdown(!isopenDropdown);
    }
    const router = useRouter();
    const handleClickAccount = () => router.push('/login');
    return (
        <>
            <div className='border-b border-b-custom py-4 px-4 flex justify-between items-center'>
                <div className='flex'>
                    <label className='text-customText text-[17px] font-normal capitalize block mx-2'>
                        {title}
                    </label>
                    <span className='text-customText mx-2'>
                        {divider}
                    </span>
                    <label className={classLabel}>
                        {subTitle}
                    </label>
                    <label className='text-customText text-[17px] font-normal capitalize block mx-2'>
                        {divider1}
                    </label>
                    <li className=" text-customBlackC1 inline-block text-[17px] capitalize font-medium cursor-pointer mx-2" >
                        {subTitle1}
                    </li>

                </div>
                <div className='flex items-center'>
                    <img src={images.bell} alt='' className='w-[18px] h-[18px] object-contain inline-block align-text-bottom mx-2 ' />
                    <img
                        onClick={handleClick}
                        src={images.user} alt='' className='cursor-pointer w-[40px] h-[40px] object-contain inline-block align-text-bottom mx-2 ' />
                    {
                        isopenDropdown && (
                            <div className="absolute right-5  mt-36 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                <ul className="py-2">
                                    <li
                                        className="px-4 text-customBlue font-medium py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <span className="inline-block mr-2">
                                            <img src={images.profile} alt="" className="w-[20px] h-[20px] object-contain inline-block " />
                                        </span>
                                        User Profile
                                    </li>
                                    <li
                                        onClick={handleClickAccount}
                                        className="px-4 text-customBlue font-medium py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <span className="inline-block mr-2">
                                            <img src={images.logout} alt="" className="w-[20px] h-[20px] object-contain inline-block " />
                                        </span>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default AdminHader;