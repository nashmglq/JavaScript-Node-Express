async function submit() {
    let pokemonName = document.getElementById("pokemonName");
    let imageHolder = document.getElementById("imageHolder");
    try {
      let userInput = document.getElementById("userInput").value.toLowerCase();
      const response = await fetch( // wait for the network (404, 200 etc)
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      );

      console.log(response)
  
      if (!response.ok) {
        throw new Error("Something went wrong :<");
      } else {
        const data = await response.json(); // wait for the objects like name (the one which access the json)
        pokemonName.textContent = data.name;
        imageHolder.src = data.sprites.front_default;
      }
    } catch (error) {
      pokemonName.textContent = error;
    }
  }
  

  // okay I get it know it will just reutn the HTTP response, 
  // and if we use that without using this const data = await response.json(); 
  // we wont access the json or the objects like name.. correct?