import "./styles.css";


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

  const cards = cars.map((car) => {
    return (
        <div className="car-card">
        <p className="car-info">Brand: {car.brand}</p>
        <p className="car-info">Price: {car.price}</p>
        <p className="car-info">Diesel: {car.isDiesel ? "Yes" : "No"}</p>
    </div>  
    );
  });
  return <div className="cards-wrapper">{cards}</div>;
}

export default Homework06;
