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
            this.state.position.x = (state.position.x - (2 * 3)) * -1
            this.state.position.x = Math.min(this.state.position.x, 0)
            this.state.position.x = Math.max(this.state.position.x, -60)
            this.trigger(this.state)
        }.bind(this))
    }
})

module.exports = CameraStore