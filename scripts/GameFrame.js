var Level = require("./Level")

var GameFrame = React.createClass({
    render: function() {
        return (
            <div id="game-frame">
                <Level/>
            </div>
        )
    }
})

module.exports = GameFrame
