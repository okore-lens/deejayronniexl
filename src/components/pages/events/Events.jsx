import React from "react";
import "./Events.scss";
import EventCard from "../../../cards/events/EventCard";
import MemoryCard from "../../../cards/memory/MemoryCard";
import eventsList from "../../../assets/arrays/events";
import imagelist from "../../../assets/arrays/images";

const Events = () => {
  console.log(imagelist);
  return (
    <div className="events">
      <div className="events-section">
        <h3>Upcoming Events</h3>
        <div className="event">
          {eventsList.map((ev) => (
            <EventCard
              key={ev.id}
              name={ev.name}
              time={ev.time}
              location={ev.location}
            />
          ))}
        </div>
      </div>
      <div className="memory-section">
        <h3>Memories</h3>
        {imagelist.map((image) => (
          <MemoryCard key={image.id} src={image.src} text={image.text} />
        ))}
      </div>
    </div>
  );
};

export default Events;
