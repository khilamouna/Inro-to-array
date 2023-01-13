//1
var object1 = { firstName: "Yan", lastname: "Fan" };
var object2 = { a: 1, b: 2, c: 3, d: 4 };
var object3 = {
  animal: "dog",
  noise: "bark",
  age: 3,
  type: "Golden Retriever",
  color: "Yellow",
};
//2
var person = {
  firstName: "Mouna",
  lastName: "Khila",
  homeTown: "Gafsa",
};
//3
person.favFoood = "pizza";
//
person["favFoood"] = "cheese";
//4
var person2 = {
  name: { first: "Mouna", middile: "", last: "khila" },
};
//5
function emptyObject() {
  return {};
}
//6
function addProprity(obect, key) {
  objeect[key] = true;
}

//7
function deleteProprity(object, key) {
  delete object[key];
}
