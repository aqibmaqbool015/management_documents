"use client";
import React from 'react';
import TableComponent from '../components/table';
import { documentsFile, tableBodyTrash } from '../constant';
import AdminHader from '../components/adminHeader';

const DocumentsPage = () => {

    const images = {
        bell: 'header3.svg',
        user: '/user-client.svg',
        upload: '/upload.svg',
        dots: '/dots.svg',
    }


    return (
        <div className="min-h-screen md:flex">
            <div className="md:flex-1 ">
                <AdminHader title='Dashboards' divider='/' subTitle='Documents' />
                <div className='md:p-6 p-3'>
                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="bg-white p-4 border border-custom rounded-[12px] ">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-xl text-customBlue font-semibold mb-4">Documents Files</h3>
                                <span className='bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer'>
                                    <img src={images.dots} alt='' className='w-[15px] h-[15px] object-contain inline-block align-sub ' />
                                </span>
                            </div>
                            <h6 className="text-md text-customBlue font-semibold mb-4">Sheets</h6>
                            <div className='md:p-6 p-3'>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 mb-8">
                                    {
                                        documentsFile.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index} className='border border-custom rounded-[12px]'>
                                                        <img src={item.image} alt className='w-full h-auto rounded-tl-[12px] rounded-tr-[12px] inline-block ' />
                                                        <div className='border-t border-t-custom py-3 px-2'>
                                                            <div className='flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <img src={item.icon} alt className='w-[17px] h-auto inline-block ' />
                                                                    <p className='text-customTextColor text-[13px] font-normal mx-1'>
                                                                        {item.title}
                                                                    </p>
                                                                </div>
                                                                <img src={item.dot} alt className='w-[20px] h-[13px] inline-block ' />
                                                            </div>
                                                            <p className='text-customSeen text-[12px] font-medium mt-1'>
                                                                {item.seen}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentsPage;
