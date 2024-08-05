let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.5, long: 23.45 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("23");

function calculateTax(price: number | string, tax: number) {
  // type narrowing
  if (typeof price === "string") {
    price.replace("$", "");
    price = parseFloat(price);
  } else {
    price = price * tax;
  }

  return price * tax;
}

const stuff: any[] = [1, 2, 3, 4, true, "assds"];
const suffs: (number | string)[] = [1, 2, 3, 4, "assds"];

//literal type

let zero: 0 = 0;

//Type '2' is not assignable to type '0'
//zero = 2;

let mood: "happy" | "sad";

mood = "sad";
mood = "happy";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thurdday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";

let highScore: number | boolean;

const stuff2: number[] | string[] = [];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [];

function greet(name: string | string[]) {
  if (typeof name === "string") {
    console.log(`Hello ${name}`);
  } else {
    name.forEach((el) => {
      console.log(`Hello ${el}`);
    });
  }
}
