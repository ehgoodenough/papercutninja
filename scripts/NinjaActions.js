var NinjaStore = require("./NinjaStore")

var NinjaActions = Reflux.createActions([
    "MoveNorth",
    "MoveSouth",
    "MoveEast",
    "MoveWest",
    "MoveNortheast",
    "MoveNorthwest",
    "MoveSoutheast",
    "MoveSouthwest"
])

NinjaActions.MoveNorth.preEmit = function() {
    console.log(NinjaStore)
}

module.exports = NinjaActions
