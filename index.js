const arr = [1, 2, 3, 4, 5, 6];
const newEl = arr.map((item, index) => {
  console.log("item:", item + " " + "index:", index);
  return item;
});

console.log("new element:", newEl);
