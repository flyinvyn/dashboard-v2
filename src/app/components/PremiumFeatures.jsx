import Image from 'next/image'
import React from 'react'
import unnamed from "../../assets/img/unnamed.png"
const PremiumFeatures = () => {
    return (
        <div className='border border-gray-300 rounded-xl p-3 mt-5'>
            <p className='flex justify-center text-base font-medium'>Go to premium</p>
            <div className='w-20 h-20 mt-2'>
                <Image src={unnamed} />
            </div>
            <div className='mt-2'>
                <p className='text-base font-semibold'>Need more features?</p>
                <p className='text-sm text-neutral-300'>Update your account to premium to get more features.</p>
            </div>
                <button className='bg-indigo-500 rounded-lg mx-auto p-3 w-full text-white text-sm mt-3'>Get now</button>
        </div>
    )
}

export default PremiumFeatures