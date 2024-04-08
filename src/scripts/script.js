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

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  // {
  // 	name: "cave",
  // 	"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
  // 	"button functions": [fightSlime, fightBeast, goTown],
  // 	text: "You enter the cave. You see some monsters."
  // },
  // {
  // 	name: "fight",
  // 	"button text": ["Attack", "Dodge", "Run"],
  // 	"button functions": [attack, dodge, goTown],
  // 	text: "You are fighting a monster."
  // },
  // {
  // 	name: "kill monster",
  // 	"button text": ["Go to town square", "Go to town square", "Go to town square"],
  // 	"button functions": [goTown, goTown, easterEgg],
  // 	text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  // },
  // {
  // 	name: "lose",
  // 	"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  // 	"button functions": [restart, restart, restart],
  // 	text: "You die. ☠️"
  // },
  // {
  // 	name: "win",
  // 	"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  // 	"button functions": [restart, restart, restart],
  // 	text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
  // },
  // {
  // 	name: "easter egg",
  // 	"button text": ["2", "8", "Go to town square?"],
  // 	"button functions": [pickTwo, pickEight, goTown],
  // 	text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  // }
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  [button1, button2, button3].map((i, index) => {
    i.innerText = location["button text"][index];
    i.onclick = location["button functions"][index];
  });

  text.innerText = location.text;
}

function goStore() {
  update(locations.find((i) => i.name === "store"));
}

function goCave() {
  console.log("goCave");
}

function goTown() {
  update(locations.find((i) => i.name === "town square"));
}

function fightDragon() {
  console.log("fightDragon");
}

function buyHealth() {
  console.log("buyHealth");
}

function buyWeapon() {
  console.log("buyWeapon");
}
