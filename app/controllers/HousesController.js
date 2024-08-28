import { AppState } from "../AppState.js";


export class HousesController {

  constructor() {
    console.log('Houses controller is loaded 🏠');
    this.drawHouses()
    // try to add a listener once the draw function is available

    // add a load cars method once available

  }


  drawHouses() {
    const houses = AppState.houses
    console.log('houses in the appstate', houses);
    let houseHTMLcontent = ''
    houses.forEach(house => houseHTMLcontent += house.houseHTMLTemplate)
    const houseElem = document.getElementById('house-listings')
    houseElem.innerHTML = houseHTMLcontent


  }

  createHouse() {
    event.preventDefault()
    console.log('creating a new house listing')
    const form = event.target
    console.log('submitted a new house listing form', form)
  }
}