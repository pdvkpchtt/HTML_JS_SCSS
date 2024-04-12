let xp = 0;
let health = 100;
let gold = 500;
let currentWeapon = 0;
let fighting;
let mosterHealt;
let inventory = ["stick"];

if (!localStorage.getItem("gameData")) {
  localStorage.setItem(
    "gameData",
    JSON.stringify({
      xp: 0,
      health: 100,
      gold: 500,
      currentWeapon: 0,
      inventory: ["stick"],
    })
  );
} else {
  xp = JSON.parse(localStorage.getItem("gameData")).xp;
  health = JSON.parse(localStorage.getItem("gameData")).health;
  gold = JSON.parse(localStorage.getItem("gameData")).gold;
  currentWeapon = JSON.parse(localStorage.getItem("gameData")).currentWeapon;
  inventory = JSON.parse(localStorage.getItem("gameData")).inventory;
}

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const buttonSave = document.querySelector("#buttonSave");
const buttonLoad = document.querySelector("#buttonLoad");
const buttonCloseModal = document.querySelector("#buttonCloseModal");
const text = document.querySelector("#text");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

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
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
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

const locations2 = [
  {
    name: "pannel",
    "button text": ["Inventory"],
    "button functions": [showInventory],
    text: `Here you can manage your character.`,
  },
  {
    name: "inventory",
    "button text": ["Back"],
    "button functions": [exitInventory],
    text: `Inventory:\n${inventory.map(
      (i, index) => `${i}${index !== inventory?.length - 1 ? ", " : ""}`
    )}`,
  },
];

goldText.innerText = gold;
xpText.innerText = xp;
healthText.innerText = health;
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
button4.onclick = showInventory;
buttonSave.onclick = () => handleSaves("save");
buttonLoad.onclick = () => handleSaves("load");
buttonCloseModal.onclick = () =>
  document.querySelector("#modal").classList.add("hidden");

function handleSaves(prop) {
  if (prop === "save") {
    localStorage.setItem(
      "gameData",
      JSON.stringify({
        xp: xp,
        health: health,
        gold: gold,
        currentWeapon: currentWeapon,
        inventory: inventory,
      })
    );
    text3.innerText = "Game saved successfully";
    document.querySelector("#modal").classList.remove("hidden");
  } else {
    xp = JSON.parse(localStorage.getItem("gameData")).xp;
    health = JSON.parse(localStorage.getItem("gameData")).health;
    gold = JSON.parse(localStorage.getItem("gameData")).gold;
    currentWeapon = JSON.parse(localStorage.getItem("gameData")).currentWeapon;
    inventory = JSON.parse(localStorage.getItem("gameData")).inventory;

    healthText.innerText = health;
    xpText.innerText = xp;
    goldText.innerText = gold;

    document.querySelector("#modal").classList.remove("hidden");
    text3.innerText = "Game loaded successfully";
  }
}

function update(location) {
  [button1, button2, button3].map((i, index) => {
    i.innerText = location["button text"][index];
    i.onclick = location["button functions"][index];
  });

  text.innerText = location.text;
}

function update2(location) {
  [button4].map((i, index) => {
    i.innerText = location["button text"][index];
    i.onclick = location["button functions"][index];
  });

  text2.innerText = location.text;
}

function showInventory() {
  update2(locations2.find((i) => i.name === "inventory"));
}

function exitInventory() {
  update2(locations2.find((i) => i.name === "pannel"));
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

function fightSlime() {
  console.log("fightSlime");
}
function fightBeast() {
  console.log("fightBeast");
}

function buyHealth() {
  if (gold < 10) {
    text.innerText = "You do not have enough gold to buy health";
    return;
  }

  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
  text.innerText = "You've restored 10 HP";
}

function buyWeapon() {
  if (gold < 30) {
    text.innerText = "You do not have enough gold to buy weapon";
    return;
  }

  if (currentWeapon === weapons?.length - 1) {
    text.innerText = "You already have best weapon in a game";
    return;
  }

  gold -= 30;
  currentWeapon += 1;
  goldText.innerText = gold;
  text.innerText = `You now have a ${weapons[currentWeapon].name}`;
  inventory.push(weapons[currentWeapon].name);
}
