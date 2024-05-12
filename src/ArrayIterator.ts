class ArrayIterator<T> {
  private index: number;
  private arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
    this.index = 0;
  }

  next(): { value: T | undefined; done: boolean } {
    if (this.index < this.arr.length) {
      const value = this.arr[this.index];
      this.index++;
      return { value, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

export default ArrayIterator;
