import React from "react";
import "./Events.scss";
import EventCard from "../../../cards/events/EventCard";
import MemoryCard from "../../../cards/memory/MemoryCard";
import eventsList from "../../../assets/arrays/events";
import memorylist from "../../../assets/arrays/memories";

const Events = () => {
  return (
    <div className="events">
      <div className="events-section">
        <h3>Upcoming Events</h3>
        <div className="event">
          {eventsList.map((ev) => (
            <div className="event-item">
              <EventCard
                key={ev.id}
                name={ev.name}
                time={ev.time}
                location={ev.location}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="memory-section">
        <h3>Memories</h3>
        <div className="memory">
          {memorylist.map((mem) => (
            <div
              className={`memory-item  ${
                mem.display === "portrait" ? "portrait" : "landscape"
              } `}
            >
              <MemoryCard src={mem.src} nameClass={mem.display} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
