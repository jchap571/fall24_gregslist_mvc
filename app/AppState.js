import { Car } from './models/Car.js'
import { House } from "./models/House.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Car[]} */
  cars = [
    new Car({
      make: 'Honda',
      model: 'Civic',
      mileage: 100000,
      year: 1990,
      price: 10000,
      color: '#d40100',
      imgUrl: 'https://images.unsplash.com/photo-1716167950737-ac635698a16a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Red and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      mileage: 100000,
      year: 2006,
      price: 10000,
      color: '#004e63',
      imgUrl: 'https://images.unsplash.com/photo-1705440158861-f26c436ac6fa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Blue and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Ford',
      model: 'F-150',
      mileage: 150,
      year: 2024,
      price: 100000,
      color: '#080b0d',
      imgUrl: 'https://images.unsplash.com/photo-1590043586837-35512e866a4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Black and shiny, low miles, owned by grandpa',
      transmission: 'automatic'
    })
  ]
  /**@type {House[]} */
  houses = [
    new House({
      year: '1974',
      name: '3 Bed 2.5 Bath House for Sale on the Lake',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://images.unsplash.com/photo-1523688471150-efdd09f0f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fDMlMjBiZWRyb29tJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),

    new House({
      year: '1990',
      name: '2 Bed 2 Bath House for Sale in the Country',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1100,
      price: 230000,
      description: 'Nice 2 bedroom home for sale',
      imgUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MiUyMGJlZHJvb20lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
    }),

    new House({
      year: '2000',
      name: '1 Bed 1.5 Bath House for Sale on the Prairie',
      bedrooms: 1,
      bathrooms: 1.5,
      sqft: 950,
      price: 130000,
      description: '1 bedroom house for sale',
      imgUrl: 'https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDElMjBiZWRyb29tJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),

    new House({
      year: '2000',
      name: '1 Bed 1.5 Bath House for Sale on the Prairie',
      bedrooms: 1,
      bathrooms: 1.5,
      sqft: 950,
      price: 130000,
      description: '1 bedroom house for sale',
      imgUrl: 'https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDElMjBiZWRyb29tJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),

    new House({
      year: '2000',
      name: '1 Bed 1.5 Bath House for Sale on the Prairie',
      bedrooms: 1,
      bathrooms: 1.5,
      sqft: 950,
      price: 130000,
      description: '1 bedroom house for sale',
      imgUrl: 'https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDElMjBiZWRyb29tJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),

    new House({
      year: '2000',
      name: '1 Bed 1.5 Bath House for Sale on the Prairie',
      bedrooms: 1,
      bathrooms: 1.5,
      sqft: 950,
      price: 130000,
      description: '1 bedroom house for sale',
      imgUrl: 'https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDElMjBiZWRyb29tJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),

  ]

}

export const AppState = createObservableProxy(new ObservableAppState())