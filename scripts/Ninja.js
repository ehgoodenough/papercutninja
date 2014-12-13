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
        var styles = {
            left: this.state.position.x + "rem",
            top: this.state.position.y + "rem"
        }
        return (
            <div id="ninja" style={styles}>
            </div>
        )
    }
})

module.exports = Ninja
