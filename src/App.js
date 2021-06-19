import './App.css';
import React from "react";
import SearchForm from "./vehicles/SearchForm";
import VehicleSummary from "./vehicles/VehicleSummary";

function App() {

    const displayAllCars = () => {
        const vehicles = [{make: 'Ford'}, {make: 'Tesla'}];
        return vehicles.map(result => {
            return <VehicleSummary {...result} />
        });
    }

    return (
        <div>
            <h1>Auto Galaxy</h1>
            <SearchForm />
            { displayAllCars() }
        </div>
    );
}

export default App;
