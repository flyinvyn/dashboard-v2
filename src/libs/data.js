import { RiHome6Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";

export const menuItems = [
    { id: 1, label: "Dashboard", icon: <RiHome6Line /> },
    { id: 2, label: "Notification", icon: <FaRegBell /> },
    { id: 3, label: "Clock", icon: <LuClock9 /> },
    { id: 4, label: "Users", icon: <HiOutlineUsers /> },
    { id: 5, label: "Setting", icon: <IoSettingsOutline /> },
];