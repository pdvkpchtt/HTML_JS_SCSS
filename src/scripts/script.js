let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let mosterHealt;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const update = (location) => {};

const goStore = () => {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go back";

  button1.onclick = buyHealth;
  button2.onclick = byWeapon;
  button3.onclick = goBack;

  text.innerText = "You enter the store.";
};

const goCave = () => {
  console.log("goCave");
};

const fightDragon = () => {
  console.log("fightDragon");
};

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

const buyHealth = () => {
  console.log("buyHealth");
};

const byWeapon = () => {
  console.log("byWeapon");
};

const goBack = () => {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";

  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;

  text.innerText =
    "You are in the town square. You see a sign that says 'Store'.";
};
