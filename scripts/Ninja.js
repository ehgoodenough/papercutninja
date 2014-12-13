var Keychain = require("./Keychain")
var NinjaStore = require("./NinjaStore")
var NinjaActions = require("./NinjaActions")

var Ninja = React.createClass({
    mixins: [
        Reflux.connect(NinjaStore),
        Keychain.KeystrokeActionsMixin({
            "up arrow": NinjaActions.MoveNorth,
            "down arrow": NinjaActions.MoveSouth,
            "right arrow": NinjaActions.MoveEast,
            "left arrow": NinjaActions.MoveWest
        })
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
