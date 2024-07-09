import "./styles.css";
import {v4} from "uuid";
import {Car} from "./types";

function Homework06() {
  //type Car = {
  //brand: string;
  //price: number;
  //isDiesel: boolean;
  //};

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const cards = cars.map((car: Car) => {
    return (
      <div className="car-card" key={v4()}>
        <p className="car-info">Brand: {car.brand}</p>
        <p className="car-info">Price: {car.price}</p>
        <p className="car-info">Fuel type: {car.isDiesel ? "Diesel" : "Petrol"}</p>
      </div>
    );
  });
  return <div className="cards-wrapper">{cards}</div>;
}

export default Homework06;
