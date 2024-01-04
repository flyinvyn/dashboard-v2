import React from 'react'
import avatar from '../../assets/img/avatar.png'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import Image from 'next/image'

const Transaction = () => {
    return (
        <div className="bg-white p-4 rounded-xl md:w-[590px]">
            <div className='flex items-center justify-between'>
                <p className='text-base font-semibold'>Last transaction</p>
                <div className='flex items-center gap-2'>
                    <p className='active:border-b-2 border-b-2 cursor-pointer'>Newest</p>
                    <p className='active:border-b-2 cursor-pointer'>Oldest</p>
                </div>
            </div>
            <div className='border-t-2 py-4 mt-4 flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image className='w-10 h10 rounded-full' src={avatar} alt="avatar" />
                    <div>
                        <p className='text-base font-semibold'>Bessie cooper</p>
                        <p className='text-sm font-medium text-gray-300'>02 July, 2023</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <p className='text-base font-semibold'>-$3,000</p>
                        <button className='hover:bg-gray-400 transition-all rounded-full w-8 h-8'>
                            <HiOutlineDotsVertical className='text-xl mx-auto' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-t-2 py-4 mt-4 flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image className='w-10 h10 rounded-full' src={avatar} alt="avatar" />
                    <div>
                        <p className='text-base font-semibold'>Bessie cooper</p>
                        <p className='text-sm font-medium text-gray-300'>02 July, 2023</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <p className='text-base font-semibold'>+$1,970</p>
                        <button className='hover:bg-gray-400 transition-all rounded-full w-8 h-8'>
                            <HiOutlineDotsVertical className='text-xl mx-auto' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-t-2 py-4 mt-4 flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image className='w-10 h10 rounded-full' src={avatar} alt="avatar" />
                    <div>
                        <p className='text-base font-semibold'>Bessie cooper</p>
                        <p className='text-sm font-medium text-gray-300'>02 July, 2023</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <p className='text-base font-semibold'>-$5,000</p>
                        <button className='hover:bg-gray-400 transition-all rounded-full w-8 h-8'>
                            <HiOutlineDotsVertical className='text-xl mx-auto' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction