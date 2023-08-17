// import Button from './components/Button'
import { useState ,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./components/Header"
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
// import Task from "./components/Task";
function App() {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([])
    
  useEffect(()=>{
   
    const getTasks = async()=>{
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
    }
      getTasks();
  },[]);
  
  // Fetch Tasks 

  const  fetchTasks = async ()=>{
    const respon =await fetch('http://localhost:5000/tasks');
    const data = await respon.json();
    // console.log(data);
    return data;
    
  }

  // Adding Task


    const addTask= async (task)=>{
        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id ,...task }
        // setTasks([ newTask,...tasks ])
      const res = await fetch('http://localhost:5000/tasks',{
        method:'POST',
        headers:{
          'Content-type': 'application/json',
        },
        body:
          JSON.stringify(task),
        
      });

      const data = await res.json();
    

      setTasks([ data, ...tasks]);
    }

    // Deleting Task from UI and the server

    const deleteTask = async (id)=>{

      await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'DELETE'
      });


      setTasks(tasks.filter((task)=>task.id!==id));
    }
  return (
    <div className="App">
      <Header onToggle={()=>setShowAddTask(!showAddTask)} changeBtn={showAddTask}/>
      { showAddTask&& <AddTask onAdd={addTask}/>}
      {
        
        tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} className=""/>:<p className=" fw-bold text-danger fs-2 text-center  ">No Tasks to Show</p>}
    </div>
  );
}

export default App;
