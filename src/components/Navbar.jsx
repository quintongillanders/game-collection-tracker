import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-left">
        <div className="logo">Forza Horizon Garage Tracker</div>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/fh1">FH1</Link>
        <Link to="/fh2">FH2</Link>
        <Link to="/fh3">FH3</Link>
        <Link to="/fh4">FH4</Link>
        <Link to="/fh5">FH5</Link>
        <Link to="/fh6">FH6</Link>
      </div>

      <div className="nav-right">
        {!isLoggedIn ? (
          <>
            <button className="nav-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="nav-btn signup">
              Sign Up
            </button>
          </>
        ) : (
          <button className="nav-btn logout" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>

    </nav>
  );
}