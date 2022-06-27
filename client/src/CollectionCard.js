import React from 'react';

function CollectionCard({ event, handleDelete }){
  const {
    city,
    musician: {
      name,
    },
  } = event;

  return(
    <li className="card-item">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-details">{city}</p>
        </div>
        <button type='submit' onClick={handleDelete}>Delete</button>
      </div>
    </li>
  )
}

export default CollectionCard;