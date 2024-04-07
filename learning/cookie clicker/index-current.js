let moneyValue = 0;
let moneyGain = 1;
let production = 0;
const moneyText = document.getElementById("moneyValueP");
const productionText = document.getElementById("productionP");
timer = setInterval(update, 10);

function Thing(production,price){
    this.count = 0;
    this.production = production;
    this.price = price;
}

function Upgrade(price,type){
    this.count = 0;
    this.price = price;
    this.type = type;
}

function update(){
    production = thing1.production * thing1.count;
    moneyValue += production/100;

    moneyText.textContent = `${moneyValue.toFixed()}`;
    productionText.textContent = `${production}`
}

function clickTheButton(){
    moneyValue+=moneyGain;
}

function buy(whichThing){
    if(moneyValue>=whichThing.price){
        whichThing.count += 1;
        moneyValue -= whichThing.price;
    }
    else console.log("get more monies");
}

function buyUpgrade(whichUpgrade){
    if(moneyValue>=whichUpgrade.price){
         whichUpgrade.count +=1;
         moneyValue -= whichUpgrade.price;
        switch(whichUpgrade.type){
            case "click":
                moneyGain *= 2;
             break;
            case "cosinnego":
             break;
        }
    }
    else console.log("get more monies");
}

const thing1 = new Thing(1,15);
const upgrade1 = new Upgrade(100,"click");
console.log(thing1)
