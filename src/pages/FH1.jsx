import { fh1Cars } from "../data/fh1Cars";
import "./FH1.css";

export default function FH1() {
  return (
    <div className="grid">
      {fh1Cars.map((car) => (
        <div className="card" key={car.id}>
          <h3>{car.name}</h3>
          <p>{car.year} • {car.manufacturer}</p>
          <p>{car.bodyStyle}</p>
          <span>{car.pi}</span>
        </div>
      ))}
    </div>
  );
}