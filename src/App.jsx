import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";

// pages
import FH1 from "./pages/FH1.jsx";
import FH2 from "./pages/FH2.jsx";
import FH3 from "./pages/FH3.jsx";
import FH4 from "./pages/FH4.jsx";
import FH5 from "./pages/FH5.jsx";
import FH6 from "./pages/FH6.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <header className="header">
                <h1>Forza Horizon Garage Tracker</h1>
                <p>Track every car you own across the Forza Horizon series</p>
              </header>

              <main className="container">
                <Link to="/fh1" className="card">
                  <h2>Forza Horizon</h2>
                  <p>Track your cars across Horizon Colorado 2012</p>
                </Link>

                <Link to="/fh2" className="card">
                  <h2>Forza Horizon 2</h2>
                  <p>Track your cars across Horizon Europe</p>
                </Link>

                <Link to="/fh3" className="card">
                  <h2>Forza Horizon 3</h2>
                  <p>Track your cars across Horizon Australia</p>
                </Link>

                <Link to="/fh4" className="card">
                  <h2>Forza Horizon 4</h2>
                  <p>Track your cars across Horizon UK</p>
                </Link>

                <Link to="/fh5" className="card">
                  <h2>Forza Horizon 5</h2>
                  <p>Track your cars across Horizon Mexico</p>
                </Link>

                <Link to="/fh6" className="card">
                  <h2>Forza Horizon 6</h2>
                  <p>Track your cars across Horizon Japan</p>
                </Link>
              </main>
            </>
          }
        />

        {/* PAGES */}
        <Route path="/fh1" element={<FH1 />} />
        <Route path="/fh2" element={<FH2 />} />
        <Route path="/fh3" element={<FH3 />} />
        <Route path="/fh4" element={<FH4 />} />
        <Route path="/fh5" element={<FH5 />} />
        <Route path="/fh6" element={<FH6 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
