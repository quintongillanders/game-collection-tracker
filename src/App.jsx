import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";

// pages
import FH1 from "./pages/FH1.jsx";

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
                <h1>Forza Horizon Car Tracker</h1>
                <p>Track every car you own across the Forza Horizon series</p>
              </header>

              <main className="container">
                <Link to="/fh1" className="card">
                  <h2>Forza Horizon 1</h2>
                  <p>Start building your first collection</p>
                </Link>

                <Link to="/fh2" className="card">
                  <h2>Forza Horizon 2</h2>
                  <p>Expand your garage across Europe</p>
                </Link>

                <Link to="/fh3" className="card">
                  <h2>Forza Horizon 3</h2>
                  <p>Australian open-world car collection</p>
                </Link>

                <Link to="/fh4" className="card">
                  <h2>Forza Horizon 4</h2>
                  <p>UK seasons + rare car hunting</p>
                </Link>

                <Link to="/fh5" className="card">
                  <h2>Forza Horizon 5</h2>
                  <p>Mexico’s massive car list</p>
                </Link>

                <Link to="/fh6" className="card">
                  <h2>Forza Horizon 6</h2>
                  <p>Japan Car List</p>
                </Link>
              </main>
            </>
          }
        />

        {/* PAGES */}
        <Route path="/fh1" element={<FH1 />} />
        <Route path="/fh2" element={<div>FH2 coming soon</div>} />
        <Route path="/fh3" element={<div>FH3 coming soon</div>} />
        <Route path="/fh4" element={<div>FH4 coming soon</div>} />
        <Route path="/fh5" element={<div>FH5 coming soon</div>} />
        <Route path="/fh6" element={<div>FH6 coming soon</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;