//* HTML dan elementlarni Javascript ga chiqarib oldik
const elPokemonsList = document.querySelector(".pokemons-list");

//* Loops - Pokemons degan Array ni ichidagi pokemonlarni aylanib bitta bita olish
for (let pokemon of pokemons) {

    //* DOM da yangi elementlarni yaratib oldik
    let pokemonItem = document.createElement("li");
    let pokemonTitle = document.createElement("h3");
    let pokemonBadge = document.createElement("span");
    let pokemonImg = document.createElement("img");
    let pokemonType = document.createElement("p");
    let pokemonTime = document.createElement("time");

    //* Elementlarga qiymat beriyapmiz
    pokemonTitle.textContent = pokemon.name;
    pokemonBadge.textContent = pokemon.num;
    pokemonImg.src = pokemon.img;
    pokemonImg.width = 300;
    pokemonImg.height = 300;
    pokemonImg.alt = "Pokemon card with info";
    pokemonType.textContent = pokemon.type.join(", ");
    pokemonTime.textContent = pokemon.spawn_time;
    pokemonTime.setAttribute("datetime", `10-02-2023 ${pokemon.spawn_time}`);

    //* Elementlarga class berish
    pokemonItem.classList.add("pokemons-list-item");
    pokemonTitle.classList.add("pokemons-item-title");
    pokemonBadge.classList.add("pokemons-item-badge");
    pokemonImg.classList.add("pokemons-item-img");
    pokemonType.classList.add("pokemons-item-type");
    pokemonTime.classList.add("pokemons-item-time");

    //* Li elementi ichiga elementlarni joylashtirib chiqdik
    pokemonItem.appendChild(pokemonTitle);
    pokemonItem.appendChild(pokemonBadge);
    pokemonItem.appendChild(pokemonImg);
    pokemonItem.appendChild(pokemonType);
    pokemonItem.appendChild(pokemonTime);

    //* Li ni Ul elementi ichiga joylashtiramiz
    elPokemonsList.appendChild(pokemonItem);

}