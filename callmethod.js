let obj = {
  student: "dhanesh",
  age: 23,
  details: function (village, dist) {
    console.log(this.student, this.age, village, dist);
  },
};
let std = {
  student: "vajagani",
  age: 22,
};
obj.details.call(std, "ngd", "chittoor");
obj.details.apply(std, ["bpm", "chittoor"]);
const data = obj.details.bind(std, "dfdsf", "dasdf");
data();
