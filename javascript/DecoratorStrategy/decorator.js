//This is the prototype pattern...
function cloneSale(sale) {
	return new Sale(sale.getPrice());
}

//This is the Sale object
function Sale(price) {
  this.price = price || 100;
  this.decorators_list = [];
}
Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
};
Sale.prototype.getPrice = function () {
  var price = this.price;
  for (i = 0; i < this.decorators_list.length; i += 1) {
    var name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }
  return price;
};

Sale.decorators = {};
Sale.decorators.watax = {
  getPrice: function (price) {
    return price * 1.065;
  }
};
 
Sale.decorators.cdn = {
  getPrice: function (price) {
    return "CDN$" + price.toFixed(2);
  }
};

Sale.decorators.money = {
  getPrice: function (price) {
    return "$" + price.toFixed(2);
  }
};

//This is just a plain sale of 100 units
sale = new Sale(100); 
clone = cloneSale(sale);
price = sale.getPrice(); 
console.log("The original sale object: "+price); 

//Now we're adding a tax
sale.decorate('watax'); 
price = sale.getPrice(); 
console.log("The sale object with WA sales tax: "+price);

//Now we're making it money
sale.decorate('money'); 
price = sale.getPrice(); 
console.log("Formatted for freedom money: "+price);

//Our cloned sale with only the money decorator
clone.decorate('cdn') 
price = clone.getPrice();







console.log("A clone of the original, formatted as funny money: "+price);