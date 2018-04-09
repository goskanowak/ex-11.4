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
var sony = new Phone("Android", 550, "black", 200);
var iPhone8G = new Phone("Apple", 4250, "gold", 180);
var samsung = new Phone("Android", 2250, "silver", 215);
var iPhone8S = new Phone("Apple", 250, "silver", 195);

iPhone6S.printInfo();
sony.printInfo();
iPhone8G.printInfo();
samsung.printInfo();
iPhone8S.printInfo();

sony.priceColor();
samsung.priceColor();



function Car(mark, price, year, color, engine) {
    this.mark = mark;
    this.price = price;
    this.year = year;
    this.color = color;
    this. engine = engine;
}

Car.prototype.showProperties = function() {
    console.log("The car mark is " + this.mark + ", the price is $" + this.price + ", the year production is " +this.year + ", color is " + this.color + ", and the engine is " + this.engine + ".");
};

var punto = new Car("Fiat", 5854, 2010, "gold", "1.6");
var golf = new Car("Volkswagen", 2200, 2005, "green", "1.8");
var s40 = new Car("Volvo", 5800, 2012, "silver", 1.8);

punto.showProperties();
golf.showProperties();
s40.showProperties();
