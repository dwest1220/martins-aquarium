// import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish} from './holyFish.js'

// Generate the fish list
// const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element

const HolyFishHTML = mostHolyFish()

const SoldierFishHTML = soldierFish()

const RegularFishHTML = regularFish()

// document.getElementById('fishList').innerHTML = fishHTML
document.getElementById('tipList').innerHTML = tipHTML
document.getElementById('locationList').innerHTML = locationHTML
document.getElementById('fishList').innerHTML = `${HolyFishHTML}${SoldierFishHTML}${RegularFishHTML}`
