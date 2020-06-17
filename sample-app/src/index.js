import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World 2</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById("root"));

// learning Js
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i, "Hello there arun!");
  }
  // the var keyword is accessible from within the function where it is defined rather thatn its scope.
  console.log("accessing: ", i);
  // to resolve this, we use the let keyword.
  for (let j = 0; i < 5; j++) {
    console.log(j, "Hello there arun!");
  }
  console.log("accessing j : getting error if you try printing j", 0);

  // var ---> : function scope
  // let ---> : block scope
  // const ---> : block scope
  const x = 10;
  console.log("X is ", x);
  // x = 12; cannot do this
  console.log("X is ", x);
}

sayHello();
// Basically use const when refering to an variable that wont need to change value
// Use let when you want a variable that can change value in that block
// Dont use var, but if used, use in block where it is used to store temp stuff.

// Objects
const person = {
  name: "arun",
  walk: function () {
    return 10;
  }, // method as its a function in a object
  talk() {
    console.log("This is the current object : ", this);
    return 12;
  },
};

console.log("Property : ", person["name"]);
console.log("Method walk :", person.walk());
console.log("Method talk :", person.talk());

// the value of the this keyword is determined by how it is called.
// if a function is called as a method of a object then this ---> returns the object
// if a function is called as as standalone function then this ----> returns the window object or the global object

const copyTalk = person.talk;
console.log("Calling copy talk", copyTalk());
// every function in js is a object.
// the bind method : we can set the value of this for that object permanently. bind(bindingToObject)
const copyTalkBinded = person.talk.bind(person);
console.log("Calling copy talk", copyTalkBinded());

// arrow functions

const square = function (number) {
  return number * number;
};
console.log(square(5));
const squareNew = (number) => {
  // () for no params, number for just one param, (number, param2) for multiple param
  return number * number;
};
console.log(squareNew(5));

// if just a single line can ommit the return keyword
const squareNewNew = (number) => number * number;
console.log(squareNewNew(5));

const jobs = [];
jobs.push({ id: 1, active: true });
jobs.push({ id: 2, active: false });
jobs.push({ id: 3, active: true });
console.log(jobs);
console.log(
  "Active Jobs",
  jobs.filter(function (job) {
    return job.active;
  })
);
console.log(
  "Inactive Jobs",
  jobs.filter((job) => !job.active)
);

// arrow functions dont rebind this
const arun = {
  talk() {
    console.log("Yo this is arun!", this);
  },
  stutter() {
    // this funtion is a callback function , i.e. a standalone function : this-->returns window object
    setTimeout(function () {
      console.log("a rr uu nnn", this);
    }, 1000);
  },
  stutterThis() {
    // The arrow function does not rebind the this keyword. hence this is still useable.
    setTimeout(() => {
      console.log("a rr uu nnn", this);
    }, 1000);
  },
};
console.log(arun.talk());
console.log(arun.stutter());
console.log(arun.stutterThis());

const colors = ["red", "green", "blue"];
const colorItems = colors.map(function (color) {
  return "<li>" + color + "</li>";
});
console.log(colorItems);
const colorItemsTwo = colors.map((color) => "<li>" + color + "</li>");
console.log(colorItemsTwo);
const colorItemsThree = colors.map((color) => `<li>${color}</li>`); // template literal
console.log(colorItemsThree);

const address = {
  street: "Hell",
  city: "Bangalore",
  country: "India",
};

// const street2 = address.street;
// rather just destructure it
const { street, city, country } = address;
console.log(street, city, country);
const { street: st, city: ct, country: cy } = address; //adding alias to the variable names
console.log(st, ct, cy);

// Spread operator
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const combined = [...first, ...second]; //...first is to spread the items , like expand it and display.
console.log(combined);

const three = first;
const four = [...first];

first.push("hmmm this is new");
console.log("1", first);
console.log("3", three); // this is basically pointing to the first
console.log("4", four); // this retains, as its a copy not the reference

const f = { firstName: "arun" };
const l = { lastName: "dev", firstName: "pav" };
const combinedName = { ...f, ...l };
console.log(combinedName);

class Person {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }
  listSkills() {
    console.log(this.name, "Skills :", this.skill);
  }
}
const p = new Person("arun", ["sleep", "eat", "burp"]);
p.listSkills();

class Programmer extends Person {
  constructor(name, skills, pskills) {
    super(name, skills);
    this.pskills = pskills;
  }
  program() {
    console.log("mush mush", this.pskills);
  }
}

const a = new Programmer();
a.program();

// import { ... } from js ; for the named exports
// import { Component } from "react"; // named exports in { }

//import ... from js ; for the default exports
// import React from 'react';

// both imports -> default and named exports
// import React, { Componenet } from 'react';
