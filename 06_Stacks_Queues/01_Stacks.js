class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  update(index, value) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = value;
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const st = new Stack();
st.push(20);
st.push(30);
st.push(40);
st.push(50);
st.print();
console.log("peek:", st.peek());
console.log("isempty:", st.isEmpty());
console.log("pop", st.pop());
st.update(1, 25);
st.print();
