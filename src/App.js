import { async } from '@firebase/util';
import { collection, deleteDoc, onSnapshot, query, QuerySnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import Routine from './components/Routine';
import RoutineList from './components/RoutineList';
function App() {
  const [routines,setRoutines]  = useState([]);
  useEffect(()=>{
    const que = query(collection(db,"routine"));
    const unsub = onSnapshot(que,(QuerySnapshot)=>{
      let routineArray = [];
      QuerySnapshot.forEach((doc)=>{
        routineArray.push({...doc.data(),id:doc.id});
      });
      setRoutines(routineArray);
    })
    return()=>unsub();
  })

  // handle 
  const handleEdit= async (routine, title)=>{
    await updateRoutine(doc(db,"routine",routine.id),{
      title:title
    });
  }

  const toggleComplete = async(routine)=>{
    await updateDoc(doc(db,"routine",routine.id),{complete:!routine.complete});
  }
const handleDelete = async(id)=>{
  await deleteDoc(doc(db,"routine",id));
}

  return (
    <div className="App">
   {/* <h1> mahadev </h1> */}
   <div className="title"><h1>Routine Track</h1></div>
   <div><Routine/></div>
   <div className="routine_container">
    {
      routines.map((item)=>{
        <RoutineList key={routine.id} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit}/>
      })
    }
   </div>

    </div>

  );
}

export default App;
