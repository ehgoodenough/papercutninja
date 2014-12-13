var Ninja = require("./Ninja")
var CameraStore = require("./CameraStore")

var Level = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
    ],
    render: function() {
        var style = {
            left: this.state.camera.position.x + "rem"
        }
        return (
            <div className="level" style={style}>
                <Ninja/>
            </div>
        )
    }
})

module.exports = Level;