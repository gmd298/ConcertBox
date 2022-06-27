import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Login from "./Login";
import Signup from './SignUp';
import NavBar from "./NavBar";
import Collection from "./Collection";

function App() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        console.log('user not logged in, redirecting to login');
        navigate('/login');
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup setUser={setUser} /> } />
        <Route path="/login" element={ <Login setUser={setUser} /> } />
        <Route path="/user" element={ <User user={user} setUser={setUser}/> } />
        <Route path="/collection" element={ <Collection user={user} /> } />
      </Routes>
    </div>
  )
}

export default App
