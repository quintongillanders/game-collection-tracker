import fh1Cars from "../data/fh1cars.json";
import "./FH1.css";

export default function FH1() {
  return (
    <div className="grid">
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
            {car.Horsepower} HP • {car.Drivetrain}
          </p>

          <p>
            {Number(car.Base_Value_Credits).toLocaleString()} CR
          </p>
        </div>
      ))}
    </div>
  );
}