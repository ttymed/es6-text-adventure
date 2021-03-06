let AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  let Game = AdventureGameObject
  var commands = {
    'go': 'changeLocation',
    'move': 'changeLocation',
    'walk': 'changeLocation',
    'take': 'obtain',
    'grab': 'obtain',
    'pick': 'obtain',
    'choose': 'action',
    'select': 'action',
    'equip': 'equip',
    'wear': 'equip',
    'don': 'equip',
    'put on': 'equip',
    'remove': 'unequip',
    'unequip': 'unequip',
    'look': 'examine',
    'examine': 'examine',
    'inspect': 'examine',
    'watch': 'examine',
    'use': 'activate',
    'activate': 'activate',
    'turn on': 'activate'
  }
  Game.commands = commands
})()
