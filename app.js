'use strict';
var sum = 0;
var OpenHour = [' ', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Daily Location Total'];

var Locations = [];

//Create Locations Objects 

function LocationsHope(name, max, min, average_cookies_per_customer) {
  this.name = name;
  this.max = max;
  this.min = min;
  this.average_cookies_per_customer = average_cookies_per_customer;
  this.random_customers_per_hour1 = [];
  this.cookies_purchased_Hour = [];
  Locations.push(this);
}

LocationsHope.prototype.getRandomCustomerPerHours = function () {
  for (var i = 0; i < OpenHour.length; i++) {
    this.random_customers_per_hour1[i] = generateRandomNumber(this.min, this.max);
  }
};

LocationsHope.prototype.getcookies_purchased_Hour = function () {
  var iteration = 0;
  for (var i = 0; i < OpenHour.length; i++) {
    iteration = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
    this.cookies_purchased_Hour[i] = iteration;
    sum += iteration;
  }
  this.cookies_purchased_Hour.push(sum);

};

LocationsHope.prototype.render = function () {

  var DataRow = document.createElement('tr');
  table.appendChild(DataRow);


  var ListItemLocation = document.createElement('td');
  ListItemLocation.textContent = this.name;
  DataRow.appendChild(ListItemLocation);

  for (var j = 0; j < OpenHour.length-2; j++) {
    ListItemLocation = document.createElement('td');

    ListItemLocation.textContent = this.cookies_purchased_Hour[j];

    DataRow.appendChild(ListItemLocation);

  }

  ListItemLocation = document.createElement('td');
  ListItemLocation.textContent = this.cookies_purchased_Hour[this.cookies_purchased_Hour.length - 1];
  DataRow.appendChild(ListItemLocation);

};

//Creating Objects Using constructor

var Seattle = new LocationsHope('Seattle', 65, 23, 6.3, [], []);
var Tokyo = new LocationsHope('Tokyo', 24, 3, 1.2, [], []);
var Dubai = new LocationsHope('Dubai', 38, 11, 3.7, [], []);
var Paris = new LocationsHope('Paris', 38, 20, 2.3, [], []);
var Lima = new LocationsHope('Lima', 16, 2, 4.6, [], []);


Seattle.getRandomCustomerPerHours();
Seattle.getcookies_purchased_Hour();

Tokyo.getRandomCustomerPerHours();
Tokyo.getcookies_purchased_Hour();

Dubai.getRandomCustomerPerHours();
Dubai.getcookies_purchased_Hour();

Paris.getRandomCustomerPerHours();
Paris.getcookies_purchased_Hour();

Lima.getRandomCustomerPerHours();
Lima.getcookies_purchased_Hour();


var mainid = document.getElementById('main');
var table = document.createElement('table');
mainid.appendChild(table);

var DataRow = document.createElement('tr');
table.appendChild(DataRow);

for (var out = 0; out < OpenHour.length; out++) {
  var ListItemLocation = document.createElement('td');
  ListItemLocation.textContent = this.OpenHour[out];
  DataRow.appendChild(ListItemLocation);
}


for (var t = 0; t < Locations.length; t++) {

  Locations[t].render();
}

DataRow = document.createElement('tr');
table.appendChild(DataRow);

for (var tot = 0; tot < Locations.length; tot++) {

  //Locations[t].render();
}


function generateRandomNumber(min, max) {

  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;

}




















// var Seattle = {

//   name: 'Seattle',
//   Max: 65,
//   Min: 23,
//   average_cookies_per_customer: 6.3,
//   // random_customers_per_hour: generateRandomNumber(23,65),
//   // cookies_purchased_Hour:generateRandomNumber(2,200) ,
//   random_customers_per_hour1: [],
//   cookies_purchased_Hour: [],
//   getRandomCustomerPerHours: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
//     }


//   },

//   getcookies_purchased_Hour: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
//     }

//   },

//   render: function () {

//     var Parent_main = document.getElementById('main');

//     var LocatoinName = document.createElement('h2');
//     LocatoinName.textContent = this.name;
//     Parent_main.appendChild(LocatoinName);

//     var unorderlistDeatilsHour = document.createElement('ul');
//     Parent_main.appendChild(unorderlistDeatilsHour);
//     for (var j = 0; j < OpenHour.length; j++) {
//       var ListItemLocation = document.createElement('li');

//       ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];

//       unorderlistDeatilsHour.appendChild(ListItemLocation);
//     }
//   }

// };



///////////////////////////////////////        [Tokyo]      /////////////////////////////////////////////////


// var Tokyo = {

//   name: 'Tokyo',
//   Max: 24,
//   Min: 3,
//   average_cookies_per_customer: 1.2,
//   // random_customers_per_hour: generateRandomNumber(23,65),
//   // cookies_purchased_Hour:generateRandomNumber(2,200) ,
//   random_customers_per_hour1: [],
//   cookies_purchased_Hour: [],
//   getRandomCustomerPerHours: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
//     }


//   },

//   getcookies_purchased_Hour: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
//     }

//   },

//   render: function () {

//     var Parent_main = document.getElementById('main');

//     var LocatoinName = document.createElement('h2');
//     LocatoinName.textContent = this.name;
//     Parent_main.appendChild(LocatoinName);

//     var unorderlistDeatilsHour = document.createElement('ul');
//     Parent_main.appendChild(unorderlistDeatilsHour);
//     for (var j = 0; j < OpenHour.length; j++) {
//       var ListItemLocation = document.createElement('li');

//       ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];

//       unorderlistDeatilsHour.appendChild(ListItemLocation);
//     }
//   }

// };



///////////////////////////////////////        [Dubai]      /////////////////////////////////////////////////


// var Dubai = {

//   name: 'Dubai',
//   Max: 38,
//   Min: 11,
//   average_cookies_per_customer: 3.7,
//   // random_customers_per_hour: generateRandomNumber(23,65),
//   // cookies_purchased_Hour:generateRandomNumber(2,200) ,
//   random_customers_per_hour1: [],
//   cookies_purchased_Hour: [],
//   getRandomCustomerPerHours: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
//     }


//   },

//   getcookies_purchased_Hour: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
//     }

//   },

//   render: function () {

//     var Parent_main = document.getElementById('main');

//     var LocatoinName = document.createElement('h2');
//     LocatoinName.textContent = this.name;
//     Parent_main.appendChild(LocatoinName);

//     var unorderlistDeatilsHour = document.createElement('ul');
//     Parent_main.appendChild(unorderlistDeatilsHour);
//     for (var j = 0; j < OpenHour.length; j++) {
//       var ListItemLocation = document.createElement('li');

//       ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];

//       unorderlistDeatilsHour.appendChild(ListItemLocation);
//     }
//   }

// };



///////////////////////////////////////        [Paris]      /////////////////////////////////////////////////


// var Paris = {

//   name: 'Paris',
//   Max: 38,
//   Min: 20,
//   average_cookies_per_customer: 2.3,
//   // random_customers_per_hour: generateRandomNumber(23,65),
//   // cookies_purchased_Hour:generateRandomNumber(2,200) ,
//   random_customers_per_hour1: [],
//   cookies_purchased_Hour: [],
//   getRandomCustomerPerHours: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
//     }


//   },

//   getcookies_purchased_Hour: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
//     }

//   },

//   render: function () {

//     var Parent_main = document.getElementById('main');

//     var LocatoinName = document.createElement('h2');
//     LocatoinName.textContent = this.name;
//     Parent_main.appendChild(LocatoinName);

//     var unorderlistDeatilsHour = document.createElement('ul');
//     Parent_main.appendChild(unorderlistDeatilsHour);
//     for (var j = 0; j < OpenHour.length; j++) {
//       var ListItemLocation = document.createElement('li');

//       ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];

//       unorderlistDeatilsHour.appendChild(ListItemLocation);
//     }
//   }

// };




///////////////////////////////////////        [Lima]      /////////////////////////////////////////////////


// var Lima = {

//   name: 'Lima',
//   Max: 16,
//   Min: 2,
//   average_cookies_per_customer: 4.6,
//   // random_customers_per_hour: generateRandomNumber(23,65),
//   // cookies_purchased_Hour:generateRandomNumber(2,200) ,
//   random_customers_per_hour1: [],
//   cookies_purchased_Hour: [],
//   getRandomCustomerPerHours: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
//     }


//   },

//   getcookies_purchased_Hour: function () {

//     for (var i = 0; i < OpenHour.length; i++) {
//       this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
//     }

//   },

//   render: function () {

//     var Parent_main = document.getElementById('main');

//     var LocatoinName = document.createElement('h2');
//     LocatoinName.textContent = this.name;
//     Parent_main.appendChild(LocatoinName);

//     var unorderlistDeatilsHour = document.createElement('ul');
//     Parent_main.appendChild(unorderlistDeatilsHour);
//     for (var j = 0; j < OpenHour.length; j++) {
//       var ListItemLocation = document.createElement('li');

//       ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];

//       unorderlistDeatilsHour.appendChild(ListItemLocation);
//     }
//   }

// };



// Seattle.getRandomCustomerPerHours();
// Seattle.getcookies_purchased_Hour();
// Seattle.render();


// Tokyo.getRandomCustomerPerHours();
// Tokyo.getcookies_purchased_Hour();
// Tokyo.render();


// Dubai.getRandomCustomerPerHours();
// Dubai.getcookies_purchased_Hour();
// Dubai.render();

// Paris.getRandomCustomerPerHours();
// Paris.getcookies_purchased_Hour();
// Paris.render();


// Lima.getRandomCustomerPerHours();
// Lima.getcookies_purchased_Hour();
// Lima.render();


