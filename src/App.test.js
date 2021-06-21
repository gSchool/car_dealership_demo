import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('App Testing Basics', () => {
  let app;

  beforeEach(() => {
    app = render(<App />);
  });

  it('should render page header', () => {
    expect(screen.getByText(/Welcome to the React Workshop/i)).toBeInTheDocument();
  });

  it('should render user title without name', () => {
    expect(screen.getByTitle('userTitle')).toBeInTheDocument();
    expect(screen.queryByTitle('userName')).toBeNull();
  });

  it('should render user name on title click', () => {
    const userTitle = screen.getByTitle('userTitle');
    expect(screen.queryByTitle('userName')).toBeNull();  // query

    userEvent.click(userTitle);

    expect(screen.getByTitle('userName')).toBeInTheDocument(); // get
  });

  it('should render user data', () => {
    expect(screen.getByTestId('currentSnack')).toBeVisible();
    expect(screen.queryByTestId('currentSnack')).toBeDefined();
  });

  test('should count on click', () => {
    const button = screen.getByRole('button');
    expect(screen.getByText(0)).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  test('should display favorite chocolates', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

});
