import React from "react";
import { Link } from 'react-router-dom';
import "./mMap.css";

function mMap({ spots }) {
  // console.log(spots)
  const rows = [];
  for (let row = 1; row <= 7; row++) {
    const cells = [];
    for (let col = 1; col <= 18; col++) {
      const spotNumber = row === 1 ? col : col + 18;
      const isReserved = spots.get(spotNumber) === "RESERVED";
      cells.push(
        <td key={col} className={`table-cell ${isReserved ? 'reserved' : ''}`}>
          {(row === 1 || row === 7) && (
            <Link to={`/reservedSpots/${spotNumber}`}>{spotNumber}</Link>
          )}
        </td>
      );
    }
    rows.push(<tr key={row}>{cells}</tr>);
  }


  return (
    <div className="mapContainer">
    <div className="tableWrapper">
      <table className="mMap">
        <tbody>{rows}</tbody>
      </table>
    </div>
    <p className="note">
      Say hello to the easiest way to find parking on Campus Bedford Ave side!
      Click on a parking spot to reserve it. If you find a spot you'd like,
      click on the number, and you'll be prompted to confirm your reservation.
    </p>
  </div>
  );
}

export default mMap;
