import React from 'react';
import { events } from './EventItems'
import './Events.css';



const Events = () => {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img className="event-image" src={event.image} alt={event.title} />
            <div className="event-card-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <ul>
                <li>Date: {event.date}</li>
                <li>Time: {event.time}</li>
                <li>Location: {event.location}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
