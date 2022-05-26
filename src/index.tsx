import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { WholePage } from "./App";

const root = createRoot(document.querySelector("#root") as HTMLElement);

root.render(<WholePage />);
