import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import DataBalance from './DataBalance';
import coin from "../../../assets/img/coin.jpg"

const data = [
	{
		name: 'Oct',
		Expense: 50,
		Income: 60
	},
	{
		name: 'Nov',
		Expense: 25,
		Income: 30
	},
	{
		name: 'Dec',
		Expense: 23,
		Income: 30
	},
	{
		name: 'Jan',
		Expense: 20,
		Income: 25
	},
	{
		name: 'Feb',
		Expense: 10,
		Income: 20
	},
]

const BalanceStatistic = () => {
	return (
		<div className="md:h-[270px] md:w-[500px] bg-white p-4 rounded-xl flex flex-col flex-1">
			<div className='flex justify-between items-center'>
				<strong className="text-gray-700 font-medium">Balance statistics</strong>
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-black hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
							Filter
							<RiArrowDropDownLine
								className="-mr-1 ml-2 h-5 w-5 text-black"
								aria-hidden="true"
							/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute z-10 right-0 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
							<div className="px-1 py-1 ">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											Add Filter
										</button>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
			<div className='flex flex-col md:flex-row'>
				<DataBalance balance={"564"} coin={coin} data={data} />
				<div className="mt-3 w-full flex-1 text-xs">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							width={500}
							height={200}
							data={data}
							margin={{
								top: 20,
								right: 10,
								left: -10,
								bottom: 0
							}}
						>
							<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="Income" fill="#4f46e5" />
							<Bar dataKey="Expense" fill="#c7d2fe" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	)
}

export default BalanceStatistic