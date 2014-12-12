var GameFrame = React.createClass({
    getInitialState: function() {
        return {
            currentGamestate: TitlescreenGamestate
        }
    },
    render: function() {
        var Gamestate = this.state.currentGamestate
        return (
            <div id="game-frame">
                <Gamestate/>
            </div>
        )
    }
})

var TitlescreenGamestate = React.createClass({
    render: function() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
})

var PlayingGamestate = React.createClass({
    render: function() {
        return (
            <div>
                Goodbye World!
            </div>
        )
    }
})

module.exports = GameFrame
