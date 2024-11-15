"use client";
import AdminHader from '@/app/components/adminHeader';
import ChartComponent from '@/app/components/Chart';
import TableComponent from '@/app/components/table';
import { cards, tableBodyContent } from '@/app/constant';
import React, { useState } from 'react';

const Dashboard = () => {

    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    setFilePreview(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    };

    const images = {
        bell: 'header3.svg',
        user: '/user-client.svg',
        upload: '/upload.svg',
        dots: '/dots.svg',
    }
    return (
        <div className="min-h-screen md:flex">
            <div className="md:flex-1 ">
                <AdminHader title='Dashboards' divider='/' subTitle='Overview' 
                classLabel='text-customBlack text-[17px] font-medium capitalize block mx-2' />
                <div className='md:p-6 p-3'>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {
                            cards.map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className={item.class}>
                                            <div className="text-sm text-customBlue mb-3">{item.title}</div>
                                            <div className="text-2xl text-customBlue font-semibold">{item.count}</div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="grid md:grid-cols-12 gap-4 mb-2">
                        <div className="lg:col-span-7 col-span-12">
                            <div className="border-2 border-dashed border-customBg rounded-lg min-h-[250px] md:h-[300px] h-[350px] mb-8 block items-center justify-center relative ">
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .gif, .pdf, .doc, .docx, .xls, .xlsx, .txt, .csv, .zip, .rar, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.ms-excel, application/pdf, application/zip, image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                />
                                {file ? (
                                    <>
                                        {file.type.startsWith('image/') ? (
                                            <img src={filePreview} alt="Uploaded" className="h-full w-full rounded-[8px]" />
                                        ) : (
                                            <div className="text-center relative top-[35%]">
                                                <p className="text-customBlue font-semibold md:text-[20px]">{file.name}</p>
                                                <p className="text-customGray text-[16px]">File uploaded: {file.type}</p>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <div className="text-center relative top-[35%]">
                                            <img src={images.upload} alt="" className="w-[40px] h-[40px] object-contain inline-block align-sub mr-3 " />
                                            <p className="text-customBlue font-semibold md:text-[20px]">Drop files here or click to upload</p>
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                        <div className="lg:col-span-5 col-span-12">
                            <div className="bg-white p-4 border border-custom rounded-[12px] md:h-[300px]">
                                <h3 className="text-xl text-customBlue font-semibold mb-4">Traffic by Location</h3>
                                <ChartComponent />
                            </div>

                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="bg-white p-4 border border-custom rounded-[12px] ">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-xl text-customBlue font-semibold mb-4">Recent Files</h3>
                                <span className='bg-customDotBg w-[30px] h-[30px] rounded-[10px] text-center inline-block cursor-pointer'>
                                    <img src={images.dots} alt='' className='w-[15px] h-[15px] object-contain inline-block align-sub ' />
                                </span>
                            </div>
                            <TableComponent
                                name='Name'
                                date='Date'
                                file='File Size'
                                last='Last Modified'
                                tableBodyContent={tableBodyContent}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
