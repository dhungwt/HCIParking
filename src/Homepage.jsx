import React, { useState } from "react";
import MMap from "./mainMap/MMap";
import "./mainMap/mMap.css"; //when mmap is rendered here w/ the css, the map disappears after a spot is reserved

function Homepage({ spots, isConfirmed }) {
  //creating spots as a new const here
  // const [spots] = useState(new Map(
  //     Array.from({ length: 36 }, (_, i) => [i + 1, "OPEN"])
  //   ));

  return (
    <div>
      <MMap spots={spots} isConfirmed={isConfirmed} />
    </div>
  );
}

export default Homepage;
