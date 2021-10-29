const catchPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  pokemonDisplay(pokemon);
}

const colorsPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon-color/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon.name);
}

const allPokemon = async () => {
  for (let i = 1; i <= 151; i++){
    await catchPokemon(i);

    if(i < 11){
      await colorsPokemon(i);
    }
  }

};


const pokemonCard = document.getElementById('pokemonDiv');
const pokemonDisplay = (pokemon) => {
  const newCard = document.createElement('div');
  newCard.classList.add('pokemon');
  console.log(pokemon.name)
  const cssType = pokemon.types[0].type.name;

  const changeText = `
    <div className="card-container" onClick="showInfo('${pokemon.id}')">
           <div class=${ cssType }>

               <div class="image">
                 <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
               </div>

               <div class="pokeInfo">
                 <h4>${pokemon.id}</h4>
                 <h3>${pokemon.name}</h3>
                 <h5>type: ${pokemon.types[0].type.name}</h5>

               </div>

           </div>
    </div>


  `;
  newCard.innerHTML = changeText;
  pokemonCard.appendChild(newCard);

}


allPokemon();

function showInfo(id)
{
  document.getElementById("myModal"+id).style.display = "block";
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
  modal.style.display = "none";

  }

  window.onclick = function(event)
  {
    modal = document.getElementById("myModal"+id);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
