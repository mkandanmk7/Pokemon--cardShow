const poke_container = document.querySelector("#poke_container");
const pokemonNums = 50;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemonNums; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon.species.url);
  createPokemonCard(pokemon);
};
fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const poke_types = pokemon.types.map((ele) => ele.type.name);
  let type = main_types.find((type) => poke_types.indexOf(type) > -1);
  let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  let color = colors[type];

  pokemonEl.style.backgroundColor = color;
  const pokeInnerHTML = `
  <img class="img-container" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" alt="poke HERE">
  <span>${name}</span>
  <div class="info" >
 
  <h3>Abilities:&nbsp;${pokemon.abilities[0].ability.name}</h3>
   
   <h3> Moves:&nbsp;${pokemon.moves[0].move.name}</h3>
   <h3>Weight:&nbsp;${pokemon.weight}</h3>
  
   

    </div> 

    `;
  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
}
// getPokemon(1);

// / const poke_container = document.getElementById("poke_container");
// const pokemons_number = 150;
// const colors = {
//   fire: "#FDDFDF",
//   grass: "#DEFDE0",
//   electric: "#FCF7DE",
//   water: "#DEF3FD",
//   ground: "#f4e7da",
//   rock: "#d5d5d4",
//   fairy: "#fceaff",
//   poison: "#98d7a5",
//   bug: "#f8d5a3",
//   dragon: "#97b3e6",
//   psychic: "#eaeda1",
//   flying: "#F5F5F5",
//   fighting: "#E6E0D4",
//   normal: "#F5F5F5",
// };
// const main_types = Object.keys(colors);

// const fetchPokemons = async () => {
//   for (let i = 1; i <= pokemons_number; i++) {
//     await getPokemon(i);
//   }
// };

// const getPokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const pokemon = await res.json();
//   createPokemonCard(pokemon);
// };

// function createPokemonCard(pokemon) {
//   const pokemonEl = document.createElement("div");
//   pokemonEl.classList.add("pokemon");

//   const poke_types = pokemon.types.map((type) => type.type.name);
//   const type = main_types.find((type) => poke_types.indexOf(type) > -1);
//   const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
//   const color = colors[type];

//   pokemonEl.style.backgroundColor = color;

//   const pokeInnerHTML = `
//         <div class="img-container">
//             <img src="https://pokeres.bastionbot.org/images/pokemon/${
//               pokemon.id
//             }.png" alt="${name}" />
//         </div>
//         <div class="info">
//             <span class="number">#${pokemon.id
//               .toString()
//               .padStart(3, "0")}</span>
//             <h3 class="name">${name}</h3>
//             <small class="type">Type: <span>${type}</span></small>
//         </div>
//     `;

//   pokemonEl.innerHTML = pokeInnerHTML;

//   poke_container.appendChild(pokemonEl);
// }

// fetchPokemons();
