import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import React, { useEffect } from "react";
import CanvasWorldView from "./CanvasWorldView";
import GameController from "./GameController";
import WorldModel from "./WorldModel";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const theSnake = new Snake(0, 0);
    const theWorld = new WorldModel(theSnake, 10, 10);
    const canvas = new CanvasWorldView(5);
    const gameController = new GameController(theWorld);
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
