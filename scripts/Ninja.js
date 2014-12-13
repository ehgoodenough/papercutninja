var KeyboardListener = require("./KeyboardListener")

KeyboardListener.addKeyEvent("space bar", function() {
    NinjaStore.setState()
})

var NinjaStore = Reflux.createStore({
    state: {
        position: {
            x: 1,
            y: 1
        },
        velocity: {
            x: 2,
            y: 2
        }
    },
    setState: function() {
        this.state.position.x += this.state.velocity.x
        this.trigger(this.state)
    },
    getState: function() {
        return this.state;
    },
    getInitialState: function() {
        return this.state;
    }
})

var Ninja = React.createClass({
    mixins: [
        Reflux.connect(NinjaStore)
    ],
    render: function() {
        var style = {
            left: this.state.position.x + "rem",
            top: this.state.position.y + "rem"
        }
        return (
            <div id="ninja" style={style}></div>
        )
    }
})

module.exports = Ninja
