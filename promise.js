const amISexy = new Promise((resolve, reject) => {
  // setTimeout(resolve, 3000, 'Yes you are');
  // resolve("Yes you are!");
  // setTimeout(reject, 3000, 'You are resject!');
  // reject("Yes you are!");

  resolve(2);
  // reject(2);
});

// amISexy
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

amISexy
  .then(number => number * 2)
  .then(number => number * 2)
  .then(number => number * 2)
  .then(number => number * 2)
  .then(() => {
    throw Error('what the ...')
  })
  .then(lastNum => console.log(lastNum))
  .then()
  .catch(error => console.log(error));
