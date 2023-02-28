
import './App.css';
import { useEffect, useState } from 'react'; 

function App() {

  const [ sovet, setSovet ] = useState("");
  const [ chSovet, setChSovet ] = useState(0);

  useEffect (()=> {
    getSovet()},
    [chSovet]);
  

  const getSovet = async() => {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setSovet(data.activity);
  }
 
  const changeSovet = () =>  {
    setChSovet(chSovet+1);
  }

  
  return (
    <div>
      <div className='container'>
        <p>{sovet}</p>
      </div>
      <div className='container'>
        <button onClick={changeSovet}>what else to do</button>
      </div>
    </div>
   
  );
}

export default App;
