import Clock from "@/app/components/Menu/Clock";
import Dashboard from "@/app/components/Menu/Dashboard";
import Notification from "@/app/components/Menu/Notification";
import Setting from "@/app/components/Menu/Setting";
import Users from "@/app/components/Menu/Users";

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