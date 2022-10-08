import React ,{useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircleIcon';
import EditIcon from '@mui/icons-material/EdditIcon';
import DeleteIcon from '@mui/icons-material/DeleteIcon';

const RoutineLIst = () => {
    const [freshTitle, setFreshTitle] = useState(routine.title);
    const handleChange = (e) =>{
            e.preventDefault();
            if(routine.complete==true){
                setFreshTitle(routine.title);
            }else{
                routine.title = "";
                setFreshTitle(e.target.value);
            }
    }
  return (
   <div className="routine">
        <input type="text" className="list" value ={routine.title==""?freshTitle:routine.title}
        onChange={handleChange} />
        <div>
            <button className="button-complete"
            onClick={()=>toggleComplete(routine)}></button>
                <CheckCircleIcon id ='icon'/>
            <button className="button-edit"
             onClick={()=>handleEdit(routine,freshTitle)}></button>
            <EditIcon id ='icon'/>

            <button className ="button-remove"
             onClick={()=>handleDelete(routine.id)}></button>
            <DeleteIcon id ='icon'/>

        </div>
   </div>
  )
}

export default RoutineLIst