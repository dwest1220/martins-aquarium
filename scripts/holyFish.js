import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    const holyFish = []
    for (const holy of database.fish) {
        if(holy.length % 3 === 0) {
        holyFish.push(`
            <div class="holy_fish">
                <h2>${holy.name}</h2>
                <p>Species: ${holy.species}</p>
                <p>Length: ${holy.length}</p>
                <p>Location: ${holy.location}</p>
                <p>Diet: ${holy.diet}</p>
                <img src="${holy.image}" alt="${holy.name}" class="fish_image">
            </div>
            `); 
        }
    }     
    return holyFish.join('')
}

export const soldierFish = () => {
    const soldFish = []
    for (const sold of database.fish) {
        if(sold.length % 5 === 0) {
        soldFish.push(`
            <div class="soldier_fish">
                <h2>${sold.name}</h2>
                <p>Species: ${sold.species}</p>
                <p>Length: ${sold.length}</p>
                <p>Location: ${sold.location}</p>
                <p>Diet: ${sold.diet}</p>
                <img src="${sold.image}" alt="${sold.name}" class="fish_image">
            </div>
            `);
        }
    }     
    return soldFish.join('')
}

export const regularFish = () => {
    const regFish = []
    for (const reg of database.fish) {
        if(reg.length % 3 !== 0 && reg.length % 5 !== 0) {
        regFish.push(`
            <div class="regular_fish">
                <h2>${reg.name}</h2>
                <p>Species: ${reg.species}</p>
                <p>Length: ${reg.length}</p>
                <p>Location: ${reg.location}</p>
                <p>Diet: ${reg.diet}</p>
                <img src="${reg.image}" alt="${reg.name}" class="fish_image">
            </div>
            `); 
        }
    }     
    return regFish.join('')
}

