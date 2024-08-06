// function printDouble(msg: string): void {
//   console.log(msg);
//   console.log(msg);
// }

// printDouble("Hello from TypeScript!");

// - use ! only when sure that the element exists
//const btn = document.getElementById("btn")!;

const btn = document.getElementById("btn");
const input = document.getElementById("inputToDo")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todoList");

interface Todo {
  text: string;
  completed: boolean;
}
const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJson = localStorage.getItem("todos");
  if (todosJson === null) return [];
  return JSON.parse(todosJson);
}

// clasic way of submitting
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);

  // save to local storage

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = ""; // clear input field
});

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;

  checkBox.addEventListener("change", function () {
    todo.completed = checkBox.checked;
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  newLi.append(todo.text);
  newLi.append(checkBox);

  list?.appendChild(newLi);
}

// using a custom function to handle submit

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("Submit with custom function!");
}

// btn?.addEventListener("click", () => {
//     alert(input.value);
//     input.value = ""; // clear input field
// })

// type assertions

let mystery: unknown = "Hello World";

const numChar = (mystery as string).length;
console.log(numChar);
