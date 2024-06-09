const search = document.querySelector(".container");
const userInput = document.getElementById("search-input");
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const namePokemon = document.getElementById("pokemon-name");
const idPokemon = document.getElementById("pokemon-id");
const weightPokemon = document.getElementById("weight");
const heightPokemon = document.getElementById("height");
const pokemonImg = document.getElementById("sprite");
const hpPokemon = document.getElementById("hp");
const attackPokemon = document.getElementById("attack");
const defensePokemon = document.getElementById("defense");
const specialAttackPokemon = document.getElementById("special-attack");
const specialDefensePokemon = document.getElementById("special-defense");
const speedPokemon = document.getElementById("speed");
const typePokemon = document.getElementById("types");

search.addEventListener("submit", async (event) => {
  event.preventDefault();

  let userInputPokemon = userInput.value.toLowerCase();
  let userInputNumber = Number(userInputPokemon);
  // it will try to convert to num, but if it cant that's not to worry becuase the if statment will be there


  // 1. we can do let ONLY Let when we want to access a var inside a block like if -else.
  // 2.  We can do if else, if else when we are  talking abbout 2 different cases

  try {
    let res;
    if (Number.isInteger(userInputNumber)) {
      res = await fetch(url + userInputNumber);


    } else {
      res = await fetch(url + userInputPokemon);

    }

    if (!res.ok) {
      throw new Error("Pokémon not found")
    }

    const data = await res.json();
    destructurePokemon(data);

  } catch (err) {
    window.alert("Pokémon not found")
    console.log(err)
  }


})

const destructurePokemon = (data) => {

  const { name, id, weight, height, sprites: { front_default }, types, stats } = data;

  const getTypes = types.map(pokemonType => pokemonType.type.name).join(", ") // Use map to return, forEach is to read and wont return anything

  // remember FOREACH change the original ARRAY.
  // MAP creates a new ARRAY TO RETURN.
  // FOREACH cant change the API, that is why we use MAP TO RETURN A NEW ARRAY WITHOTH CHANGE THE ORIGINAL.



  namePokemon.textContent = `Pokemon: ${name.toUpperCase()}`;
  idPokemon.textContent = `ID: ${id}`;
  weightPokemon.textContent = `weight: ${weight}`;
  heightPokemon.textContent = `height: ${height}`;
  pokemonImg.src = front_default;
  typePokemon.textContent = `Type: ${getTypes}`;
  hpPokemon.textContent = stats[0].base_stat;
  attackPokemon.textContent = stats[1].base_stat;
  defensePokemon.textContent = stats[2].base_stat;
  specialAttackPokemon.textContent = stats[3].base_stat;
  specialDefensePokemon.textContent = stats[4].base_stat;
  speedPokemon.textContent = stats[5].base_stat;

}
