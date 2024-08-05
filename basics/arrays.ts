const arr: number[] = [5, 10, 5, 15];
arr.push(52);
arr[0] = 99;

const activeUsers: string[] = [];
activeUsers.push("Tony");

// another array syntax

const bools: Array<boolean> = [];

type Point2 = {
  x: number;
  y: number;
};

const coords: Point2[] = [];

coords.push({ x: 23, y: 5 });

// Multidimensional array

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const ages: number[] = [];

const gameBoard: string[][] = [];

type Product = {
  name: string;
  price: number;
};

function getTotal(someArr: Product[]) {
  const sum = someArr.reduce((acc, cur) => cur.price + acc, 0);
  return sum;
}
