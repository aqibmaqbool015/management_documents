function AdminHader({ title, divider, subTitle }) {
    const images = {
        bell: 'header3.svg',
        user: '/user-client.svg',
    }
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
                    <li className=" text-customBlackC1 inline-block text-[17px] capitalize font-medium cursor-pointer mx-2" >
                        {subTitle}
                    </li>
                </div>
                <div className='flex items-center'>
                    <img src={images.bell} alt='' className='w-[18px] h-[18px] object-contain inline-block align-text-bottom mx-2 ' />
                    <img src={images.user} alt='' className='w-[40px] h-[40px] object-contain inline-block align-text-bottom mx-2 ' />
                </div>
            </div>
        </>
    );
}

export default AdminHader;