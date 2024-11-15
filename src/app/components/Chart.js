import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    LinearScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title, LinearScale);

const ChartComponent = () => {
    const data = {
        labels: ['Total events', 'Shared by me', 'Shares to me', 'Invited People'],
        datasets: [
            {
                data: [38.6, 22.5, 30.8, 8.1],
                backgroundColor: [
                    '#464647',
                    '#480048',
                    '#EB4335',
                    '#C04848',
                ],
                hoverOffset: 4,
                borderRadius: 6,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: '65%',
    };

    return (
        <div className="md:flex justify-between items-center md:mt-14">
            <div style={{ width: '150px', height: '150px' }}>
                <Doughnut data={data} options={options} />
            </div>

            <ul className="space-y-2">
                <li className="flex items-center justify-between text-[12px] text-customBlue font-medium ">
                    <div className='flex items-center'>
                        <span className="block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#464647' }}></span>
                        Total Events
                    </div>
                    <span className="ml-7">38.6%</span>
                </li>
                <li className="flex items-center justify-between text-[12px] text-customBlue font-medium ">
                    <div className='flex items-center'>
                        <span className="block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#480048' }}></span>
                        Shared by me
                    </div>
                    <span className="ml-7">22.5%</span>
                </li>
                <li className="flex items-center justify-between text-[12px] text-customBlue font-medium ">
                    <div className='flex items-center'>
                        <span className="block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#EB4335' }}></span>
                        Shared to me
                    </div>
                    <span className="ml-7">30.8%</span>
                </li>
                <li className="flex items-center justify-between text-[12px] text-customBlue font-medium ">
                    <div className='flex items-center'>
                        <span className="block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#C04848' }}></span>
                        Invited People
                    </div>
                    <span className="ml-7">8.1%</span>
                </li>
            </ul>
        </div>
    );
};

export default ChartComponent;
