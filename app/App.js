import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { HousesController } from "./controllers/HousesController.js";
import { CarsController } from "./controllers/CarsController.js";

const USE_ROUTER = true




class App {
  // HousesController = new HousesController()


  // NOTE today we will be registering controller in the router-config
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
