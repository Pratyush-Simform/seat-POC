import React, { useState } from "react";
import SeatPicker from "react-seat-picker";
import "./styles.css";

const CricketGroundSeatPicker = () => {
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

  const renderCricketGroundLayout = () => {
    // Create a layout for the cricket ground with rows and columns
    const rows = Array.from({ length: 10 }, (_, rowIndex) => {
      return Array.from({ length: 15 }, (_, colIndex) => ({
        id: rowIndex * 15 + colIndex + 1,
        row: rowIndex + 1,
        number: colIndex + 1,
        isSelected: false,
        isReserved: false,
        tooltip: `Seat ${rowIndex + 1}-${colIndex + 1}`,
      }));
    });

    return rows;
  };

  const CustomSeat = ({ selected, disabled, onClick }) => {
    const seatStyle = {
      // Add your custom styling here for the seat shape
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: selected ? "red" : disabled ? "gray" : "green",
      cursor: disabled ? "not-allowed" : "pointer",
    };

    return <div style={seatStyle} onClick={onClick} />;
  };

  const rows = [[[{}], [{}], [{}], null, null, null, null]];

  return (
    <div>
      <SeatPicker
        style={{ borderRadius: "50%" }}
        addSeatCallback={(row, number) =>
          console.log(`Added seat ${row}-${number}`)
        }
        removeSeatCallback={(row, number) =>
          console.log(`Removed seat ${row}-${number}`)
        }
        selectedByDefault
        visible
        seatComponent={CustomSeat}
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

export default CricketGroundSeatPicker;
