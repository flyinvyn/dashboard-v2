import Clock from "@/app/components/menu/Clock";
import Dashboard from "@/app/components/menu/Dashboard";
import Notification from "@/app/components/menu/Notification";
import Setting from "@/app/components/menu/Setting";
import Users from "@/app/components/menu/Users";

export default function renderer(param) {
    switch (param) {
        case 1:
            return <Dashboard/>
        case 2:
            return <Notification/>
        case 3:
            return <Clock/>
        case 4:
            return <Users/>
        case 5:
            return <Setting/>
        default:
            break
    }
}