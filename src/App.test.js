import React from "react";
import { act, render, screen } from '@testing-library/react';
import App from './App';
import SearchForm from "./vehicles/SearchForm";
import userEvent from "@testing-library/user-event";

describe('App', () => {
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
    expect(screen.getAllByTestId('vehicleSummary')).toHaveLength(2);
  });
});

