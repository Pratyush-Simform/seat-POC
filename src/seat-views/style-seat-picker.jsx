import React, { useState } from "react";
import SeatPicker from "react-seat-picker";

const StyleSeatPicker = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = [
    [
      { id: 1, number: 1, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      { id: 3, number: 3, tooltip: "Reserved by Rogger" },
      { id: 4, number: 4, orientation: "west" },
      null,
      null,
      { id: 1, number: 13, tooltip: "Reserved by you" },
      { id: 2, number: 14, tooltip: "Cost: 15$" },
      { id: 3, number: 15, tooltip: "Reserved by Rogger" },
      null,
      null,
      { id: 1, number: 18, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      { id: 3, number: "3", tooltip: "Reserved by Rogger" },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      }
    ],
    [
      { id: 7, number: 5, tooltip: "Reserved by Matthias Nadler" },
      { id: 8, number: 6 },
      { id: 9, number: 7 },
      { id: 10, number: 8 },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      }
    ],
    [
      { id: 13, number: 9 },
      { id: 14, number: 10 },
      { id: 15, number: 11 },
      { id: 16, number: 12 },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      }
    ],
    [],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      null,
      null
    ],
    [],
    [
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      { id: 4, number: "4", orientation: "west" },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      }
    ],
    [
      { id: 7, number: 1, tooltip: "Reserved by Matthias Nadler" },
      { id: 8, number: 2 },
      { id: 9, number: "3", orientation: "east" },
      { id: 10, number: "4", orientation: "west" },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      }
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      { id: 15, number: 3, orientation: "east" },
      { id: 16, number: "4", orientation: "west" },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      },
      null,
      null,
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        orientation: "east",
        tooltip: "Reserved by Rogger"
      }
    ]
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
      <h2>Seat picker with multiple gaps</h2>
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

export default StyleSeatPicker;
