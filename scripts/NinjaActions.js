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

NinjaActions.MoveNorth.shouldEmit = function() {
    var NinjaStore = require("./NinjaStore")
    return NinjaStore.getState().position.y - 1 >= 0
}

NinjaActions.MoveSouth.shouldEmit = function() {
    var NinjaStore = require("./NinjaStore")
    return NinjaStore.getState().position.y + 1 < 15
}

NinjaActions.MoveEast.shouldEmit = function() {
    var NinjaStore = require("./NinjaStore")
    return NinjaStore.getState().position.x + 1 < 40
}

NinjaActions.MoveWest.shouldEmit = function() {
    var NinjaStore = require("./NinjaStore")
    return NinjaStore.getState().position.x - 1 >= 0
}

module.exports = NinjaActions
