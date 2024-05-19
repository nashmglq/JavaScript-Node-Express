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
      const dishes = false;

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

async function doThis() {

try {
  const walkthat = await walkDog();
  console.log(walkthat);
  const doTheDishesthat = await doTheDishes();
  console.log(doTheDishesthat);
  const outTrashthat = await outTrash();
  console.log(outTrashthat);}

  catch(error){
    console.log(error)
  }
}

doThis()

// ASYNC == MAKES A FUNCTION RETURN A PROMISE
// AWAIT == MAKES AN ASUYNCH FUNCTION WAIT FOR A PROMISE