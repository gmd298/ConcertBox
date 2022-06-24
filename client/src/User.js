import React from 'react';
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <h1>This is the User page</h1>
      <Link to="/home">Click to view our home page</Link>
      <Link to="/collection">Click to view our collection page</Link>
    </div>
  );
}

export default User;