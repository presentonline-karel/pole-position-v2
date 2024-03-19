"use client";

// Next & React
import { useState } from "react";



export default function Schedule() {
  const [showUpcomingGps, setShowUpcomingGps] = useState(true);

  return (
    <div>
      <button onClick={() => setShowUpcomingGps(!showUpcomingGps)}>
        Change state
      </button>

      {showUpcomingGps === true && (
        <div>
          Upcoming GPs
        </div>
      )}

      {showUpcomingGps === false && (
        <div>
          Past GPs
        </div>
      )}
    </div>
  )
}