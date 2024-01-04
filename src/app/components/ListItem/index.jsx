import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
import Items from './Item';

const ListItem = () => {
	return (
		<div className="md:w-[370px] bg-white p-4 pt-3 rounded-xl flex-1 md:rounded-l-xl">
			<div>
				<p className='text-base font-semibold'>List of item to buy</p>
				<div className='flex items-center gap-4 mt-3'>
					<div>
						<p className='text-2xl font-semibold'>02:00</p>
						<p className='text-gray-300 text-sm font-medium'>Sat,August 12</p>
					</div>
					<div>
						<RiArrowDropRightLine className='text-4xl text-gray-300 font-light' />
					</div>
					<div>
						<p className='text-2xl font-semibold'>02:00</p>
						<p className='text-gray-300 text-sm font-medium'>Sat,August 12</p>
					</div>
				</div>
			</div>

			<div className='flex justify-between text-sm mt-5'>
				<p className='text-gray-300 font-medium'>0/3 <span className='font-bold text-black'>Shopping list</span></p>
				<button className='font-semibold'>+ Add an item</button>
			</div>
			<div className='grid grid-cols-2 gap-4 mt-5'>
				<Items item={"Macbook"} />
				<Items item={"Bycicle"} />
				<Items item={"Motorcycle"} />
				<Items item={"Iphone 14 pro max"} />
			</div>
		</div>
	)
}

export default ListItem