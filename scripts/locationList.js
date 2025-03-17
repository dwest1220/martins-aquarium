import { database } from './aquariumData.js';

export const locationList = () => {
    let locHTML = `<article class="locations">`;
        for (const loc of database.location) {
            locHTML += `
            <section class="location"> 
                <h3 class="location_name">${loc.name}</h3>
                <p class="location_country">${loc.country}</p>
                <p class="location_description">${loc.description}</p>
            </section>
            `;        
        }
        locHTML += '</article>'
        return locHTML
}