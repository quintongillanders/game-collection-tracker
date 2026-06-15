import { useState } from "react";
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
        <a href="#">Home</a>
        <a href="#">FH</a>
        <a href="#">FH2</a>
        <a href="#">FH3</a>
        <a href="#">FH4</a>
        <a href="#">FH5</a>
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