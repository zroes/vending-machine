import { Item } from "./Models/Items.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  items = [
    new Item({ name: 'soda', price: 2.50, imgURL: "https://images.unsplash.com/photo-1566846128021-b940b0eec910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", emoji: '🥤' }),
    new Item({ name: 'fries', price: 3.50, imgURL: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", emoji: '🍟' }),
    new Item({ name: 'burger', price: 10.25, imgURL: "https://images.unsplash.com/photo-1632577237955-f73cb2a054ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80", emoji: '🍔' }),
    new Item({ name: 'soda', price: 2.50, imgURL: "https://images.unsplash.com/photo-1566846128021-b940b0eec910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", emoji: '🥤' }),
    new Item({ name: 'fries', price: 3.50, imgURL: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", emoji: '🍟' }),
    new Item({ name: 'burger', price: 10.25, imgURL: "https://images.unsplash.com/photo-1632577237955-f73cb2a054ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80", emoji: '🍔' })
  ]

  money = 0
  cost = 0
  order = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
