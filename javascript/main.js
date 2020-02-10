const People = require("./people");
const Person = require("./person");

// Main Program

// Create People Instance and list
people = new People();
// Create a new person for our list
person1 = new Person("Craig", "Chambers", "68/01/21");
person2 = new Person("Lance", "Smith", "2002/12/23");
// Add person to people list
people.addPerson(person1);
people.addPerson(person2);
// List everyone
people.listPeople();
