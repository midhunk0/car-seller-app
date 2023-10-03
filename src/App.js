/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CarList from './components/CarList';
import Search from './components/Search';
import Pagination from './components/Pagination';
import carsData from './cars.json';
import "./App.css";

function App() {
    const [cars, setCars] = useState(carsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const carsPerPage = 6;
    const pagesToShow = 10; 

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredCars = carsData.filter((car) =>
            car.name.toLowerCase().includes(query.toLowerCase())
        );
        setCars(filteredCars);
    };

    const handlePageChange = (page) => {
        window.history.pushState({}, '', `/page/${page}`);
        setCurrentPage(page);
    };

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    return (
        <Router>
            <Routes>
                <Route path="/page/:page" element={
                    <>
                        <Search onSearch={handleSearch} />
                        <CarList cars={currentCars} />
                        <Pagination
                            totalPages={Math.ceil(cars.length / carsPerPage)}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            pagesToShow={pagesToShow}
                        />
                    </>
                }/>
                <Route path="/" element={<Navigate to="/page/1" />} />
            </Routes>
        </Router>
    );
}

export default App;
