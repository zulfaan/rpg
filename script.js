let xp = 0;
let healt = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory= ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealtText = document.querySelector("#monsterHealtText");
const locations = [
    {
        name: "town square",
        "button text": ["Go to Store", "Go to Cave", "Fight Dragon"],
        "button functions": [goStore, goCave, fightDragon] 
    }
]

// initialize button
button1.onclick =  goStore;button2.onclick =  goCave;button3.onclick =  fightDragon;

//create function
function update(location) {
    
}
function goTown() {
    button1.innerText = "Go to Store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight Dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"store\"."
}
function goStore() {
    button1.innerText = "Buy Healt";
    button2.innerText = "Buy Weapon";
    button3.innerText = "Go to Town Square";
    button1.onclick = buyHealt;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You are in the town square."
}
function goCave() {
    console.log("Going to Cave.")
}
function fightDragon() {
    console.log("Fighting Dragon.")
}
function buyHealt() {
    
}
function buyWeapon() {
    
}