import { ItemsController } from "./Controllers/ItemsController.js";
import { MoneyController } from "./Controllers/MoneyController.js";


class App {
  // valuesController = new ValuesController();
  moneyController = new MoneyController();
  itemController = new ItemsController();
}

window["app"] = new App();
