import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <header className="header">
        <h1>Forza Horizon Car Tracker</h1>
        <p>Track every car you own across the Forza Horizon series</p>
      </header>

      <main className="container">
        <div className="card">
          <h2>Forza Horizon 1</h2>
          <p>Start building your first collection</p>
        </div>

        <div className="card">
          <h2>Forza Horizon 2</h2>
          <p>Expand your garage across Europe</p>
        </div>

        <div className="card">
          <h2>Forza Horizon 3</h2>
          <p>Australian open-world car collection</p>
        </div>

        <div className="card">
          <h2>Forza Horizon 4</h2>
          <p>UK seasons + rare car hunting</p>
        </div>

        <div className="card">
          <h2>Forza Horizon 5</h2>
          <p>Mexico’s massive car list</p>
        </div>

        <div className="card">
          <h2>Forza Horizon 6</h2>
          <p>Japan Car List</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;