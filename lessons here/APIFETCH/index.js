// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could Not fecthc")
//         }
//         else{
//             return response.json()
//         }
//     })
//     .then(data => {console.log(data)})
//     .catch(error => console.log(error))

// Promise: "Hey, I promise to bring you an object."
// async: "I will create a function that can wait for that object and use it."
// await: "I will pause inside the function and wait for the promised object to be ready."

// OR


// Promise: "I promise to do something and give you a result later."
// async: "I will create a function that can wait for the promise and use its result."
// await: "I will wait for the promise to be ready and get its result inside the async function."


async function fetchs() {
    try{
        let findPokemon = document.getElementById("findPokemon").value.toLowerCase();
        console.log(findPokemon)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${findPokemon}`)
        if (!response.ok) {
            throw new Error("Failed to fetch")
        }

        const data = await response.json();
        let pokemon = document.getElementById("pokemonImg");
        let name = document.getElementById("name");
        name.textContent = data.name;
        pokemon.src = data.sprites.front_default;
        pokemon.style.display = "block";
    }

    catch(error){
        let name = document.getElementById("name");
        name.textContent = error;
    }
} 


fetchs()