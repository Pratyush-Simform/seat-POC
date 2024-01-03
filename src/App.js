import './App.css';
import CricketGroundSeatPicker from './seat-views/Criket-ground-seat-picker';
import SeatPickerExample from './seat-views/SeatPicker';
import AirplaneSeatPicker from './seat-views/airplane-seat-picker';
import StyleSeatPicker from './seat-views/style-seat-picker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SeatPickerExample />
       <CricketGroundSeatPicker />
       <AirplaneSeatPicker />
       <StyleSeatPicker />
      </header>
    </div>
  );
}

export default App;
