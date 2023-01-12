const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  updateName(newName) {
    this.name = newName;
  }

  updateAge(newAge) {
    this.age = newAge;
  }
};

export default Person;
