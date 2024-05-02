import Player from "./Player";
import SnakeController from "./SnakeController";
import "@testing-library/jest-dom";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import PlayerWalls from "./PlayerWalls";

const snake = new Snake(0, 0);
const worldModel = new WorldModel(snake, 5, 5);
const snakeController = new SnakeController(worldModel, snake);
const avoidPlayerWall = new PlayerWalls(snakeController);

const snake2 = new Snake(0, 0);
const worldModel2 = new WorldModel(snake2, 5, 5);
const snakeController2 = new SnakeController(worldModel2, snake2);
const avoidPlayerWall2 = new PlayerWalls(snakeController2);

test("Snake Controllers Work", () => {
  snake.move(2);
  snakeController.turnSnakeLeft();
  expect(snake.position.x).toEqual(2);
});

test("Snake Walls Work", () => {
  expect(snake2.direction).toEqual(1);
});
export {};
