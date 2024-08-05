function square(num: number) {
  return num * num;
}

square(3);

function greet(person: string) {
  return `Hi there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("Ion", 48, false);

// default value in javascript
function asd(num = 10) {}

// default value  for parameters
function greet2(person: string = "stranger") {
  return `Hi there, ${person}`;
}

// function return types

const addNumber = (x: number, y: number): number => {
  return x + y;
};

function rand(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ["red", "orange", "yellow"];

colors.map((color) => {
  return color.toUpperCase();
});

// never returns anything
function makeError(msg: string): never {
  throw new Error(msg);
}
