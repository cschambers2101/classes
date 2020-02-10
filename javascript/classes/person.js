class Person {
  constructor(firstname, surname, dob) {
    this._firstName = firstname;
    this._surname = surname;
    this._dob = dob;
    this._age = this.calcAge(this._dob);
  }

  get FirstName() {
    return this._firstName;
  }

  set FirstName(value) {
    this._firstName = value;
  }

  get Surname() {
    return this._surname;
  }

  set Surname(value) {
    this._surname = value;
  }

  // Note only a getter here as a persons age does't change (It's calculated from the DOB)
  get Age() {
    return this._age;
  }

  printDetails() {
    console.log("Name: " + this._firstName + " " + this._surname);
    console.log("age: " + this._age);
  }

  calcAge(dateString) {
    var birthday = +new Date(dateString);
    var test = Math.round((Date.now() - birthday) / 31557600000);
    return test;
  }
}

module.exports = Person;
