interface Actor {
  update(): void;
  move(steps: number): void;
}

export default Actor;