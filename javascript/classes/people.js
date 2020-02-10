class People {
  constructor() {
    this._people = [];
  }

  get People() {
    return this._people;
  }

  listPeople() {
    for (var i = 0; i < this.People.length; i++) {
      console.log(
        "Name: " + this.People[i].FirstName + " " + this.People[i].Surname
      );
      console.log("Age: " + this.People[i].Age);
    }
  }

  addPerson(person) {
    this.People.push(person);
  }
}

module.exports = People;
