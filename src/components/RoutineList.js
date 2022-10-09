import React ,{useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RoutineList({routine,toggleComplete,handleDelete,handleEdit,}){
    const [freshTitle, setFreshTitle] = useState(routine.title);
    const handleChange = (e) =>{
            e.preventDefault();
            if(routine.complete===true){
                setFreshTitle(routine.title);
            }else{
                routine.title = "";
                setFreshTitle(e.target.value);
            }
    }
  return (
   <div className="routine">
        <input 
         className="list" 
        style={{textDecoration:routine.completed && "line-through"}}
        type="text"
        value ={routine.title==="" ? freshTitle : routine.title}
        onChange={handleChange}
       />
        <div>
            <button className="button-complete"
            onClick={()=>toggleComplete(routine)}>
                <CheckCircleIcon id ='icon'/>

            </button>
            <button className="button-edit"
             onClick={()=>handleEdit(routine,freshTitle)}>

            <EditIcon id ='icon'/>
             </button>

            <button className ="button-remove"
             onClick={()=>handleDelete(routine.id)}>

            <DeleteIcon id ='icon'/>
             </button>

        </div>
   </div>
  )
}

// export default RoutineList