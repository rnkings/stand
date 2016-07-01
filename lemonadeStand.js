"use strict";

function startLemonadeStand(){
	console.log(document.weather);
}
//Person Class
function Person(temp, price){
	var likeihood=Math.random()/price;
	if(temp>75){
		likeihood=likeihood*(temp%75);
	}
	if(likeihood>.5)
		this.boughtLemonade = true;
	else{
		this.boughtLemonade = false; 	
		}
	}


function DayResult(day, peopleArray, cost, price, amountSold){
	this.day=day;
	this.peopleArray=peopleArray;
	this.cost=cost;
	this.price=price;
	this.amountSold = amountSold;
	this.totalProfit=function(){
		var totalCost = this.price*this.amountSold;
		var grossProfit = this.cost*this.amountSold;

		return (grossProfit-totalCost);
	};

}

//stores user input for #ofdays, #pplWalkedBy, price and cost
function simulate(){
	var days = document.getElementById("numberOfDays").value;
	var passerbys = document.getElementById("peopleWalkedBy").value;
	var price=document.getElementById("priceCharged").value;
	var cost=document.getElementById("costOfLemonade").value;
	var dayResultArray=[];

	// console.log(days);
	// console.log(passerbys);
	// console.log(price);
	// console.log(cost);
	for(var i=0; i<days;i++){
		var dayResult = generateResults(i, passerbys, price, cost);//calling generate results it creates a new day result
		dayResultArray.push(dayResult);
	}
}	


function generateResults(day, passerbys, price, cost){
	//console.log("=====================");
	// console.log(day);
	// console.log(passerbys);
	// console.log(price);
	// console.log(cost);
	// console.log("=====================");
	var temp = document.weather.forecast[day].high;
		//console.log(temp);
	var peopleArray=[];	
	var amountSold = 0;
	for(var i=0;i<passerbys;i++){
		var person = new Person(temp, price);

		if (person.boughtLemonade == true) {
			amountSold++;
		}

		peopleArray.push(person);
		//console.log(i);
	}
	var result= new DayResult(day, peopleArray, cost, price, amountSold);
	return result;
}


function makeOuputTable(elementID){
		var element=document.getElementById(elementID);
		var elementHTML = "<table><tr><th>Days</th>" + 
						    "<th>Passerby</th>" + 
							"<th>Cost</th>"+
							"<th>Profit</th></tr>";
		for (var i = 0; i < this.dayResultArray.length; i++){
			elementHTML += "<tr><td>" + this.dayResultArray[i][0] + "</td><td>" + this.dayResultArray[i][1] + "</td><td>" + this.dayResultArray[i][2] + "</td>" +
							"<td><button type='button' onclick='generateResults.DayResult(" + this.dayResultArray[i] + ")'>GET COST</button></td></tr>";
		}
		elementHTML += "</table>";
		element.innerHTML = elementHTML;
}






		

