import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';

function Collection() {
  const [events, setEvents] = useState([])
  const [musicians, setMusicians] = useState([])

  useEffect(() => {
    fetchEvents();
    fetchMusicians();
  }, [])

  const fetchEvents = () => fetch("/events")
    .then(response => response.json())
    .then((events) => {
      setEvents(events);
    });

  const fetchMusicians = () => fetch("/musicians")
    .then(response => response.json())
    .then((musicians) => {
      setMusicians(musicians);
    });

// import data for CollectionCards
// pass data to CollectionCards
// display all that

  return (
    <div>
      <h1>Your Collection</h1>
      { events.forEach(event => {
          const musician = musicians.find(m => m.id === event.musician_id);
          return <CollectionCard musician={musician} event={event}/>
        }) 
      }
    </div>
  );
}

export default Collection;