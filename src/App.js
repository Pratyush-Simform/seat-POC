import "./App.css";
import CricketGroundSeatPicker from "./seat-views/Criket-ground-seat-picker";
import SeatPickerExample from "./seat-views/SeatPicker";
import AirplaneSeatPicker from "./seat-views/airplane-seat-picker";
import StyleSeatPicker from "./seat-views/style-seat-picker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <div style={{ display: "grid", gap: "36px", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SeatPickerExample />
            <div
              style={{
                height: "125px",
                width: "60%",
                border: "2px solid white",
              }}
            >
              Stage
            </div>
            <CricketGroundSeatPicker />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AirplaneSeatPicker />
            <div
              style={{
                height: "100%",
                width: "60%",
                border: "2px solid white",
              }}
            >
              Dance Floor
            </div>
            <StyleSeatPicker />
          </div>
        </div>
        <div
          style={{
            height: "50px",
            width: "100%",
            marginTop: "200px",
            border: "2px solid white",
          }}
        >
          bar
        </div>
      </header>
    </div>
  );
}

export default App;
