import './App.css';
import React from "react";
import SearchForm from "./vehicles/SearchForm";
import VehicleSummary from "./vehicles/VehicleSummary";
import { allVehicles } from "./VehicleData";

function App() {

    const displayAllCars = () => {
        return allVehicles.map(vehicle => {
            return <VehicleSummary key={ vehicle.id } {...vehicle} />
        });
    }

    return (
        <div className="container">
            <h1>Auto Galaxy</h1>
            <SearchForm />
            <div className="row">
                { displayAllCars() }
            </div>
        </div>
    );
}

export default App;
