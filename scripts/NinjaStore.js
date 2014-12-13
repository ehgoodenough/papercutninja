var NinjaActions = require("./NinjaActions")

var UNIT = 2;

var NinjaStore = Reflux.createStore({
    state: {
        position: {
            x: 3 * UNIT,
            y: 5 * UNIT
        },
        velocity: UNIT
    },
    getInitialState: function() {
        return this.state;
    },
    onMoveNorth: function() {
        this.state.position.y -= this.state.velocity
        this.trigger(this.state)
    },
    onMoveSouth: function() {
        this.state.position.y += this.state.velocity
        this.trigger(this.state)
    },
    onMoveEast: function() {
        this.state.position.x += this.state.velocity
        this.trigger(this.state)
    },
    onMoveWest: function() {
        this.state.position.x -= this.state.velocity
        this.trigger(this.state)
    },
    listenables: NinjaActions
})

module.exports = NinjaStore