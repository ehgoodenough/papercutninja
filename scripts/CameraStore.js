var NinjaStore = require("./NinjaStore")

var CameraStore = Reflux.createStore({
    state: {
        position: {
            x: 0,
            y: 0
        }
    },
    getInitialState: function() {
        return this.state
    },
    init: function() {
        this.listenTo(NinjaStore, function(state) {
            this.state.position.x = state.position.x * -1
            this.trigger(this.state)
        }.bind(this))
    }
})

module.exports = CameraStore