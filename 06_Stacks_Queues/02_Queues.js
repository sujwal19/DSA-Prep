class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Create (Add)
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Delete (Remove)
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  // Read (Front element)
  front() {
    return this.items[this.front];
  }

  // Helper
  isEmpty() {
    return this.rear === this.front;
  }

  size() {
    return this.rear - this.front;
  }
}
