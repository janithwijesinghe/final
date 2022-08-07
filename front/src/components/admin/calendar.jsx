import React from "react";
import { Container } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const Calendar = ({ events = [] , setShowEventModal ,setClickedEventID }) => {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    console.log('arg',arg)
    setClickedEventID(arg.event.id);
    setShowEventModal(true);
  };
  return (
    <div>
      <Container>
        <FullCalendar
          eventClick={handleDateClick}
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
          }}
          themeSystem="Simplex"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </Container>
    </div>
  );
};

export default Calendar;
