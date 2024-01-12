import React, { useState } from "react";
import SeatPicker from "react-seat-picker";

const SeatPickerExample = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      null,
      { id: 24, number: "A5", isReserved: true },
      { id: 34, number: "A5", isReserved: true },
      { id: 44, number: "A6", isReserved: true },
      { id: 54, number: "A7", isReserved: true },
      // null,
      // null,
      // null,
      // null,
      // null,
      // { id: 9, number: "A12", isReserved: true }
    ],
    [
      { id: 11, number: "B1" },
      null,
      { id: 13, number: "B3", isReserved: true },
      null,
      null,
      null,
      null,
      // { id: 94, number: "B8", isReserved: true },
      // null,
      // { id: 15, number: "B9" },
      // { id: 16, number: "B10" },
      // { id: 17, number: "B11" },
      // { id: 18, number: "B12" },
      // { id: 19, number: "B13" }
    ],
    [
      { id: 21, number: "C1" },
      null,
      { id: 23, number: "C3", isReserved: true },
      null,
      null,
      null,
      null,
      // { id: 98, number: "C8", isReserved: true },
      // null,
      // { id: 25, number: "C9" },
      // { id: 26, number: "C10" },
      // { id: 27, number: "C11", isReserved: true },
      // { id: 28, number: "C12" },
      // { id: 29, number: "C13" },
      // null
    ],
    [
      null,
      null,
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4", isReserved: true },
      null,
      null,
      null,
      // { id: 94, number: "D8", isReserved: true },
      // null,
      // { id: 15, number: "D9" },
      // { id: 16, number: "D10" },
      // { id: 17, number: "D11" },
      // { id: 18, number: "D12" },
      // { id: 19, number: "D13" }
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      { id: 84, number: "E6" },
      // { id: 34, number: "E7" },
      // { id: 94, number: "E8" },
      // null,
      // { id: 15, number: "E9" },
      // { id: 16, number: "E10" },
      // { id: 17, number: "E11" },
      // { id: 18, number: "E12" },
      // { id: 19, number: "E13" }
    ],
    [
      { id: 11, number: "F1" },
      { id: 12, number: "F2" },
      { id: 13, number: "F3" },
      { id: 14, number: "F4" },
      { id: 74, number: "F5" },
      { id: 84, number: "F6" },
      { id: 34, number: "F7" },
      // { id: 94, number: "F8" },
      // null,
      // { id: 15, number: "F9" },
      // { id: 16, number: "F10" },
      // { id: 17, number: "F11" },
      // { id: 18, number: "F12" },
      // { id: 19, number: "F13" }
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      { id: 84, number: "G6" },
      { id: 34, number: "G7", isReserved: true },
      // { id: 94, number: "G8" },
      // null,
      // { id: 15, number: "G9" },
      // { id: 16, number: "G10" },
      // { id: 17, number: "G11" },
      // { id: 18, number: "G12" },
      // { id: 19, number: "G13" }
    ],
  ];

  const handleSeatClick = (
    { row, number, id },
    addSeatCallback,
    removeSeatCallback
  ) => {
    console.log("Inside on click");
    // Check if the seat is already selected
    const seatAlreadySelected = selectedSeats.some((seat) => seat.id === id);

    if (!seatAlreadySelected) {
      // If not selected, add the seat
      addSeatCallback(row, number);
      setSelectedSeats([...selectedSeats, { row, number, id }]);
    } else {
      // If already selected, remove the seat
      removeSeatCallback(row, number);
      setSelectedSeats(selectedSeats.filter((seat) => seat.id !== id));
    }
  };

  console.log(selectedSeats);

  return (
    <div>
      <SeatPicker
        addSeatCallback={(row, number) =>
          console.log(`Added seat ${row}-${number}`)
        }
        removeSeatCallback={(row, number) =>
          console.log(`Removed seat ${row}-${number}`)
        }
        selectedByDefault
        visible
        maxReservableSeats={5}
        alpha
        seatWidth={35}
        seatHeight={35}
        seatStyle={(selected, disabled) =>
          selected ? "selected" : disabled ? "disabled" : "available"
        }
        selectedSeatStyle="selected"
        tooltipProps={{ multiline: true }}
        rows={rows}
        selectedSeats={selectedSeats}
        onClick={(seat) =>
          handleSeatClick(
            seat,
            SeatPicker.defaultProps.addSeatCallback,
            SeatPicker.defaultProps.removeSeatCallback
          )
        }
      />
    </div>
  );
};

export default SeatPickerExample;
