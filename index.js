window.React = require("react")
window.Reflux = require("reflux")

var KeyboardListener = require("./scripts/KeyboardListener")

var GameFrame = require("./scripts/GameFrame.js")
React.render(<GameFrame/>, document.body)
