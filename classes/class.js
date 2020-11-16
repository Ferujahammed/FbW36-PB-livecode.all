class User {
  constructor(name, email) {
    this.userName = name;
    this.userEmail = email;
  }

  editName() {
    this.userName = "Maria";
  }

  editEmail(email) {
    this.userEmail = email;
  }

  render() {
    return `User name is: ${this.userName} and user email is: ${this.userEmail}`;
  }
}

const user = new User("Mito", "mito.saraiva@gmail.com");
user.editName();
user.editEmail("maria@sapo.pt");

const userMe = new User("eu", "eu@hot.de");
userMe.editEmail("me@hot.de");

console.log(user.render(), userMe.render());
