import React from 'react';
import { Link } from "react-router-dom";

function Collection() {
  return (
    <div>
      <h1>This is the Collection page</h1>
      <Link to="/home">Click to view our home page</Link>
      <Link to="/user">Click to view our user page</Link>
    </div>
  );
}

export default Collection;