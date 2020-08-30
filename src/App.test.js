import React from "react";
import { render } from "@testing-library/react";

import App from "./components/App";
import Card from "./components/Card";
import Header from "./components/Header";

describe("App", () => {
    test("renders App component", () => {
        render(<App />);
    });
    test("renders Card component", () => {
        render(<Card />);
    });
    test("renders Header component", () => {
        render(<Header />);
    });
});
