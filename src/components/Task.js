
import {FaTimes} from "react-icons/fa"

const Task = ({task,onDelete}) => {
  return (
    <div className="bg-light mb-2 px-2 pt-3 w-50 lh-1 ">
        <h3 className="fs-4 ">{task.text}
        <FaTimes style={{cursor:'pointer'}} className="float-end text-danger mt-3 " onClick={()=>onDelete(task.id)} />
        </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Task
