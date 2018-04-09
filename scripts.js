function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.weight = weight;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is $" + this.price + ", and the weight is " + this.weight + "g.");
};

Phone.prototype.priceColor = function () {
    console.log("The phone price is " + this.price + " and color is " + this.color + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 250);
var Sony = new Phone("Android", 550, "black", 200);
var iPhone8G = new Phone("Apple", 4250, "gold", 180);
var Samsung = new Phone("Android", 2250, "silver", 215);
var iPhone8S = new Phone("Apple", 250, "silver", 195);

iPhone6S.printInfo();
Sony.printInfo();
iPhone8G.printInfo();
Samsung.printInfo();
iPhone8S.printInfo();

Sony.priceColor();
Samsung.priceColor();
