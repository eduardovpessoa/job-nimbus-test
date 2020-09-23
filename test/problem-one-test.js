const problemOne = require('../problem-one');

var assert = require('assert');
describe('Problem One', function () {
    describe('#verifyBrackets(text) - should return true when brackets are matching and false when not', function () {
        it('should return true when value is {}', function () {
            assert.strictEqual(problemOne.verifyBrackets("{}"), true);
        });
        it('should return false when value is }{', function () {
            assert.strictEqual(problemOne.verifyBrackets("}{"), false);
        });
        it('should return false when value is {{}', function () {
            assert.strictEqual(problemOne.verifyBrackets("{{}"), false);
        });
        it('should return true when value is ""', function () {
            assert.strictEqual(problemOne.verifyBrackets(""), true);
        });
        it('should return true when value is abc123!@#', function () {
            assert.strictEqual(problemOne.verifyBrackets("abc123!@#"), true);
        });
        it('should return true when value is {{{{{}}}}}', function () {
            assert.strictEqual(problemOne.verifyBrackets("{{{{{}}}}}"), true);
        });
        it('should return true when value is {abc123test}', function () {
            assert.strictEqual(problemOne.verifyBrackets("{abc123test}"), true);
        });
        it('should return true when value is {text{inside{{brackets}}}}', function () {
            assert.strictEqual(problemOne.verifyBrackets("{text{inside{{brackets}}}}"), true);
        });
        it('should return false when value is {text{inside}{brackets}', function () {
            assert.strictEqual(problemOne.verifyBrackets("{text{inside}{brackets}"), false);
        });
        it('should return false when value is { { } } }', function () {
            assert.strictEqual(problemOne.verifyBrackets("{ { } } }"), false);
        });
    });
});