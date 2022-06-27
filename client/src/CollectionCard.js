import React from 'react';

function CollectionCard({ musician, event }){
  return(
    <li className="card-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">{musician.name}</div>
          <p className="card-details">{event.city}</p>
          <p className="card-details">{event.created_at}</p>
        </div>
      </div>
    </li>
  )
}

export default CollectionCard;