var rework = require('rework'),
    vars = require('rework-vars'),
    assert = require('assert'),
    read = require('fs').readFileSync,
    mkdirp = require('mkdirp'),
    color = require('..');

describe('rework-color', function() {

    before(function() {
        mkdirp.sync('tmp');
    });

    it('should lighten', function() {
        var actual = rework(read('test/fixtures/lighten.fixture.css', 'utf8'))
            .use(vars())
            .use(color())
            .toString(),
            expected = read('test/expected/lighten.expected.css', 'utf8')
                .toString()
                .trim();

        assert.equal(actual, expected, 'colors should match expected lighten result');
    });

    it('should darken', function() {
        var actual = rework(read('test/fixtures/darken.fixture.css', 'utf8'))
            .use(vars())
            .use(color())
            .toString(),
            expected = read('test/expected/darken.expected.css', 'utf8')
                .toString()
                .trim();

        assert.equal(actual, expected, 'colors should match expected darken result');
    });

    it('should invert', function() {
        var actual = rework(read('test/fixtures/invert.fixture.css', 'utf8'))
            .use(color())
            .toString(),
            expected = read('test/expected/invert.expected.css', 'utf8')
                .toString()
                .trim();

        assert.equal(actual, expected, 'colors should match invert result');
    });

    it('should do correct hsla conversion', function() {
        var actual = rework(read('test/fixtures/hsla.fixture.css', 'utf8'))
            .use(color())
            .toString(),
            expected = read('test/expected/hsla.expected.css', 'utf8')
                .toString()
                .trim();

        assert.equal(actual, expected, 'colors should match hsla conversion result');
    });
});
