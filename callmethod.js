// let student = {
//   name: "dhanesh",
//   age: 23,
// };

// function callMethod(data) {
//   console.log(this.name, this.age, data);
// }

// callMethod.call(student, "UI-developer");

// callMethod.apply(student, ["frontend developer"]);

// let callDataMethod = callMethod.bind(student, "mern stack");
// callDataMethod();

var array = [
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
];

var x = array.map(function (val) {
  return val.splice(1, 1);
});

console.log(array);
