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
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();

  let userInputPokemon = userInput.value.toLowerCase();

  // it will try to convert to num, but if it cant that's not to worry becuase the if statment will be there

  // 1. we can do let ONLY Let when we want to access a var inside a block like if -else.
  // 2.  We can do if else, if else when we are  talking abbout 2 different cases

  let userInputNumber = Number(userInputPokemon);

  try {
    let res;
    if (Number.isInteger(userInputNumber)) {
      res = await fetch(url + userInputNumber);
    } else {
      res = await fetch(url + userInputPokemon);
    }

    if (!res.ok) {
      throw new Error("Pokémon not found");
    }

    const data = await res.json();
    destructurePokemon(data);
  } catch (err) {
    window.alert("Pokémon not found");
    console.log(err);
  }
});

const destructurePokemon = (data) => {
  const {
    name,
    id,
    weight,
    height,
    sprites: { front_default },
    types,
    stats,
  } = data;

  typePokemon.textContent = "";

  types.forEach((event) => {
    const newType = document.createElement("div");
    newType.textContent = event.type.name.toUpperCase();

    typePokemon.appendChild(newType);
  });

  //how is the flow? it will iterate on the type, event will represent the type, now it will get the type.name and uppercase it, and each type will be append

  // So 1st types, it will be represented by event.
  // Now event will get the type.name and uppercase it.
  // The 1st type will be appended

  // if there is a second one it will just do the same, it is a fluid motion

  // but I still dont get it why we user forEAch, is it because we are adding a new value? and not just getting the value from the original? YES

  // remember FOREACH change the original ARRAY.
  // MAP creates a new ARRAY TO RETURN.
  // FOREACH cant change the API, that is why we use MAP TO RETURN A NEW ARRAY WITHOTH CHANGE THE ORIGINAL.

  // REMOVE PREFIX LOL
  namePokemon.textContent = name.toUpperCase();
  idPokemon.textContent = id;
  weightPokemon.textContent = weight;
  heightPokemon.textContent = height;
  pokemonImg.src = front_default;
  hpPokemon.textContent = stats[0].base_stat;
  attackPokemon.textContent = stats[1].base_stat;
  defensePokemon.textContent = stats[2].base_stat;
  specialAttackPokemon.textContent = stats[3].base_stat;
  specialDefensePokemon.textContent = stats[4].base_stat;
  speedPokemon.textContent = stats[5].base_stat;
};
