var NinjaStore = require("./NinjaStore")

var LEVEL_WIDTH = 60;

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
            console.log(this.state.position.x)
            if(this.state.position.x > 0) {
                this.state.position.x = 0
            }
            if(this.state.position.x < LEVEL_WIDTH * -1) {
                this.state.position.x = LEVEL_WIDTH * -1
            }
            this.trigger(this.state)
        }.bind(this))
    }
})

module.exports = CameraStore