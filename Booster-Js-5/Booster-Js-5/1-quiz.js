/**
 * 
 * 1) make an array as MockTask and put some tasks inside it
 * 
 * 2) create a function named fetchTasks(), which returns tasks as a promise with 1 second delay.
 * 2-1) once you start your program the tasks inside the MockTask should display with 1 sec delay
 * 
 * 3) you need to create a function named renderTasks(tasks), to show the taken tasks as list's items on screen
 * 
 * 4) you should have an input for the clients to write their tasks inside, and add them to the list (MockTask array) with addTask button next to input.
 * 
 * 5)Implement the addTask(task) function to simulate adding a task to the MockTasks. Use a Promise to represent the asynchronous operation of adding a task.
 *5-1) your data should add to the list with 0.5 second delay

 * notice:
 * Ensure that when the "Add Task" button is clicked, the new task is added to the list of tasks and rendered on the webpage.
 * Ensure the initial list of tasks is fetched and rendered when the page loads.
 */

//1

const inputEle = document.querySelector("#taskInput");
const btnEle = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const form = document.querySelector("#form");

const MockTask = ["do the dishes", "coding", "working"];

//2

function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockTask);
    }, 1000);
  });
}

//3

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((element) => {
    const li = document.createElement("li");
    taskList.append(li);
    li.innerText = element;
  });
}

//4-5

function addTask(task) {
  MockTask.push(task);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockTask);
      console.log(task);
    }, 500);
  });
}
form.addEventListener("submit", (task) => {
  task.preventDefault();
  addTask(task.target[0].value).then((tasks) => renderTasks(tasks));
});

fetchTasks().then((tasks) => renderTasks(tasks));
