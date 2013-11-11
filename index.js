var functions = require('rework').functions,
    Color = require('color');

module.exports = function() {
    return functions({

        lighten: function(color, amount) {
            return Color(color).lighten(amount).hslaString();
        },

        darken: function(color, amount) {
            return Color(color).darken(amount).hslaString();
        }
    });
};
