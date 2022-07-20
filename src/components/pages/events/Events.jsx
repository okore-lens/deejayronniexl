import React from "react";
import "./Events.scss";
import EventCard from "../../../cards/events/EventCard";
import MemoryCard from "../../../cards/memory/MemoryCard";

const Events = () => {
  return (
    <div className="events">
      <div className="events-section">
        <h3>Upcoming Events</h3>
        <div className="event">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div className="memory-section">
        <h3>Memories</h3>
        <MemoryCard />
      </div>
    </div>
  );
};

export default Events;
