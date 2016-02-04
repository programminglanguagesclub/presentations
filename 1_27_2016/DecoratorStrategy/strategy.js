//This is the Sale object
function Sale(price, func) {
  this.price = price || 100;
  this.getPrice = func;
}

//This is just a plain sale of 100 units
sale = new Sale(100,function(){return this.price;}); 
price = sale.getPrice(); 
console.log("The original sale object: "+price); 

//Now we're adding a tax
taxSale = new Sale(100,function(){return "$" + this.price * 1.065;})
price = taxSale.getPrice(); 
console.log("The sale object with WA sales tax: "+price);
