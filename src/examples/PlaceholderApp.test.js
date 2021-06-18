import React from "react";
import PlaceholderApp from "./PlaceholderApp";
import {act, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Synchronous code for an async test will fail
it("0 renders title will fail", () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
        json: async () => ({ title: "Fetched" }),
    });

    render(<PlaceholderApp />);

    // this happens before the state update is scheduled
    expect(screen.getByText("Fetched")).toBeInTheDocument();
});

// Hides the issue while making the test pass.
it("1 bad example", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
        json: async () => ({ title: "Fetched" }),
    });

    // DON'T DO THIS
    await act(async () => {
        render(<PlaceholderApp />);
    });

    expect(screen.getByText("Fetched")).toBeInTheDocument();
});

// Good examples:
it("2 renders title using await findBy", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
        json: async () => ({ title: "Fetched" }),
    });

    render(<PlaceholderApp />);

    expect(await screen.findByText("Fetched")).toBeInTheDocument();
});

it("3 renders title using waitFor", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
        json: async () => ({ title: "Fetched" }),
    });

    render(<PlaceholderApp />);

    await waitFor(() => expect(screen.getByText("Fetched")).toBeInTheDocument());
});

// Same async principles above apply to events as well as render
it("renders title when clicked", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
        json: async () => ({ title: "Fetched" }),
    });

    render(<PlaceholderApp />);

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText("Fetched")).toBeInTheDocument();
});
