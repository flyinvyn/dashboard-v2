import React from 'react'
import GaugeComponent from 'react-gauge-component';

const Analytics = () => {
    return (
        <div className="md:w-80 bg-white p-4 rounded-xl flex flex-col mt-4 md:mt-0 relative">
            <strong className="font-semibold">Analytics</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <GaugeComponent
                    arc={{
                        subArcs: [
                            {
                                limit: 20,
                                color: '#d4d4d4',
                                showTick: true
                            },
                            {
                                limit: 40,
                                color: '#f97316',
                                showTick: true
                            },
                            {
                                limit: 60,
                                color: '#EA4228',
                                showTick: true
                            },
                            {
                                limit: 100,
                                color: '#4338ca',
                                showTick: true
                            },
                        ]
                    }}
                    value={90}
                />
                <div className='flex justify-center items-center gap-1'>
                    <div className='w-2 h-2 bg-indigo-700 rounded-full'></div>
                    <p>Done</p>
                </div>
            </div>
        </div>
    )
}

export default Analytics