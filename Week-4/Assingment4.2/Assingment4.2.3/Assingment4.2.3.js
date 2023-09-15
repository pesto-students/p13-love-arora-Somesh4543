const person = {
  _name: "John",
  _email: "john@example.com",
  _age: undefined,

  getAge() {
    return this._age;
  },

  setAge(age) {
    if (age >= 0) {
      this._age = age;
    } else {
      console.log("Age must be a non-negative value.");
    }
  },
};

Object.defineProperty(person, "name", {
  get: function () {
    return this._name;
  },
});

Object.defineProperty(person, "email", {
  get: function () {
    return this._email;
  },
});

console.log(person.name);
console.log(person.email);

person.name = "Jane";
person.email = "jane@example.com";

person.setAge(30);
console.log(person.getAge());
person.setAge(-5);
