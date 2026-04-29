import { Sessions } from "../sessions/Sessions";
import { TaskItem } from "../tasks/TaskItem";
import { Timer } from "../timer/Timer";

export function Dashboard(){
    return(
        <div className="flex justify-around">
            <TaskItem/>
            <Timer/>
            <Sessions/>
        </div>
    )
}