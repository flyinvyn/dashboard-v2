"use client"

import { menuItems } from "@/libs/data";
import renderer from "@/libs/rendere";
import Image from "next/image";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import avatar from "../../../assets/img/avatar.png"

const linkClass =
    'p-3 hover:bg-indigo-700 hover:no-underline hover:text-white active:bg-indigo-600 rounded-full transition-all text-xl'

const Sidebar = () => {
    const [location, setLocation] = useState(1)    

    return (
        <div className="flex">
            <div className="w-24 pt-8 pb-4 flex justify-between flex-col bg-white h-screen fixed">
                <div className="mx-auto relative">
                    <div className="text-3xl font-bold absolute right-1">S.</div>
                    <div className="text-xl p-3 absolute top-16 bg-orange-200 rounded-full">
                        <PiChats />
                    </div>
                    <div className="flex flex-col items-start mt-40 bg-neutral-100 rounded-full">
                        {menuItems.map(menu => {
                            return (
                                <div key={menu.id} className="text-lg">
                                    <button className={linkClass} onClick={() => setLocation(menu.id)}>
                                        {menu.icon}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mx-auto text-lg p-3 cursor-pointer">
                    <Image
                    src={avatar}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full" />
                    <MdLogout className="mx-auto mt-3"/>
                </div>
            </div>
            <div className="pl-28 w-full">
                {renderer(location)}
            </div>
        </div>
    );
};

export default Sidebar;