import React ,{ useEffect, useState } from 'react';
import Routine from './components/Routine';
import RoutineList from './components/RoutineList';
import { collection, deleteDoc, onSnapshot, query,doc, updateDoc } from 'firebase/firestore';
import { db } from './config/firebase';
import './App.css';
function App() {
  const [routines,setRoutines]  = useState([]);
  useEffect(()=>{
    const que = query(collection(db,"routine"));
    const unsub = onSnapshot(que,(querySnapshot)=>{
      let routineArray = [];
      querySnapshot.forEach((doc)=>{
        routineArray.push({...doc.data(),id:doc.id});
      });
      setRoutines(routineArray);
    });
    return()=>unsub();
  },[]);

  // handle 
  const handleEdit= async (routine, title)=>{
    await updateDoc(doc(db,"routine",routine.id),{title:title});
  }

  const toggleComplete = async(routine)=>{
    await updateDoc(doc(db,"routine",routine.id),{completed:!routine.completed});
  }
const handleDelete = async(id)=>{
  await deleteDoc(doc(db,"routine",id));
}

  return (
    <div className="App">
   {/* <h1> mahadev </h1> */}
   <div className="title"><h1>Routine Track</h1></div>
   <div><Routine/></div>
   <div className="routine-container">
    {
      routines.map((item)=>(
        <RoutineList key={item.id} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit}/>
      ))
    }
   </div>

    </div>

  );
}

export default App;
