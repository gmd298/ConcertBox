import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function User({user, setUser}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);


  // DELETE request
  function handleDelete(event) {
    event.preventDefault();
    fetch(`/users/${user.id}`, 
      {method: 'DELETE'},
    )
    .then((response) => response.json())
    .then(() => {
      navigate('/signup');
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`/users/${user.id}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
      }),
    }).then(response => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div>
        <h1>This is the User page</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleUsernameChange} value={username} />
              <button type="submit">Update username</button>
            </form>
            {errors.length > 0
            ?errors.map((error,index) => (
              <p key={index} style={{ color: "red" }}>
                {error}
              </p>
            ))
          : null}
          <button onClick={handleDelete}>Delete account</button>
        </div>
    </div>
  );
}

export default User;