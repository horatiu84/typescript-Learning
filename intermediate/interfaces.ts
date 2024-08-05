// similar with types alias

type Point = {
  x: number;
  y: number;
};

// interface

interface Person {
  name: string;
  age: number;
}

const human: Person = { name: "Ion", age: 45 };

interface Student {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  sayBye(): string;
}

const thomas: Student = {
  id: 4554,
  first: "Thomas",
  last: "Drow",
  nickname: "Pufi",
  sayHi: () => {
    return "Hi!";
  },
  sayBye() {
    return "Bye!";
  },
};

interface Product {
  name: string;
  price: number;
  appluDiscount(disscout: number): number;
}

const shoes: Product = {
  name: "Bule",
  price: 100,
  appluDiscount(amount: number) {
    return amount;
  },
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const myDog: Dog = {
  name: "Toffy",
  age: 0.5,
  breed: "Tekel",
  bark() {
    return "Ham";
  },
};

// Inheritance

interface ServiceDog extends Dog {
  job: "drug sniffer" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4,
  breed: "Lab",
  bark() {
    return "BArk!";
  },
  job: "guide dog",
};

interface AnotherPerson {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends AnotherPerson, Employee {
  level: string;
  languges: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 45546,
  email: "sceva",
  level: "senior",
  languges: ["english", "french"],
};
