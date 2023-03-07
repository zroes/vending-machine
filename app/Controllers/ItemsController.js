import { appState } from "../AppState.js";
import { itemService } from "../Services/ItemsService.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawItems() {
  console.log("drawin items");
  let items = appState.items
  let template = ''
  items.forEach(item => {
    template += item.itemTemplate
  });
  setHTML("machine", template)
}

function _drawOrder() {
  setText("order", appState.order.toString())
  setText("cost", appState.cost.toFixed(2))
}
export class ItemsController {
  constructor() {
    console.log("hey from item controller");
    appState.on('order', _drawOrder)
    _drawItems()
  }
  buyItem(name) {
    console.log("something good hpanneed");
    itemService.buyItem(appState.items.find(item => item.name == name))
  }
}
