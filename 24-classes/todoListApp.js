// ToDos List App WITH CLASS
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
      return template;
    }
  }
}

const list = new toDo(["Study", "Meditate"]);

list.pushNewTask("Clean");
list.removeToDo(2);
list.editToDo(2, "Vacuum");
console.log(list.renderToDos());
