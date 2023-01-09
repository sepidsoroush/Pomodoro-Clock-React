import { useState , useEffect } from 'react';
import './App.css';
import { PlayerPlay , PlayerPause , Refresh , ChevronUp , ChevronDown } from 'tabler-icons-react';


function App() {

  // declare useState variables
  const [work,setWork] = useState(25);
  const [rest , setRest] = useState(5);
  const [seconds , setSeconds] = useState(0);
  const [isActive,setIsActive] =useState(false);
  const [label,setLabel] = useState("Focus")
  const timerMinutes = work < 10 ? `0${work}` : work ;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds ;
  const beep = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";


  //define function to decrease and increase session duration
  const changeWork = sign =>{
    if (sign == "-" && (work>0 && work <=60) ){
      setWork(work-1);
    }else if(sign == "+" && (work>=0 && work<60)){
      setWork(work+1);
    }
  }
  //define function to decrease and increase break duration
  const changeBreak = sign =>{
    if (sign == "-" && (rest>0 && rest <=60) ){
      setRest(rest-1);
    }else if(sign == "+" && (rest>=0 && rest<60)){
      setRest(rest+1);
    }
  }

  useEffect(()=>{
    if (isActive){
      let interval = setInterval(()=>{
        clearInterval(interval);
        if (seconds === 0 ){
          if (work !== 0){
            setSeconds(59);
            setWork(work-1);
          } else {
            let audio = new Audio(beep);
            audio.play();
            let minutes = isActive ? {rest} : {work} ;
            let seconds = 59 ;
            setSeconds(seconds);
            setRest(minutes);
            setLabel("Break");
          }
        } else {
          setSeconds(seconds-1);
        }
      },1000)
    }
  })
      
  const handlePlayPause = ()=>{
    setIsActive(!isActive)
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
          <span id='timer-label'>{label}</span>
          <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
      <div className="button-container">
        <button id='start_stop' className='button-border' onClick={handlePlayPause}>{isActive? < PlayerPause className='btn'/> : < PlayerPlay className='btn'/> }</button>
        <button id='reset' className='button-border'><Refresh className='btn'/></button>
      </div>
      <div className='author'>Designed & Coded by <a href="https://github.com/sepidsoroush">Sepid Soroush</a></div>
    </div>
  );
}

export default App;
