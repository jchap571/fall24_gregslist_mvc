import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

export class HouseService {

class HousesService {

  createHouse(houseFormData) {
    const houses = AppState.houses

    const newHouse = new House(houseFormData)
    houses.push(newHouse)

    this.saveHousees()



  }

  saveHouses() {


  }


}

