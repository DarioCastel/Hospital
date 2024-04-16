import React from "react";
import CalendarCon from "../components/CalendarCon";
import "../../css/calendario.css"

const Calendario = () => {
  return (
    <>
      <div className="calendarioContainer">
        <div className="contentCalendar">
          <CalendarCon />
        </div>
      </div>
    </>
  );
};

export default Calendario;
