import { useState } from 'react';
import './App.css';
import { PlayerPlay , PlayerPause , Refresh , ChevronUp , ChevronDown } from 'tabler-icons-react';


function App() {
  
  const [work,setWork] = useState(25);
  const [rest , setRest] = useState(5);
  
  const changeWork = sign =>{
    if (sign == "-" && (work>0 && work <=60) ){
      setWork(work-1);
    }else if(sign == "+" && (work>=0 && work<60)){
      setWork(work+1);
    }
  }

  const changeBreak = sign =>{
    if (sign == "-" && (rest>0 && rest <=60) ){
      setRest(rest-1);
    }else if(sign == "+" && (rest>=0 && rest<60)){
      setRest(rest+1);
    }
  }


  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="setting">
        <div>
          <span id="session-label" className='label'>Work duration</span>
          <button id="session-decrement" className='button-border' onClick={()=>changeWork("-")}><ChevronDown className='btn'/></button>
          <span id='session-length' className='length'>{work}</span>
          <button id="session-increment" className='button-border' onClick={()=>changeWork("+")}><ChevronUp className='btn'/></button>
        </div>
        
        <div>
          <span id="break-label" className='label'>Break duration</span>
          <button id="break-decrement" className='button-border' onClick={()=>changeBreak("-")}><ChevronDown className='btn'/></button>
          <span id='break-length' className='length'>{rest}</span>
          <button id="break-increment" className='button-border' onClick={()=>changeBreak("+")}><ChevronUp className='btn'/></button>
        </div>
      </div>
      <div className="clock">
          <span id='time-left'>25:00</span>
          <span id='timer-label'>Focus</span>
      </div>
      <div className="button-container">
        <button id='start_stop' className='button-border'><PlayerPlay className='btn'/></button>
        <button id='reset' className='button-border'><Refresh className='btn'/></button>
      </div>
      <div className='author'>Designed & Coded by <a href="https://github.com/sepidsoroush">Sepid Soroush</a></div>
    </div>
  );
}

export default App;
