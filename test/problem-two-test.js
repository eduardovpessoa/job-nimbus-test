const problemTwo = require('../problem-two');

var assert = require('assert');
describe('Problem Two', function () {
    describe('#sumMultiples(interval) - should return the sum of multiples of 3 and 5 according to the interval', function () {
        it('should return 23 when interval is 10', function () {
            assert.strictEqual(problemTwo.sumMultiples(10), 23);
        });
        it('should return 2318 when interval is 100', function () {
            assert.strictEqual(problemTwo.sumMultiples(100), 2318);
        });
        it('should return 78 when interval is 20', function () {
            assert.strictEqual(problemTwo.sumMultiples(20), 78);
        });
        it('should return 98 when interval is 21', function () {
            assert.strictEqual(problemTwo.sumMultiples(21), 98);
        });
        it('should return 233168 when interval is 1000', function () {
            assert.strictEqual(problemTwo.sumMultiples(1000), 233168);
        });
    });
});