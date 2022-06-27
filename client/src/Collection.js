import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';

function Collection({ user }) {
  const [events, setEvents] = useState([])
  const [city, setCity] = useState('');
  const [musician, setMusician] = useState(-1);
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
      setMusician(musicians[0].id);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/events`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city,
        musician_id: musician,
        user_id: user.id,
      }),
    }).then(response => {
      response.json().then((event) => fetchEvents());
    });
  }

  const handleCityChange = (e) => setCity(e.target.value);
  const handleMusicianChange = (e) => setMusician(e.target.value);

  const handleDelete = (event) => fetch(
    `/events/${event.id}`,
    { method: 'DELETE'},
  )
    .then((response) => response.json())
    .then(() => {
      fetchEvents();
    })

  return (
    <div>
      <h1>Add new:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          onChange={handleCityChange} 
          value={city} 
          placeholder={'city'}
        />
        <select onChange={handleMusicianChange} value={musician} placeholder={'select musician'} >
          { musicians.map((musician) => <option key={musician.id} value={musician.id}>{musician.name}</option> )}
        </select>
        <button type="submit">Create New Event</button>
      </form>
      <h1>Your Collection</h1>
      { events.map(event => {
          return <CollectionCard key={event.id} handleDelete={handleDelete} event={event}/>
        }) 
      }
    </div>
  );
}

export default Collection;