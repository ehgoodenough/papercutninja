var KeyboardListener = require("./KeyboardListener")

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

var NinjaStore = Reflux.createStore({
    state: {
        position: {
            x: 0,
            y: 0
        },
        velocity: 2
    },
    listenables: NinjaActions,
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
    getInitialState: function() {
        return this.state;
    }
})

var Ninja = React.createClass({
    mixins: [
        Reflux.connect(NinjaStore)
    ],
    componentDidMount: function() {
        KeyboardListener.addKeyEvent("up arrow", NinjaActions["MoveNorth"])
        KeyboardListener.addKeyEvent("down arrow", NinjaActions["MoveSouth"])
        KeyboardListener.addKeyEvent("right arrow", NinjaActions["MoveEast"])
        KeyboardListener.addKeyEvent("left arrow", NinjaActions["MoveWest"])
        //todo: unsubscribe on unmount?
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
