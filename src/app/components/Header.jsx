"use client"

import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineSearch } from 'react-icons/hi'

const Header = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="sm:flex justify-between items-center">
            <div className="mt-8">
                <h1 className="text-base md:text-xl lg:text-2xl font-bold">{name}</h1>
                <h3>View and controll your finance here!</h3>
            </div>
            <div>
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-white px-2 py-2 text-sm font-medium hover:bg-white/70 transition-all"
                >
                    <HiOutlineSearch fontSize={20} className='text-black' />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Search here!
									</Dialog.Title>
									<div className="relative">
										<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
										<input
											type="text"
											placeholder="Search..."
											className="text-sm focus:outline-none active:outline-none border border-gray-300 w-full h-10 pl-11 pr-4 rounded"
										/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
        </div>
    )
}

export default Header