const characters = [
  {name: 'мечник', health: 100},
  {name: 'копейщик', health: 100},
  {name: 'копейщик', health: 100},
  {name: 'лучник', health: 100},
];

const alive = characters.filter(item => item.health > 0);
