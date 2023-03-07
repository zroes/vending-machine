import { moneyService } from "../Services/MoneyService.js";
import { appState } from "../AppState.js";
import { setText } from "../Utils/Writer.js"


function _drawMoney() {
  setText('quarters', appState.money.toFixed(2))
}

export class MoneyController {
  constructor() {
    console.log("hello from the money controller");
    appState.on('money', _drawMoney)
  }


  addQuarter() {
    console.log("quarter added");
    moneyService.addQuarter()
    console.log(appState.money)
  }
}