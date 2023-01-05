import './App.css';
import { PlayerPlay , PlayerPause , Refresh , ChevronUp , ChevronDown } from 'tabler-icons-react';


function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="setting">
        <div>
          <span id="session-label" className='label'>Work duration</span>
          <button id="session-decrement" className='button-border'><ChevronDown className='btn'/></button>
          <span id='session-length' className='length'>25</span>
          <button id="session-increment" className='button-border'><ChevronUp className='btn'/></button>
        </div>
        
        <div>
          <span id="break-label" className='label'>Break duration</span>
          <button id="break-decrement" className='button-border'><ChevronDown className='btn'/></button>
          <span id='break-length' className='length'>5</span>
          <button id="break-increment" className='button-border'><ChevronUp className='btn'/></button>
        </div>
      </div>
      <div className="clock">
        <div className='clock-container'>
          <span id='time-left'>25:00</span>
          <span id='timer-label'>Focus</span>
        </div>
      </div>
      <div className="button-container">
        <button id='start_stop' className='button-border'><PlayerPlay className='btn'/></button>
        <button id='reset' className='button-border'><Refresh className='btn'/></button>
      </div>
    </div>
  );
}

export default App;
