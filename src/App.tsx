import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import React, { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const redSnake = new Snake(0, 0);
    redSnake.move(5);
    redSnake.turnRight();
    redSnake.move(3);
    const scalingFactor = 10; // Choose your scaling factor
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display(
      "The red snake is at " + redSnake.position.x + ", " + redSnake.position.y,
    );
    display("The red snake is facing " + redSnake.direction);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
