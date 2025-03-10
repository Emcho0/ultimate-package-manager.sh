/* @refresh reload */

import { render } from "solid-js/web";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Div nije pronadjen");
}

render(() => <App />, root);
