const p1 = new Promise((resolve, reject) => {
  // setTimeout(resolve, 1000, "First");
  setTimeout(reject, 1000, "First");

})
  .then((value) => console.log(value))
  .catch(err => console.log(err))
  .finally(() => console.log("Im done"));