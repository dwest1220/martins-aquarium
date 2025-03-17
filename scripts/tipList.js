import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = '<ul class="tips">'
    for (const tip of database.tips) {   
            tipHTML += `<li class="topic"><strong>${tip.topic}</strong></li>        
            <li class="tip">${tip.text}</li>`
    }
    tipHTML += '</ul>'
    return tipHTML
}