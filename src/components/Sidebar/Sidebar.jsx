export function Sidebar(){
    return(
        <div className="flex flex-col justify-between gap-130">
            <div className="flex flex-col gap-12">
                <div>
                    <h1>Focus-Flow</h1>
                </div>
                <div>
                    <ul>
                        <li>Dashboard</li>
                        <li>Tasks</li>
                        <li>Sessions</li>
                        <li>Statistics</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-12">
                <div>
                    <img src="#" alt="" />
                    <h2>Stay focused achieve more</h2>
                    <p>One session at a time</p>
                </div>
                <div>
                    <button>Ligth-Switcher</button>
                </div>
            </div> 

        </div>
    )
    
}