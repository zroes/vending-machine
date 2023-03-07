import { appState } from "../AppState.js";

class MoneyService {
  addQuarter() {
    appState.money += 1;
  }
}

export const moneyService = new MoneyService();