var Ninja = require("./Ninja")
var CameraStore = require("./CameraStore")

var GameScene = React.createClass({
    mixins: [
        Reflux.connect(CameraStore)
    ],
    render: function() {
        var style = {
            left: this.state.position.x + "rem"
        }
        return (
            <div className="game-scene" style={style}>
                <Ninja/>
            </div>
        )
    }
})

module.exports = GameScene
