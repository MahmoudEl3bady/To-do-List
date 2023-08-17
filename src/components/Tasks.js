
import Task from "./Task"
const Tasks=({tasks , onDelete})=>{

  
    return(

        <>

            {/* <h2 className="text-center p-3 ">Tasks </h2> */}
            <div className="d-flex justify-content-between flex-column align-items-center">
            {tasks.map((task)=> (
                // <h3 className="" key={task.id}>{task.text}</h3>
                <Task onDelete={onDelete} key={task.id} task={task}/>
            ))}
            </div>
        </>
    )
}

export default Tasks