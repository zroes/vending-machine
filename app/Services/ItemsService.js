import { appState } from "../AppState.js"

class ItemsService {
  buyItem(item) {
    if (appState.money >= item.price) {
      appState.money -= item.price
      appState.order.push(item.emoji)
      appState.order.sort()
      appState.cost += item.price
      appState.emit("order")
    }
  }

}


export const itemService = new ItemsService()