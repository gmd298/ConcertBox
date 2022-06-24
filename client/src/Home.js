import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="/user">Click to view our user page</Link>
      <Link to="/collection">Click to view our collection page</Link>
    </div>
  );
}

export default Home;