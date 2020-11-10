// The for/in statement loops through the properties of an object.
// The block of code inside the loop will be executed once for each property.

// Do not use the for/in statement to loop through arrays where index order is important.
// Use for…in to iterate over the properties of an object

//1.
const person = {
  name: "Alex",
  age: 29,
  city: "Berlin",
  email: "alex@yahoo.com",
};

const keys = [];
const values = [];

for (let key in person) {
  keys.push(key);
  values.push(person[key]);
}

console.log(keys + "\n" + values);

//************************* */
const user1 = {
  name: "Deolinda",
  email: "revolucionaria@sapo.pt",
  tel: 93652343,
};

const user2 = {
  name: "Capitao Fausto",
  email: "vozinha@sapo.pt",
  tel: 965739202,
};

const emails = [];

function getEmails(obj) {
  for (let key in obj) {
    if (key === "email") {
      emails.push(obj.email);
    }
  }
}

getEmails(user1);
getEmails(user2);

console.log(emails.join());
