 import { useState } from "react"
const AddTask = ({onAdd}) => {

    const[text,setText]=useState('');
    const[date,setDate]=useState('');
    const[Reminder,setReminder]=useState(false);

const onsubmit=(e)=>{
    e.preventDefault();
    if(!text){
        alert('No task added ');
        return;
    }
    onAdd({text,date,Reminder});
    setText('');
    setDate('');
    setReminder(false);

}

  return (
    <form  className="d-flex flex-column align-items-center" onSubmit={onsubmit}>
     <div className="row mb-3 ">
        <label className="form-label" htmlFor="inputTask"> Task</label>
        <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
     </div>
     <div className="row mb-3 ">
        <label className="form-label" htmlFor="inputTask">Date</label>
        
        <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Add DAte and time" value={date} onChange={(e)=>setDate(e.target.value)} ></input>
        </div>

     </div>

     <div className="">
        <div className="form-check d-felx me-5 mt-4">
            <label className="form-check-label me-5" htmlFor="rem">Set Reminder</label>
            <input className="form-check-input" type="checkbox" id="rem" value={Reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>
        
     </div>


         <button type="submit" className="btn btn-primary my-4 me-5 ">Save Task</button>
               
    </form>
  )
}

export default AddTask
