let AdventurePlayerObject = AdventurePlayerObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Player = AdventurePlayerObject
  let Screen = AdventureScreenObject
  let Game = AdventureGameObject
  Player.inventory = []
  Player.listInventory = function () {
    Player.items.forEach((item) => {
      Screen.displayConsoleMessage(item.name)
    })
  }
})()