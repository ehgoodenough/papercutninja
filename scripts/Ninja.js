var Ninja = React.createClass({
    getInitialState: function() {
        return {
            position: {
                x: 1,
                y: 1
            },
            velocity: {
                x: 1,
                y: 1,
            }
        }
    },
    render: function() {
        var style = {
            left: this.state.position.x + "rem",
            top: this.state.position.y + "rem"
        }
        return (
            <div id="ninja" style={style} onClick={this.onClick}></div>
        )
    },
    onClick: function() {
        this.state.position.x += this.state.velocity.x
        this.forceUpdate()
    }
})

module.exports = Ninja
