import "./styles.css";
import Car_Card from "../../components/Car_Card/Car_Card";


function Homework06() {
    type Car = {
        brand: string;
        price: number;
        isDiesel: boolean;
      };
      
    const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const cards = cars.map((Car) => {
    return (
        <Car_Card
         brand={Car.brand}
         price={Car.price}
         isDiesel={Car.isDiesel}
        />
    );
  });
  return <div className="cards-wrapper">{cards}</div>;
}

export default Homework06;
