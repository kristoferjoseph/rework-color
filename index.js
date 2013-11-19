var functions = require('rework').functions,
    Color = require('color');

module.exports = function() {
    return functions({

        lighten: function(color, amount) {
            return Color(color).lighten(amount).hslaString();
        },

        darken: function(color, amount) {
            return Color(color).darken(amount).hslaString();
        },

        invert: function(color) {
            var tmp = Color(color);
            return Color({
                  r: 255 - tmp.red(),
                  g: 255 - tmp.green(),
                  b: 255 - tmp.blue(),
                  a: tmp.alpha()
                }).hslaString();
        }
    });
};
