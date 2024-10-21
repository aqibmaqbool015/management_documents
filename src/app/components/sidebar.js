"use client";
import React, { useState } from 'react';
import GradientDropdown from './dropdown';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);
    const [isCorporateOpen, setIsCorporateOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const handleClick = () => {
        router.push('/dashboard')
    }
    const handleClickUploaded = () => {
        router.push('/uploaded')
    }
    const handleClickShared = () => {
        router.push('/shared')
    }
    const handleClickTrash = () => {
        router.push('/trash')
    }
    const handleClickDocuments = () => {
        router.push('/documents')
    }
    const handleClickAccount = () => {
        router.push('/login')
    }
    const image = {
        logo: '/event-logo.svg',
        arrow: '/arrow-right.svg',
        project: '/projects.svg',
        overview: '/overview.svg',
        corporate: '/corporate.svg',
        account: '/account.svg',
        files: '/files.svg',
    }
    return (
        <div className="md:w-64 bg-white p-6 border-r border-r-custom h-full">
            <div className='text-center'>
                <img src={image.logo} alt='' className='w-[120px] h-auto object-contain inline-block cursor-pointer ' />
            </div>
            <div className='bg-customGraySelect rounded-[12px] text-center my-4 py-1'>
                <GradientDropdown options={["Upload Files", "Upload Folder", "Upload Image"]}
                images={image.files} />
            </div>

            <ul>
                <label className='text-customText text-[17px] font-normal capitalize mb-2 block'>
                    dashboards
                </label>
                <li onClick={handleClick} className="mb-3 font-semibold text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-3 rounded-[12px]  ">
                    <img src={image.overview} alt='' className='w-[20px] h-[20px] object-contain inline-block align-sub mr-3 ' />
                    Overview
                </li>
                <label className='text-customText text-[17px] font-normal capitalize mb-2 block'>
                    pages
                </label>
                <li className="mb-3 text-customBlackC1 text-[17px] font-medium cursor-pointer" onClick={() => setIsProjectsOpen(!isProjectsOpen)}>
                    <span className={`mr-2 inline-block transform transition-transform duration-300 ${isProjectsOpen ? 'rotate-90' : 'rotate-0'}`}>
                        <img src={image.arrow} alt='' className='w-[13px] h-[13px] object-contain inline-block align-baseline ' />
                    </span>
                    <img src={image.project} alt='' className='w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2 ' />

                    Projects
                </li>
                {isProjectsOpen && (
                    <ul className="pl-4 mb-3">
                        <li className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
                            onClick={handleClickUploaded}>Uploaded</li>
                        <li className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
                            onClick={handleClickShared}>Shared</li>
                        <li className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
                            onClick={handleClickDocuments} >Documents</li>
                        <li className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
                            onClick={handleClickTrash}>Trash</li>
                    </ul>
                )}

                <li className="mb-3 text-customBlackC1 text-[17px] font-medium cursor-pointer" onClick={() => setIsCorporateOpen(!isCorporateOpen)}>
                    <span className={`mr-2 inline-block transform transition-transform duration-300 ${isCorporateOpen ? 'rotate-90' : 'rotate-0'}`}>
                        <img src={image.arrow} alt='' className='w-[13px] h-[13px] object-contain inline-block align-baseline ' />
                    </span>
                    <img src={image.corporate} alt='' className='w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2 ' />

                    Corporate
                </li>
                {isCorporateOpen && (
                    <ul className="pl-4 mb-3">
                        <li className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer">Uploaded</li>
                    </ul>
                )}
                <li className="mb-3 text-customBlackC1 text-[17px] font-medium cursor-pointer" onClick={() => setIsAccountOpen(!isAccountOpen)}>
                    <span className={`mr-2 inline-block transform transition-transform duration-300 ${isAccountOpen ? 'rotate-90' : 'rotate-0'}`}>
                        <img src={image.arrow} alt='' className='w-[13px] h-[13px] object-contain inline-block align-baseline ' />
                    </span>
                    <img src={image.account} alt='' className='w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2 ' />

                    Account
                </li>
                {isAccountOpen && (
                    <ul className="pl-4 mb-3">
                        <li className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
                            onClick={handleClickAccount}>Logout</li>
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
