var Keychain = {
    KeystrokeActionsMixin: function(actions) {
        return {
            componentDidMount: function() {
                for(var keystring in actions) {
                    var action = actions[keystring]
                    Keychain.bindAction(keystring, action)
                }
            },
            componentDidUnmount: function() {
                for(var keystring in actions) {
                    var action = actions[keystring]
                    Keychain.unbindAction(keystring, action)
                }
            }
        }
    },
    bindAction: function(keyString, action) {
        var keyCode = this.getKeyCode(keyString)
        if(this.actions[keyCode] == null) {
            this.actions[keyCode] = [
                action
            ]
        } else {
            this.actions[keyCode].push(action)
        }
    },
    unbindAction: function(keyString, action) {
        var keyCode = this.getKeyCode(keyString)
        if(this.actions[keyCode] != null) {
            var index = this.actions[keyCode].indexOf(action)
            if(index != -1) {
                this.actions[keyCode].splice(index, 1)
            }
        }
    },
    actions: new Object(),
    
    strokeKey: function(keyCode) {
        if(this.strokes[keyCode] == null) {
            this.strokes[keyCode] = true
            if(this.actions[keyCode]) {
                var actions = this.actions[keyCode]
                for(var index in actions) {
                    actions[index]()
                }
            }
        }
    },
    unstrokeKey: function(keyCode) {
        if(this.strokes[keyCode] != null) {
            this.strokes[keyCode] = false
            delete this.strokes[keyCode]
        }
    },
    strokes: new Object(),
    
    getKeyCode: function(keyString) {
        if(isNaN(keyString)) {
            if(this.keyCodes[keyString]) {
                return this.keyCodes[keyString]
            } else {
                throw keyString + " is not a keystring."
            }
        }
        return keyString
    },
    keyCodes: {
        "backspace":    8,
        "tab":          9,
        "enter":        13,
        "return":       13,
        "shift":        16,
        "ctrl":         17,
        "alt":          18,
        "pause":        19,
        "break":        19,
        "caps lock":    20,
        "escape":       27,
        "space bar":    32,
        "page up":      33,
        "page down":    34,
        "end":          35,
        "home":         36,
        "left arrow":   37,
        "up arrow":     38,
        "right arrow":  39,
        "down arrow":   40,
        "insert":       45,
        "delete":       46,
        "0":            48,
        "1":            49,
        "2":            50,
        "3":            51,
        "4":            52,
        "5":            53,
        "6":            54,
        "7":            55,
        "8":            56,
        "9":            57,
        "a":            65,
        "b":            66,
        "c":            67,
        "d":            68,
        "e":            69,
        "f":            70,
        "g":            71,
        "h":            72,
        "i":            73,
        "j":            74,
        "k":            75,
        "l":            76,
        "m":            77,
        "n":            78,
        "o":            79,
        "p":            80,
        "q":            81,
        "r":            82,
        "s":            83,
        "t":            84,
        "u":            85,
        "v":            86,
        "w":            87,
        "x":            88,
        "y":            89,
        "z":            90,
        "left window":  91,
        "right window": 92,
        "select":       93,
        "numpad 0":     96,
        "numpad 1":     97,
        "numpad 2":     98,
        "numpad 3":     99,
        "numpad 4":     100,
        "numpad 5":     101,
        "numpad 6":     102,
        "numpad 7":     103,
        "numpad 8":     104,
        "numpad 9":     105,
        "numpad *":     106,
        "numpad +":     107,
        "numpad -":     109,
        "numpad .":     110,
        "numpad /":     111,
        "f1":           112,
        "f2":           113,
        "f3":           114,
        "f4":           115,
        "f5":           116,
        "f6":           117,
        "f7":           118,
        "f8":           119,
        "f9":           120,
        "f10":          121,
        "f11":          122,
        "f12":          123,
        "num lock":     144,
        "scroll lock":  145,
        ",":            186,
        "=":            187,
        ",":            188,
        "-":            189,
        ".":            190,
        "/":            191,
        "`":            192,
        "[":            219,
        "\\":           220,
        "]":            221,
        "'":            222
    }
}

document.addEventListener("keydown", function(event) {
    Keychain.strokeKey(event.keyCode)
})

document.addEventListener("keyup", function(event) {
    Keychain.unstrokeKey(event.keyCode)
})

module.exports = Keychain;