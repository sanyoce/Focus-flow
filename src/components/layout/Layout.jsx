import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export function Layout(){
    return(
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="flex flex-col w-full gap-16">
                <Header/>
                <Dashboard/>
            </div>
        </div>
    )
}