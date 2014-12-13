var GameScene = require("./GameScene")

var GameFrame = React.createClass({
    render: function() {
        return (
            <div id="game-frame">
                <GameScene/>
            </div>
        )
    }
})

module.exports = GameFrame
