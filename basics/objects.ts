const dog = {
  name: "Elton",
  breed: "Australian Shepheard",
  age: 4.5,
};

function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "iob", last: "ger" });

let coordinate: { x: number; y: number } = { x: 35, y: 45 };

function randomCoordonate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// type alias!
type Point = {
  x: number;
  y: number;
};

let newCoordonate: Point = { x: 35, y: 45 };

// nested object

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "My bad",
  artist: "Michael Jackson",
  numStreams: 5465651,
  credits: {
    producer: "Alex",
    writer: "Phill",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// optional proprities
type Points = {
  x: number;
  y: number;
  z?: number;
};

let newCoordonates: Points = { x: 35, y: 45 };
let newOptionalCoordonates: Points = { x: 35, y: 45, z: 56 };

type User = {
  readonly id: number;
  username: string;
};

const newUser: User = {
  id: 1234,
  username: "IOn",
};

// we can't rewrite the id with a new value

// Intersection type

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColoredCircle = Circle & Colorful;

const happyFace: ColoredCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 3,
};
