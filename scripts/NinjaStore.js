var NinjaActions = require("./NinjaActions")

var NinjaStore = Reflux.createStore({
    state: {
        position: {
            x: 0, //3,
            y: 0 //5
        },
        velocity: 1
    },
    getState: function() {
        return this.state
    },
    getInitialState: function() {
        return this.state
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
