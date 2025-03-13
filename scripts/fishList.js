import { database } from './aquariumData.js';

export const fishList = () => {
    let fishingHTML = "";
        for (const fish of database.fish) {
        fishingHTML += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name}" class="fish_image">
            <h3>${fish.name}</h3>
            <div class="fish_details">
                <p class="fish_species">${fish.species}</p>
                <p class="fish_location">${fish.location}</p>
                <p class="fish_length">${fish.length}</p>
                <p class="fish_diet">${fish.diet}</p> 
            </div>
        </article>    
    `;
  }
return fishingHTML
}