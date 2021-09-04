// Initialize Firebase
var config = {
  apiKey: "AIzaSyDDZTCy0mfFO4eLyxWISIFEeEQWr489N5g",
  databaseURL: "https://final-year-projects-3fcc2-default-rtdb.firebaseio.com",
  authDomain: "final-year-projects-3fcc2.firebaseapp.com",
  projectId: "final-year-projects-3fcc2",
  storageBucket: "final-year-projects-3fcc2.appspot.com",
  messagingSenderId: "464384488915",
  appId: "1:464384488915:web:180bc90e2606b08b95eb26",
  measurementId: "G-705BWCDS9N",
};

firebase.initializeApp(config);

console.log(firebase);

function view() {
  var a = document.getElementById("exampleModalCenter");
  a.innerHTML;
}

function cal() {
  window.location.assign = "index.html";
  window.location.assign = "creat.html";
}
async function call() {
  var userdata = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  await firebase.database().ref("/").push(userdata);
}
async function data() {
  var userdata = {
    name: document.getElementById("name").value,
    lname: document.getElementById("lname").value,
    Email: document.getElementById("Email").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("cpassword").value,
  };

  await firebase.database().ref("/EMAIL").push(userdata);
}
async function order() {
  var order = {
    product: document.getElementById("product").value,
    Name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
  };
  await firebase.database().ref("/Order").push(order);
}
