import React from "react";
import { render } from "@testing-library/react";

import Card from "./components/Card";

describe("Card", () => {
    test("renders Card component", () => {
        render(<Card />);
    });
});
