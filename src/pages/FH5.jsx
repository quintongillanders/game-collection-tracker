import fh1Cars from "../data/fh1cars.json";
import "./FH5.css";

export default function FH5() {
  return (
    <div className="fh5-grid">
      {fh1Cars.map((car, index) => (
        <div className="card" key={index}>
          <h3>
            {car.Make} {car.Model}
          </h3>

          <p>
            {car.Year} • {car.Country}
          </p>

          <p>{car.Body_Style}</p>

          <p>
            {car.Class} {car.Stock_PI}
          </p>
          <p>
            {Number(car.Base_Value_Credits).toLocaleString()} CR
          </p>
        </div>
      ))}
    </div>
  );
}