import './App.css';
import { PlayerPlay , PlayerPause , Refresh , ChevronUp , ChevronDown } from 'tabler-icons-react';


function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="setting">
        <div>
          <span id="session-label" className='label'>Work duration</span>
          <button id="session-decrement" className='button'><ChevronDown className='btn'/></button>
          <span id='session-length'>25</span>
          <button id="session-increment" className='button'><ChevronUp /></button>
        </div>
        
        <div>
          <span id="break-label" className='label'>Break duration</span>
          <button id="break-decrement" className='button'><ChevronDown/></button>
          <span id='break-length'>5</span>
          <button id="break-increment" className='button'><ChevronUp/></button>
        </div>
      </div>
      <div className="clock">
        <div className='clock-container'>
          <span id='time-left'>25:00</span>
          <span id='timer-label'>Focus</span>
        </div>
      </div>
      <div className="button-container">
        <button id='start_stop' className='button'><PlayerPlay/></button>
        <button id='reset' className='button'><Refresh/></button>
      </div>
    </div>
  );
}

export default App;
