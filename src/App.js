
import './App.css';
import  {useState} from 'react';

function App() {


const[toggle, setToggle] = useState(false)

const handleToggle= ()=> {
setToggle(!toggle)

}
  return (

    
<div>


<h1>Visibility Toggle</h1>
<button onClick= {handleToggle}>{toggle?' Hide details':' show details'}   </button>


{toggle ? <div>details are shown. Click to hide the details</div>:null}


    </div>

  );
  
  
}
  export default App;

  




























    
