import React from "react";
import { act, render, screen } from '@testing-library/react';
import App from './App';
import VehicleSearch from "./examples/VehicleSearch";

describe('App', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders car search form', () => {
    const app = render(<App />);
    act(()=> {
      render(<VehicleSearch />, app)
    })
    expect(app.getByRole('form')).toBeVisible();
  })
});

describe('Login Form', () => {
  test('should render username and password fields', () => {

  });

  test('should set authorization', () => {

  });

  test('should hide login form if logged in', () => {

  });
});
