import Snake from "./Snake";
import "@testing-library/jest-dom";

const greenSnake = new Snake(0, 0);
const blueSnake = new Snake(0, 0);

test("Snake can move", () => {
  greenSnake.move(5);
  expect(greenSnake.position.x).toEqual(5);
});

test("Snake can turn", () => {
  blueSnake.move(4);
  blueSnake.turnRight();
  blueSnake.move(1);
  expect(blueSnake.position.x).toEqual(4);
  expect(blueSnake.position.y).toEqual(-1);
});

describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});

export {};
