import { useState , useEffect, useMemo } from 'react';
import './App.css';
import { PlayerPlay , PlayerPause , Refresh , ChevronUp , ChevronDown } from 'tabler-icons-react';
import "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

function App() {

  // declare useState variables
  const [work,setWork] = useState(25);
  const [rest , setRest] = useState(5);
  const [minutes , setMinutes] = useState(25);
  const [seconds , setSeconds] = useState(0);
  const [isActive,setIsActive] =useState(false);
  const [toggle , setToggle] = useState(false);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes ;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds ;
  const beep = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
  const audio = useMemo(()=> new Audio(beep) , [beep]) ;


  //define function to decrease and increase session duration
  const changeWork = sign =>{
    if (sign === "-" && (work>0 && work <=60) ){
      setWork(work-1);
      setMinutes(work-1);
    }else if(sign === "+" && (work>=0 && work<60)){
      setWork(work+1);
      setMinutes(work+1);
    }
  }
  //define function to decrease and increase break duration
  const changeBreak = sign =>{
    if (sign === "-" && (rest>0 && rest <=60) ){
      setRest(rest-1);
    }else if(sign === "+" && (rest>=0 && rest<60)){
      setRest(rest+1);
    }
  }
 
  useEffect(()=>{
    let interval = setInterval(()=>{
      clearInterval(interval);
      if (seconds === 0 && isActive){
        if (minutes !== 0){
          setSeconds(59);
          setMinutes(minutes-1);
        } else {
          audio.play();
          let mins = toggle ? work : rest ;
          let secs = 0 ;
          setSeconds(secs);
          setMinutes(mins);
          setToggle(!toggle);
        }
      }else if (isActive){
          setSeconds(seconds-1);
      }else {
        return;
      }
    },1000);
  },[seconds , audio , isActive , minutes , rest , toggle , work]);
  

  const handlePlayPause = ()=>{
    setIsActive(!isActive)
  }    

  const handleReset =() =>{
    setIsActive(!isActive);
    setWork(25);
    setRest(5);
    setSeconds(0);
    setMinutes(25);
    setToggle(false);
    audio.pause();
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
          <span id='time-left'>{timerMinutes}:{timerSeconds}</span>
          <span id='timer-label'>{toggle? "Break" : "Focus"}</span>
          <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
      <div className="button-container">
        <button id='start_stop' className='button-border' onClick={handlePlayPause}>{isActive? < PlayerPause className='btn'/> : < PlayerPlay className='btn'/> }</button>
        <button id='reset' className='button-border' onClick={handleReset}><Refresh className='btn'/></button>
      </div>
      <div className='author'>Designed & Coded by <a href="https://github.com/sepidsoroush">Sepid Soroush</a></div>
    </div>
  );
}

export default App;
