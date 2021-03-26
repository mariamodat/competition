'use strict';

let salesHour = [" 6 Am", " 7 Am " , " 8 Am " , " 9 Am " , " 10 Am " , " 11 Am " , " 12 pm " , " 1 pm ", " 2 pm " , " 3 pm ", " 4 pm " , " 5 pm " , " 6 pm " , " 7 pm "];

let totalHours=[];
let alllocations = [];
let totalPerhour = [];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


let table =document.querySelector('.table');
let x=document.createElement('table');
table.append(x);
x.setAttribute('id' , 'xx');

let headerRow =document.createElement('tr');
x.append(headerRow);
 
let firstRow=document.createElement('th');
headerRow.append(firstRow);



for(let z=0;z<salesHour.length;z++)
{
    let hoursTd=document.createElement('th');
    headerRow.append(hoursTd);
    hoursTd.textContent=(salesHour[z]);

}

let dailyTotal = document.createElement('th');
headerRow.append(dailyTotal);
dailyTotal.textContent=('Daily Location Total');





function Locations (name, min , max , avg)
{
this.name=name;
this.min =min ;
this.max=max;
this.avg=avg;
this.randomCx=0;
alllocations.push(this);


}


// Random customer function generator .

Locations.prototype.getRandomCx =function (min,max)
{
this.randomCx=getRandomInt(min,max)*this.avg;
return Math.ceil(this.randomCx);
}


// creating the table function.

Locations.prototype.render = function()
{


  let secRow= document.createElement('tr');
x.append(secRow);
let nameRow=document.createElement('td')
secRow.append(nameRow);
nameRow.textContent=this.name;

let result =0 ;

for(let i=0;i<salesHour.length;i++)
{
  let cxRow = document.createElement('td');
  secRow.append(cxRow);
 
  cxRow.textContent=this.getRandomCx(this.min,this.max);


}

let totalElem= document.createElement('td');
secRow.append(totalElem);
for (let j=0;j<salesHour.length;j++)
{

  result =result+ this.getRandomCx(this.min,this.max);
  totalHours.push(result);

}

totalElem.textContent= result;





};


let seattle = new Locations( 'Seattle' , 23, 65 ,6.3);
seattle.render();

let tokyo = new Locations ( ' Tokyo ' , 3,34,1.2)
tokyo.render();

let dubai = new Locations ( ' Dubai ' , 11,38,3.7)
dubai.render();

let paris = new Locations ( ' Paris ' , 20,38,2.3)
paris.render();

let lima = new Locations ( ' Lima ' , 2,16,4.6)
lima.render();


let lastRow = document.createElement('tr');
x.append(lastRow);
lastRow.setAttribute('id' , 'footerTa');
let lastTotal = document.createElement('th');
lastRow.append(lastTotal);
lastTotal.textContent=('Totals')
let totalsResult = document.createElement('th');
lastRow.append(totalsResult);





let form = document.getElementById('form');
form.addEventListener('submit' , newLocation );


function  newLocation (event)
{

  event.preventDefault();
  let name =event.target.name.value;
  let minCx=event.target.min.value;
  let maxCx = event.target.max.value;
  let avgSales=event.target.avg.value;

  let logIn=new Locations (name,minCx,maxCx,avgSales);
logIn.render();


let tb=document.getElementById(xx);
let foot=document.getElementById('footerTa');
tb.removeChild(foot);




}
