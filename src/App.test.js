import React from "react";
import { act, render, screen } from '@testing-library/react';
import App from './App';
import SearchForm from "./vehicles/SearchForm";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/dom";

describe('App Testing Basics', () => {
  let app;

  beforeEach(() => {
    app = render(<App />);
  });

  test('renders learn react link', () => {
    expect(screen.getByText(/Auto Galaxy/i)).toBeInTheDocument();
  });

  test('renders car search form', () => {
    render(<SearchForm />, app)
    expect(screen.getByRole('form')).toBeVisible();
  });

  test('should display all vehicles', () => {
    userEvent.click(screen.getByText(/Search/i));
    expect(screen.getAllByTestId('vehicleSummary')).toHaveLength(441);
  });
});

// Mocking ------------------------------

const apiResponse = [
  {id: 1, make: 'Ford', model: 'Taurus', year: '2000'},
  {id: 2, make: 'Jeep', model: 'Limited', year: '2015'}
];

jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(apiResponse)
    })
);

describe('Testing with Mocks', () => {
  let app;

  beforeEach(() => {
    app = render(<App />);
  });

  test('should render vehicle make, model and year', () => {
    const vehicleData = {make: 'Ford', model: 'Taurus', year: '2000'};
    render(<VehiclePage {...vehicleData} />, app);

    expect(screen.getByText(/2000 Ford Taurus/i)).toBeVisible();
  });

  test('should display vehicle inventory (async)', async () => {
    render(<VehicleList />, app);

    await waitFor(() => {
      expect(screen.queryAllByTestId('vehicle')).toHaveLength(2)
    })
  });
});
