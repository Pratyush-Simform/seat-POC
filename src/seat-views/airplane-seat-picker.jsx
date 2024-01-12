import React, { useState } from "react";
import SeatPicker from "react-seat-picker";

const AirplaneSeatPicker = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (
    { row, number, id },
    addSeatCallback,
    removeSeatCallback
  ) => {
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

  const renderAirplaneLayout = () => {
    // Create a layout for the airplane with rows and columns
    const rows = Array.from({ length: 6 }, (_, rowIndex) => {
      return Array.from({ length: 9 }, (_, colIndex) => {
        return colIndex % 2 === 0
          ? null
          : {
              id: rowIndex * 4 + colIndex + 1,
              row: rowIndex + 1,
              // null: colIndex === 5,
              number: String.fromCharCode(65 + colIndex), // Convert column index to alphabet (A, B, C, D)
              isSelected: false,
              isReserved: rowIndex === 2 && (colIndex === 1 || colIndex === 2), // Reserve seats in the middle row
              tooltip: `Seat ${rowIndex + 1}-${String.fromCharCode(
                65 + colIndex
              )}`,
            };
      });
    });

    return rows;
  };

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
        rows={renderAirplaneLayout()}
        selectedSeats={selectedSeats}
        continous
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

export default AirplaneSeatPicker;
