import { database } from './aquariumData.js';

export const locationList = () => {
    let locHTML = `<article class="locations">`;
        for (const loc of database.location) {
            locHTML += `
            <section class="location"> 
                <h3>${loc.name}</h3>
                <p>${loc.country}</p>
                <p>${loc.description}</p>
            </section>
            `;        
        }
        locHTML += '</article>'
        return locHTML
}