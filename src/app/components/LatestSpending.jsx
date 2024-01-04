import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import shop from "../../assets/img/shop.png"
import hospital from "../../assets/img/hospital.jpg"
import ticket from "../../assets/img/ticket.png"

const LatestSpending = () => {
    return (
        <div className='border border-gray-300 rounded-xl p-3 mt-5'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Latest Spending</p>
                <button className='hover:bg-gray-400 transition-all rounded-full w-8 h-8'>
                    <HiOutlineDotsVertical className='text-xl mx-auto' />
                </button>
            </div>
            <div className='flex item-center mt-3 border-b-2 pb-5'>
                <div className='w-14 h-14 rounded-full'>
                    <Image src={shop} alt='shop' width={100} height={100} />
                </div>
                <div className='mx-auto mt-1'>
                    <p className='font-semibold text-base'>Online Store</p>
                    <p className='font-medium text-xs text-gray-300'>May 30,2023 at 08:00 pm</p>
                </div>
            </div>
            <div className='flex item-center mt-3 border-b-2 pb-5'>
                <div className='w-14 h-14 rounded-full'>
                    <Image src={hospital} alt='shop' width={100} height={100} />
                </div>
                <div className='mx-auto mt-1'>
                    <p className='font-semibold text-base'>Pay the hospital</p>
                    <p className='font-medium text-xs text-gray-300'>May 28,2023 at 10:00 pm</p>
                </div>
            </div>
            <div className='flex item-center mt-3 pb-5'>
                <div className='w-14 h-14 rounded-full'>
                    <Image src={ticket} alt='shop' width={100} height={100} />
                </div>
                <div className='mx-auto mt-1'>
                    <p className='font-semibold text-base'>Tickets</p>
                    <p className='font-medium text-xs text-gray-300'>May 10,2023 at 12:00 pm</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 text-blue-400 cursor-pointer'>
                <div><Link href={"/"}>View all</Link></div>
                <div><FaArrowRight /></div>
            </div>
        </div>
    )
}

export default LatestSpending