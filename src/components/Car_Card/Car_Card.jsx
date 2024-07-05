import "./styles.css";

function Car_Card ({brand, price, isDiesel}) {
    return <div className="car-card">
        <p className="car-info">Brand: {brand}</p>
        <p className="car-info">Price: {price}</p>
        <p className="car-info">Diesel: {isDiesel}</p>
    </div>;
}

export default Car_Card;