"use strict";

function startLemonadeStand(){
	console.log(document.weather);
}
//Person Class This is used in generateResults which will determine liklihood of people wanting to buy lemonade.
function Person(temp, price){
	var likeihood=Math.random()/price;//var
	if(temp>75){						
		likeihood=likeihood*(temp%75);
	}
	if(likeihood>.5)
		this.boughtLemonade = true;
	else{
		this.boughtLemonade = false; 	
		}
	}

//Profit for the day
function DayResult(day, peopleArray, cost, price, amountSold){
	this.day=day;
	this.peopleArray=peopleArray;
	this.cost=cost;
	this.price=price;
	this.amountSold = amountSold;
	this.totalProfit=function(){
		var totalCost = this.price*this.amountSold;//var
		var grossProfit = this.cost*this.amountSold;//var

		return (grossProfit-totalCost);
	};

}

//stores user input for #ofdays, #pplWalkedBy, price and cost
function simulate(){
	var days = document.getElementById("numberOfDays").value;//var
	var passerbys = document.getElementById("peopleWalkedBy").value;//var
	var price=document.getElementById("priceCharged").value;//var
	var cost=document.getElementById("costOfLemonade").value;//var
	var dayResultArray=[];

	// console.log(days);
	// console.log(passerbys);
	// console.log(price);
	// console.log(cost);
	for(var i=0; i<days;i++){
		console.log(dayResultArray);
		var dayResult = generateResults(i, passerbys, price, cost);//was var (calling generate results it creates a new day result
		dayResultArray.push(dayResult);
	}
	return dayResultArray;
}	

//determines if people will buy lemonade
function generateResults(day, passerbys, price, cost){
	//console.log("=====================");
	// console.log(day);
	// console.log(passerbys);
	// console.log(price);
	// console.log(cost);
	// console.log("=====================");
	var temp = document.weather.forecast[day].high;//var
		//console.log(temp);
	var peopleArray=[];//var
	var amountSold = [];//var
	for(var i=0;i<passerbys;i++){
		var person = new Person(temp, price);

		if (person.boughtLemonade == true) {
			amountSold++;
		}

		peopleArray.push(person);
		//console.log(i);
	}
	var result= new DayResult(day, peopleArray, cost, price, amountSold);//var
	return result;
}




function tableCreate(){
	var dayResultArray = simulate();
	var element=document.getElementById("displayTable");
	var elementHTML = "<table><tr><th>Days</th>" + 
						    "<th>Passerby</th>" + 
							"<th>Glasses Sold</th>"+
							"<th>Profit</th></tr>";
	//tbl.style.width='100%';
	//tbl.setAttribute('border', '1');
	for(var i=0; i<dayResultArray.length;i++){
		elementHTML += "<tr><td>" + (i+1) + "</td><td>" + dayResultArray[i].peopleArray.length + "</td><td>" + dayResultArray[i].amountSold + "</td><td>" + dayResultArray[i].totalProfit() + "</td></tr>";

	}
	elementHTML += "</table";
	element.innerHTML=elementHTML;
}



		

