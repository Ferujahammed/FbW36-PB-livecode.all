// ToDos List App WITH CLASS
<<<<<<< HEAD
class toDo {
  constructor(newList) {
    this.list = newList;
  }

  pushNewTask(task) {
    this.list.push(task);
  }

  removeToDo(orderNumber) {
    this.list.splice(orderNumber - 1, 1);
  }

  editToDo(orderNumber, newValue) {
    this.list[orderNumber - 1] = newValue;
  }

  updateToDo()
  

  renderToDos() {
    if (this.list.length < 1) {
      return "The list is empty";
    } else {
      let template = "ToDo List: " + "\n";
      for (let i = 0; i < this.list.length; i++) {
        template = `${template} ${i + 1}- ${this.list[i]} \n`;
      }
=======

const initToDosStore = ["Shopping", "Home work", "Go to the gym"];
class TodosListApp {
  constructor(initStore) {
    this.toDosStore = initStore;
  }

  insertTodo(newTodo) {
    this.toDosStore.push(newTodo);
  }
  createTodos(todos) {
    todos.map((item) => this.toDosStore.push(item));
  }

  removeTodo(orderNumber) {
    this.toDosStore.splice(orderNumber - 1, 1);
  }

  editTodo(orderNumber, newValue) {
    this.toDosStore[orderNumber - 1] = newValue;
  }
  updateTodos(todosOrder, newTodosValus) {
    for (let i = 0; i < newTodosValus.length; i++) {
      console.log(
        `target item index ${todosOrder[i] - 1} >> new value ==> ${
          newTodosValus[i]
        }`
      );
      this.toDosStore[todosOrder[i] - 1] = newTodosValus[i];
    }
  }

  RenderToDosListTemplate() {
    if (this.toDosStore.length < 1) {
      return "To do list stor is empty";
    } else {
      let template = "ToDo List: " + "\n";
      for (let i = 0; i < this.toDosStore.length; i++) {
        template = `${template} ${i + 1}- ${this.toDosStore[i]} \n`;
      }

>>>>>>> 74c6f6f2ce63e91a34c3a2964ed55e958e2fe3e3
      return template;
    }
  }
}

<<<<<<< HEAD
const list = new toDo(["Study", "Meditate"]);

list.pushNewTask("Clean");
list.removeToDo(2);
list.editToDo(2, "Vacuum");
console.log(list.renderToDos());
=======
const todoseListApp = new TodosListApp(initToDosStore);

//------------###########-----------
// Call Stack
todoseListApp.insertTodo("test1");
todoseListApp.insertTodo("test2");
todoseListApp.insertTodo("test4");
todoseListApp.insertTodo("test5");
todoseListApp.removeTodo(5);
todoseListApp.removeTodo(2);
todoseListApp.insertTodo("Call Alex");
todoseListApp.editTodo(3, "Pay bills");
todoseListApp.editTodo(5, "Visiting Tommy");
todoseListApp.createTodos([
  "Go to supermarket",
  "Meet with Ghassan",
  "New test",
]);

todoseListApp.updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);

//--------------------
// render to do template

console.log(todoseListApp.RenderToDosListTemplate());
//--------------------

//------------###########-----------

/**
if  toDosStore is empty ==> To do list is empty


ToDo List:
 1- Shopping
 2- Home work
 3- Go to the gym

 */
>>>>>>> 74c6f6f2ce63e91a34c3a2964ed55e958e2fe3e3
