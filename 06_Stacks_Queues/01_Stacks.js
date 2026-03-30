class Stack {
  constructor() {
    this.items = []; // initialize empty stack
  }
}
Stack.prototype.push = function (value) {
  this.items.push(value); // O(1)
};

Stack.prototype.peek = function () {
  if (this.items.length === 0) return null;
  return this.items[this.items.length - 1];
};

Stack.prototype.updateTop = function (newValue) {
  if (this.items.length === 0) return false;
  this.items[this.items.length - 1] = newValue;
  return true;
};
