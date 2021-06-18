import React, { useEffect, useState } from "react";
import VehiclePage from "./VehiclePage";

export default function VehicleList(props) {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const getAllVehicles = async () => {
            const response = await fetch("https://localhost:5000/api/vehicles");
            const data = await response.json();

            setVehicles(data);
        };

        getAllVehicles()
            .catch(err => console.error('getAllVehicles', err));
    }, []);

    const createVehicleElements = () => {
        return vehicles.map((vehicle) => {
            return <VehiclePage key={ vehicle.id } {...vehicle} />
        })
    }

    return (
        <div data-testid="vehiclesList">
            { createVehicleElements() }
        </div>
    );
}
