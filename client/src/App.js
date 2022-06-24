import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Login from "./Login";
import NavBar from "./NavBar";
import Collection from "./Collection";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/user" element={ <User/> } />
        <Route path="/collection" element={ <Collection/> } />
      </Routes>
    </div>
  )
}

export default App
