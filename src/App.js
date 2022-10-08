import './App.css';
import Routine from './components/Routine';
import RoutineList from './components/RoutineList';
function App() {
  return (
    <div className="App">
   {/* <h1> mahadev </h1> */}
   <div className="title"><h1>Routine Track</h1></div>
   <div><Routine/></div>
   <div><RoutineList/></div>
    </div>

  );
}

export default App;
