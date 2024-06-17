import React from 'react';
import './Tarifs.css';

const carData = [
    {
        name: 'Mercedes',
        pricePerHour: 7326,
        imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-mercedesmercedes-benzmercedesmercedes-luxury-vehiclesbusescoachestrucks-1701527525441o2kzm.png'
    },
    {
        name: 'BMW',
        pricePerHour: 9263,
        imageUrl: 'https://www.pngarts.com/files/4/BMW-PNG-High-Quality-Image.png'
    },
    {
        name: 'Toyota Prius',
        pricePerHour: 3000,
        imageUrl: 'https://s3-us-west-2.amazonaws.com/media.brothers-brick.com/wp-content/uploads/2018/12/2008-toyota-prius-4-door-liftback-hatchback-angular-front-1024x768.png'
    }
];

const Tarifs = () => {
    return (
       <>
        <div className="divider"></div>
        <center><h2>Тарифы</h2></center>
        <div className="divider"></div>
        <div className="tarifs-container">

            {carData.map((car, index) => (
                <div key={index} className="car-card">
                    <div className="image-container">
                        <img src={car.imageUrl} alt={car.name} className="car-image" />
                    </div>
                    <div className="car-details">
                        <h2>{car.name}</h2>
                        <p>{car.pricePerHour} rubles per hour</p>
                        <a href="/cab" className="btn">Book Now</a>
                    </div>
                </div>
            ))}
        </div>
       </>
    );
};

export default Tarifs;
