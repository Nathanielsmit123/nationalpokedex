function CFL(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchdata() {
    const lod = document.getElementById('dodo');
    const pokemonname = document.getElementById('pokemonName').value.toLowerCase();
    let text = document.getElementById('text')
    lod.style.display = 'block';
    let data
    let pokemonsprite
        data = await ((await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)).json());
        console.log(data);
        lod.style.display = 'none';
        if (data.id < 387){
            pokemonsprite = data.sprites.versions["other"]["dream_world"].front_default;
        } else{
            pokemonsprite = data.sprites.front_default;
        }

        const img = document.getElementById('Pokemonsprite');
        img.style = `width = "10000" height = "10000"`;
        img.src = pokemonsprite;
        const audio = new Audio(data.cries.latest);
        audio.play()
        img.style.display = 'block'
        pokemonname.Content = " hi";
        let name = CFL(data.name)
        text.textContent = `#${data.id} ${name}`;
    
}
// let pkm = 1025
// const pokedex = document.getElementById("pokedex")
// const getPokemon = () => {
//   const promises = []
//   for (let i = 1; i <= pkm; i++) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//     promises.push(fetch(url).then(res => res.json()))
//   }
//   Promise.all(promises).then(result => {
//     const pokemon = result.map(data => ({
//       id: data.id,
//       name: data.name,
//       image: data.sprites["front_default"],
//     }))
//     displayPokemon(pokemon)
//   })
// }
// const displayPokemon = pokemon => {
//   const pokemonString = pokemon
//     .map(
//       singlePokemon => `
//     <li>
//       <img src="${singlePokemon.image}" />
//       <h3>${singlePokemon.id}. ${singlePokemon.name}</h3>
//     </li>`
//     )
//     .join("")
//   pokedex.innerHTML = pokemonString
// }
// getPokemon()
// displayPokemon()