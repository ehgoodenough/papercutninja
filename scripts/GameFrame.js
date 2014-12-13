var Ninja = require("./Ninja");

var GameFrame = React.createClass({
    render: function() {
        return (
            <div id="game-frame">
                <Ninja/>
            </div>
        )
    }
})

module.exports = GameFrame
