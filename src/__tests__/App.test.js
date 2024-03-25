import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _____`", () => {
    render(<App />)
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1
    })

    expect(topLevelHeading).toBeInTheDocument()
})

test("A second-level heading with the text `About Me`", () => {
    render(<App />)
    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/,
        exact: true,
        level: 2
    })
    expect(secondLevelHeading).toBeInTheDocument()
})

test("A paragraph for your biographing", () => {
    render(<App />)
    const biography = screen.getByText(/biography/i)
    expect(biography).toBeInTheDocument()
})

test("Two links to Github and LinkedIn", () => {
    render(<App />)

    const githubLink = screen.getByRole("link", {name: /github/i})
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', "https://github.com/lsimmo25")

    const linkedIn = screen.getByRole("link", {name: /linkedIn/i})
    expect(linkedIn).toBeInTheDocument()
    expect(linkedIn).toHaveAttribute('href', "https://www.linkedin.com/in/lyle-simmons/")
})