import './App.css';
import { PlayerPlay , PlayerPause , Refresh , Plus , Minus } from 'tabler-icons-react';


function App() {
  return (
    <div className="App">
      <div className="setting">
        <label htmlFor="session-range" id="session-label">Work duration</label>
        <button id="session-decrement"><Minus/></button>
        <input type="range" id='session-range' min={5} max={60}  step={1} />
        <span id='session-length'>25</span>
        <button id="session-increment"><Plus /></button>

        <label htmlFor="break-range" id="break-label">Break duration</label>
        <button id="break-decrement"><Minus/></button>
        <input type="range" id='break-range' min={1} max={30}  step={1} />
        <span id='break-length'>5</span>
        <button id="break-increment"><Plus/></button>
      </div>
      <div className="clock">
        <div className='clock-container'>
          <span id='time-left'>25:00</span>
          <span id='timer-label'>Focus</span>
        </div>
      </div>
      <div className="button-container">
        <button id='start_stop'><PlayerPlay/></button>
        <button id='reset'><Refresh/></button>
      </div>
    </div>
  );
}

export default App;
