"use client";
import React, { useState } from 'react';
import TableComponent from '../components/table';
import { imageUser } from '../constant';
import AdminHader from '../components/adminHeader';

const Shared = () => {

    const images = {
        bell: 'header3.svg',
        user: '/user-client.svg',
        upload: '/upload.svg',
        dots: '/dots.svg',
    }

    const tableBodyContent = [
        {
            image: '/image.svg',
            name: 'Website Design.png',
            date: 'Jun,24 2024',
            size: '2.5 Mb',
            modify: <>
                {
                    imageUser.map((item) => {
                        return (
                            <>
                                {item.image}
                            </>
                        )
                    })
                }
            </>,
        },
        {
            image: '/image.svg',
            name: 'Website Design.png',
            date: 'Jun,24 2024',
            size: '2.5 Mb',
            modify: <>
                {
                    imageUser.map((item) => {
                        return (
                            <>
                                {item.image}
                            </>
                        )
                    })
                }
            </>,
        },
        {
            image: '/image.svg',
            name: 'Website Design.png',
            date: 'Jun,24 2024',
            size: '2.5 Mb',
            modify: <>
                {
                    imageUser.map((item) => {
                        return (
                            <>
                                {item.image}
                            </>
                        )
                    })
                }
            </>,
        },
        {
            image: '/image.svg',
            name: 'Website Design.png',
            date: 'Jun,24 2024',
            size: '2.5 Mb',
            modify: <>
                {
                    imageUser.map((item) => {
                        return (
                            <>
                                {item.image}
                            </>
                        )
                    })
                }
            </>,
        },
    ]
    return (
        <div className="min-h-screen md:flex">
            <div className="md:flex-1 ">
            <AdminHader title='Dashboards' divider='/' subTitle='Shared' />

                <div className='md:p-6 p-3'>
                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="bg-white p-4 border border-custom rounded-[12px] ">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-xl text-customBlue font-semibold mb-4">Shared Files</h3>
                                <span className='bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer'>
                                    <img src={images.dots} alt='' className='w-[15px] h-[15px] object-contain inline-block align-sub ' />
                                </span>
                            </div>
                            <TableComponent
                                name='Name'
                                date='Date'
                                file='File Size'
                                last='Shared Users'
                                tableBodyContent={tableBodyContent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shared;