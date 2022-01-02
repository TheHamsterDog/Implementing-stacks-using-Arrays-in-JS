class Stack {
  constructor() {
    this.data = []
  }
  peek() {
    console.log(this.data[0]);
  }
  push(value) {
    this.data.push(value);
    return this.data;
  }
  pop() {
    this.data.splice(0,1);
    return this.data;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('google');
myStack.peek();
myStack.push('udemy');
myStack.peek();
myStack.push('discord');
myStack.peek();
myStack.pop();

myStack.peek();
myStack.pop();

myStack.peek();
myStack.pop();

myStack.peek();


//Discord
//Udemy
//google
