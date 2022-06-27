import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({user, setUser}) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser({});
        navigate('/login');
      }
    })
  }

  return (
    <nav className="nav">
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <Link to="/" className="site-title"> Concert Box </Link>
      <ul>
        {/* <li>
          <Link to="/musician"> Musicians </Link>
        </li> */}
        <li>
          <Link to="/collection"> Collection </Link>
        </li>
        <li>
          <Link to="/user"> User </Link> 
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;