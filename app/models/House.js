import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get houseHTMLTemplate() {
    return `
      <div class="col-12">
    <section class="row my-3">
      <div class="col-md-3">
        <img class="house-img"
          src="${this.imgUrl}"
          alt="Awesome House Picture">
      </div>
      <div class="col-md-3">
        <h2>${this.year} - ${this.name}</h2>
        <h3 class="fw-b">$${this.price}</h3>
        <h4>Bedrooms: ${this.bedrooms}</h4>
        <h4>Bathrooms: ${this.bathrooms}</h4>
        <h5>Sqr Feet: ${this.sqft}</h5>
        <p>${this.description}</p>
        <div class="align-items-end">
          <button>Contact Seller</button>
        </div>
      </div>
    `
  }
}