var Ninja = React.createClass({
    getInitialState: function() {
        return {
            position: {
                x: 1,
                y: 1
            },
            velocity: {
                x: 2,
                y: 2,
            }
        }
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
