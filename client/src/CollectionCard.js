import React, {useState} from 'react';

function CollectionCard({ event, handleDelete }){
  const [statusMessage, setStatusMessage] = useState("")
  const {
    city,
    musician: {
      name,
    },
  } = event;

  const onClick = (e) => {
    const button = e.target;
    button.disabled = true;
    handleDelete(event);
    setStatusMessage("Refresh the page. Its a feature ;)");
  }

  return(
    <div className="card-item">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-details">{city}</p>
        </div>
        <button type='submit' onClick={onClick}>Delete</button>
        <p>{statusMessage}</p>
      </div>
    </div>
  )
}

export default CollectionCard;