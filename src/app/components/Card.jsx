import React from 'react'

const Card = () => {
	return (
		<div className='md:w-[400px] h-[270px] bg-indigo-500 rounded-xl p-5 mt-4 md:mt-0'>
			<div className='flex justify-between'>
				<strong className='text-white text-xl'>S.</strong>
				<strong className='text-white text-2xl'>VISA</strong>
			</div>
			<div className='mt-36'>
				<p className='text-white font-medium'>****9838</p>
			</div>
			<div className='flex justify-between'>
				<p className='text-white text-base'>Jhon Demon</p>
				<p className='text-white text-base font-medium'>08/12</p>
			</div>
		</div>
	)
}

export default Card