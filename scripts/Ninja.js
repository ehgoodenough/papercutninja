var KeyboardListener = require("./KeyboardListener")

KeyboardListener.addKeyEvent("space bar", function() {
    NinjaModel.state.position.x += NinjaModel.state.velocity.x
    NinjaModel.alertListeners()
})

var NinjaModel = {
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
    getState: function() {
        return this.state;
    },
    addListener: function(listener) {
        this.listeners.push(listener)
        listener(this.state)
    },
    alertListeners: function() {
        for(var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i]
            listener(this.state)
        }
    },
    listeners: new Array()
}

var Ninja = React.createClass({
    getInitialState: function() {
        return NinjaModel.getState()
    },
    componentWillMount: function() {
        NinjaModel.addListener(function(state) {
            this.setState(state)
        }.bind(this))
    },
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
