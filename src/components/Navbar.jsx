import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Forza Horizon Garage Tracker</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">FH1</a>
        <a href="#">FH2</a>
        <a href="#">FH3</a>
        <a href="#">FH4</a>
        <a href="#">FH5</a>
      </div>
    </nav>
  );
}