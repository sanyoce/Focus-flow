import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export function Layout(){
    return(
        <div className="flex ">
            <div>
                <Sidebar/>
            </div>
            <div className="bg-gray-50 w-full">
                <div className="flex flex-col gap-16 px-10 py-10">
                    <Header/>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}