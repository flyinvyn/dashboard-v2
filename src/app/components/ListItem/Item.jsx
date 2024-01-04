import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

const Items = ({ item }) => {
    return (
            <div className='flex items-center justify-between w-full bg-gray-100 rounded-md p-2 h-10'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className='w-4 h-4' />
                    <p className='text-sm font-semibold'>{item}</p>
                </div>
                <div>
                    <button className='hover:bg-gray-400 transition-all rounded-full w-8 h-8'>
                        <HiOutlineDotsVertical className='text-xl mx-auto' />
                    </button>
                </div>
            </div>
    )
}

export default Items