window.React = require("react")
window.Reflux = require("reflux")
window.Keychain = require("./scripts/Keychain")

var GameFrame = require("./scripts/GameFrame.js")
React.render(<GameFrame/>, document.body)
