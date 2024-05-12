interface InputHandler {
  madeLeftMove(): boolean;
  madeRightMove(): boolean;
  resetLeftMove(): void;
  resetRightMove(): void;
}

export default InputHandler;
