class Person {
  constructor(firstName, lastName, age) {
    this.name = firstName;
    this.surname = lastName;
    this.years = age;
  }
  /* GETTERS */
  get firstName() {
    return this.name;
  }
  get lastName() {
    return this.surname;
  }
  get age() {
    return this.years;
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  /* SETTERS */
  set firstName(value) {
    this.name = value;
  }
  set lastName(value) {
    this.surname = value;
  }
  set age(number) {
    this.years = number;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
/* console.log(person); */
