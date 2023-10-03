// @ts-nocheck
import React, { useState, useEffect } from 'react';

const CarList = ({ cars }) => {
    const savedLikedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
    const [likedCars, setLikedCars] = useState(savedLikedCars);

    const handleLikeToggle = (carId) => {
        const updatedLikedCars = likedCars.includes(carId)
            ? likedCars.filter((id) => id !== carId)
            : [...likedCars, carId];

        setLikedCars(updatedLikedCars);
    };

    useEffect(() => {
        localStorage.setItem('likedCars', JSON.stringify(likedCars));
    }, [likedCars]);

    return (
        <div className="car">
            {cars.map((car) => (
                <div className="car-card" key={car.id}>
                    <img src={`/images/${car.image}`} alt={car.name} />
                    <div className="car-header">
                        <p className="car-name">{car.name}</p>
                        <p className="car-year">{car.year}</p>
                    </div>
                    <div className="car-content">
                        <p className="car-people">
                            <img src="/images/people.png" alt="people" /> {car.people} people
                        </p>
                        <p className="car-type">
                            <img src="/images/type.png" alt="type" /> {car.type}
                        </p>
                    </div>
                    <div className="car-content">
                        <p className="car-mileage">
                            <img src="/images/mileage.png" alt="mileage" /> {car.mileage}
                        </p>
                        <p className="car-gear">
                            <img src="/images/gear.png" alt="gear" /> {car.gear}
                        </p>
                    </div>
                    <hr />
                    <div className="car-content">
                        <div className="car-price">
                            <p className="car-price-value">{car.rentPrice}</p>
                            <p className="car-text">/month</p>
                        </div>
                        <div className="buttons">
                            <button className="like" onClick={() => handleLikeToggle(car.id)}>
                                {likedCars.includes(car.id) ? (
                                    <img src="/images/heart-filled.png" alt="heart-filled" />
                                ) : (
                                    <img src="/images/heart-outlined.png" alt="heart-outlined" />
                                )}
                            </button>
                            <button className="rent" onClick={() => alert("Thank You!!")}>Rent now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarList;
