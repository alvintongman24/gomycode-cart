//step 1
//add all the dom

// CAKE
ADD_Button1 = document.getElementById("add--1");
MINUS_Button1 = document.getElementById("minus--1");
CAKE_SUM = document.getElementById("sum--1");

//DONUT
ADD_Button4 = document.getElementById("add--4");
MINUS_Button4 = document.getElementById("minus--4");
DONUT_SUM = document.getElementById("sum--4");
// END OF DOM

//love
function changeColor() {
  document.getElementById("myHeading").style.color = "blue";
}

let RED1 = document.getElementById("RED");

//RED1
RED1.addEventListener("click", (e) => {
  console.log("yusuf");
  e.target.style.color = "red";
});

let RED2 = document.getElementById("RED2");
//RED2
RED2.addEventListener("click", (e) => {
  e.target.style.color = "red";
});

let RED3 = document.getElementById("RED3");
//RED2
RED3.addEventListener("click", (e) => {
  e.target.style.color = "red";
});

let RED4 = document.getElementById("RED4");
//RED2
RED4.addEventListener("click", (e) => {
  e.target.style.color = "red";
});

//A CARD
//step 2 : create a add function
//create a variable called a
var a = 0;

// step 2 : create a add function
const add1 = () => {
  a++;
  CAKE_SUM.innerText = a;
  SUBTOTAL_F();
};

//add a button eventlistner to link
ADD_Button1.addEventListener("click", add1);
//create a function and link it through eventlistner
const minus1 = () => {
  //create an ifelse statement to prevent anything less than 0 to be selected
  if (a > 0) {
    // make a -- in order to minus itself
    a--;
    CAKE_SUM.innerText = a; //innerhtml prints it when its clicked
  }
  SUBTOTAL_F();
};

MINUS_Button1.addEventListener("click", minus1);

// B CARD

//ICECREAM
ADD_Button2 = document.getElementById("add--2");
MINUS_Button2 = document.getElementById("minus--2");
ICECREAM_SUM = document.getElementById("sum--2");

//create a veriable
var b = 0;
//create a function for add
const ADD2 = () => {
  b++;
  ICECREAM_SUM.innerText = b;
  SUBTOTAL_F();
};
ADD_Button2.addEventListener("click", ADD2);

//create a function called miinus

const MINUS2 = () => {
  if (b > 0) {
    b--;
    ICECREAM_SUM.innerText = b;
  }
  SUBTOTAL_F();
};
MINUS_Button2.addEventListener("click", MINUS2);

// C CARD

//SHAWARMA
ADD_Button3 = document.getElementById("add--3");
MINUS_Button3 = document.getElementById("minus--3");
SHAWARMA_SUM = document.getElementById("sum--3");

var c = 0;
//function created adding shawama
const ADD3 = () => {
  c++;
  SHAWARMA_SUM.innerText = c;
  SUBTOTAL_F();
};
ADD_Button3.addEventListener("click", ADD3);

//Create a minus for shawarma
const MINUS3 = () => {
  if (c > 0) {
    c--;
    SHAWARMA_SUM.innerText = c;
  }
  SUBTOTAL_F();
};
MINUS_Button3.addEventListener("click", MINUS3);

// D CARD
//DONUT
ADD_Button4 = document.getElementById("add--4");
MINUS_Button4 = document.getElementById("minus--4");
DONUT_SUM = document.getElementById("sum--4");

//create an add function and link to a button

var d = 0;

const ADD4 = () => {
  d++;
  DONUT_SUM.innerText = d;
  SUBTOTAL_F();
};
ADD_Button4.addEventListener("click", ADD4);

//Create a minus for Donut
const MINUS4 = () => {
  if (d > 0) {
    d--;
    DONUT_SUM.innerText = d;
  }
  SUBTOTAL_F();
};
MINUS_Button4.addEventListener("click", MINUS4);

//add everything to the cart
// create a dom

var subtotal = document.getElementById("sub-total");

var totalAMOUNT = document.getElementById("total");

const SUBTOTAL_F = () => {
  var result = a + b + c + d;

  subtotal.innerText = result;

  totalAMOUNTA = a * 150;
  totalAMOUNTB = b * 30;
  totalAMOUNTC = c * 50;
  totalAMOUNTD = d * 20;

  ALL_TOTAL_AMOUNT = totalAMOUNTA + totalAMOUNTB + totalAMOUNTC + totalAMOUNTD;

  totalAMOUNT.innerText = totalAMOUNTA = ALL_TOTAL_AMOUNT;
};
SUBTOTAL_F();

//get the total

var totalAMOUNT = document.getElementById("total");

//  const lastElement = newplus[newplus.length - 1];

//step4 : create a link to total fuction of money

//step5 : realise the total when button is clicked

// Adjust the quantity of each item through  “+” and “-” buttons.
// Delete items from the cart.
// Like items through a clickable heart-shaped button that will change color accordingly.
// See the total price adjusted according to quantity and deletions.
// Use the CSS & the HTML provided HERE
// Apply the necessary JS DOM Events to  ensure that we can :
// Adjust the quantity of each item through  “+” and “-” buttons.
// Delete items from the cart.
// Like items through a clickable heart-shaped button that will change color accordingly.
// See the total price adjusted according to quantity and deletions.
