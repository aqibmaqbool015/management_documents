import Link from "next/link";

export const VehicleCard = () => {
    const cards = [
        {
            image: '/vehicle-1.png',
            title: '£900.00',
            description: 'Nissan Navara',
            distance: '2014-167,453 km',
            days: '15 days ago'
        },
        {
            image: '/vehicle-2.png',
            title: '£900.00',
            description: 'Nissan Navara',
            distance: '2014-167,453 km',
            days: '15 days ago'
        },
        {
            image: '/vehicle-3.png',
            title: '£12,000.00',
            description: 'Nissan Navara',
            distance: '2014-167,453 km',
            days: '15 days ago'
        },
        {
            image: '/vehicle-4.png',
            title: '£12,000.00',
            description: 'Mercedes X Class',
            distance: '2014-167,453 km',
            days: '15 days ago'
        },
        {
            image: '/vehicle-5.png',
            title: '£20,000.00',
            description: 'Nissan Navara',
            distance: '2014-167,453 km',
            days: '15 days ago'
        },
        {
            image: '/vehicle-3.png',
            title: '£900.00',
            description: 'Mercedes X Class',
            distance: '2014-167,453 km',
            days: '15 days ago'
        },
    ];
    const image = {
        heart: '/heart.svg',
        vehicle: '/vehicle-profile.png',
        user: '/user-profile.svg',
        thumbUp: '/up.svg',
        thumbDown: '/down.svg',
    }
    return (
        <>
            {cards.map((item, index) => (
                <div key={index} className="rounded overflow-hidden gap-2 my-3">
                    <Link href='/detail'>
                        <img className="w-full object-[initial]" src={item.image} alt="Sample image" />
                    </Link>

                    <div className="px-2 py-1">
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium  text-customOrange text-[26px]">{item.title}</h4>
                            <img className="w-[22px] h-[22px] object-[initial]" src={image.heart} alt="Sample image" />
                        </div>

                        <p className="text-customBlackLight text-[18px]">{item.description}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-customDarkGray text-[15px]">{item.distance}</p>
                            <p className="text-customDarkGray text-[14px]">{item.days}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}