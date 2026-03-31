class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";

    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  front() {
    if (this.isEmpty()) return null;
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.rearIndex === this.frontIndex;
  }

  size() {
    return this.rearIndex - this.frontIndex;
  }
}

const queue = new Queue();

items[0] = 10;
rearIndex = 1;

items[1] = 20;
rearIndex = 2;
