import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import VehiclePage from "./VehiclePage";
import App from "../App";
import VehicleList from "./VehicleList";

describe('Vehicles', () => {
    let app;

    beforeEach(() => {
        app = render(<App />);
    });

    test('should instantiate', () => {
        const page = render(<VehiclePage />, app);
        expect(page).toBeTruthy();
    });

    test('should render vehicle make, model and year', () => {
        const vehicleData = {make: 'Ford', model: 'Taurus', year: '2000'};
        render(<VehiclePage {...vehicleData} />, app);

        expect(screen.getByText(/2000 Ford Taurus/i)).toBeVisible();
    });

    // Mocking a service example.
    test('should display vehicle inventory (async)', async () => {
        const apiResponse = [
            {id: 1, make: 'Ford', model: 'Taurus', year: '2000'},
            {id: 2, make: 'Jeep', model: 'Limited', year: '2015'}
        ];

        // this code can be placed in the test module/suite at the top as well
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(apiResponse)
            })
        );

        render(<VehicleList />, app);

        await waitFor(() => {
            expect(screen.queryAllByTestId('vehicle')).toHaveLength(2)
        })
    });
});
