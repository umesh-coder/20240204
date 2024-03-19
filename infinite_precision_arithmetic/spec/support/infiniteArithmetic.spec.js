const InfiniteArithmetic = require('../../infiniteArithmetic')

describe('Infinite Arithmetic Operations', () => {
    let infiniteArithmetic;

    beforeEach(() => {
        infiniteArithmetic = new InfiniteArithmetic();
    });

    describe('Addition', () => {
        it('should correctly add two arrays of numbers', () => {
            const result = infiniteArithmetic.addition([1, 2], [1, 0]);
            expect(result).toEqual([2, 2]);
        });

        it('should correctly add arrays with different lengths', () => {
            const result = infiniteArithmetic.addition([1, 2, 3], [9, 8]);
            expect(result).toEqual([1, 3, 1]);
        });

        it('should handle addition of arrays with leading zeros', () => {
            const result = infiniteArithmetic.addition([0, 1, 0], [0, 0, 1]);
            expect(result).toEqual([0, 1, 1]);
        });

        it('should correctly add arrays with negative numbers', () => {
            const result = infiniteArithmetic.addition([1, 2, 3], [-1, 0, 1]);
            expect(result).toEqual([1, 1, 4]);
        });
    });

    describe('Subtraction', () => {
        it('should correctly subtract two arrays of numbers', () => {
            const result = infiniteArithmetic.subtraction([1, 2, 7], [1, 0]);
            expect(result).toEqual([1, 1, 7]);
        });

        it('should correctly subtract arrays with different lengths', () => {
            const result = infiniteArithmetic.subtraction([1, 2, 7], [1, 0, 0]);
            expect(result).toEqual([0, 2, 7]);
        });

        it('should handle subtraction resulting in negative numbers', () => {
            const result = infiniteArithmetic.subtraction([1, 0], [2, 0]);
            expect(result).toEqual([-1, 0]);
        });
    });

    describe('Multiplication', () => {
        it('should correctly multiply two arrays of numbers', () => {
            const result = infiniteArithmetic.multiply([1, 0], [2, 0]);
            expect(result).toEqual([2, 0, 0]);
        });

        it('should correctly multiply arrays with different lengths', () => {
            const result = infiniteArithmetic.multiply([1, 2], [1, 0, 0]);
            expect(result).toEqual([1, 2, 0, 0]);
        });

        it('should handle multiplication by zero', () => {
            const result = infiniteArithmetic.multiply([1, 0], [0]);
            expect(result).toEqual([0]);
        });

        it('should handle multiplication of negative numbers', () => {
            const result = infiniteArithmetic.multiply([-1, 2], [2]);
            expect(result).toEqual([-2, 4]);
        });
    });
});
