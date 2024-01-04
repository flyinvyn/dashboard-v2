import Image from 'next/image'
import { LineChart, Line } from 'recharts';
import { FaRegArrowAltCircleDown } from "react-icons/fa";


const DataBalance = ({ balance, coin }) => {
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
    return (
        <div className='w-full md:w-32'>
            <strong>${balance}</strong>
            <div className='flex items-center gap-2'>
                <Image
                    src={coin}
                    alt='coin'
                    width={50}
                    height={50}
                    className='rounded-full' />
                <p className='text-xs'>Your total balance</p>
            </div>
            <hr />
            <div>
                <div className='flex items-center gap-1'>
                    <LineChart width={100} height={100} data={data}>
                        <Line type="monotone" dataKey="Expense" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                    <div className='flex items-center gap-1'>
                        <FaRegArrowAltCircleDown />
                        <p>6%</p>
                    </div>
                </div>
                <p className='text-xs text-neutral-300'>Alyways see your earning updates</p>
            </div>
        </div>
    )
}

export default DataBalance