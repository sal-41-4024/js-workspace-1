const characters = [
  {name: 'мечник', health: 10},
  {name: 'копейщик', health: 100},
  {name: 'копейщик', health: 0},
  {name: 'лучник', health: 0},
];

const alive = characters.filter(item => item.health > 0);
