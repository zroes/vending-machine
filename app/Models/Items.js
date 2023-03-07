

export class Item {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.imgURL = data.imgURL;
    this.emoji = data.emoji;
  }

  get itemTemplate() {
    return `
    <div class="col-3 m-4 bg-dark rounded elevation-5 p-2">
      <div class="overflow-hidden">
        <img class="vending-icon"
          src="${this.imgURL}"
          alt="">
      </div>
      <h2 class="text-light">${this.name} | $${this.price.toFixed(2)}</h2>
      <button onclick="app.itemController.buyItem('${this.name}')" class="btn btn-dark w-100"><i class="mdi mdi-cart"></i></button>
    </div>`
  }
}