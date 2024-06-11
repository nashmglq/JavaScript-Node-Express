function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dog = true;

      if (dog) {
        resolve("YOU WALK THE DOG");
      } else {
        reject("didnt walk dog");
      }
    }, 1000);
  });
}

function doTheDishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dishes = true;

      if (dishes) {
        resolve("YOU CLEAN THE DISHESH");
      } else {
        reject("didnt CLEAN DISHEHS");
      }
    }, 3000);
  });
}

function outTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = true;

      if (trash) {
        resolve("YOU TAKE OUT TRASH");
      } else {
        reject("NOPE U DIDINT TAKE IT OUT");
      }
    }, 1000);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return doTheDishes();
  })
  .then((value) => {
    console.log(value);
    return outTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("FINISH CHORES");
  })
  .catch(error => console.error(error));
