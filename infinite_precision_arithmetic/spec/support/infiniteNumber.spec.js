const InfiniteNumber = require('../../infiniteArithmetic'); // Adjust the path as needed

describe('InfiniteNumber', () => {
    describe('Constructor', () => {
        it('should create an instance from a positive number', () => {
            const num = new InfiniteNumber(123);
            expect(num.getInternalArray()).toEqual([1, 2, 3]);
        });

        it('should create an instance from a string of digits', () => {
            const num = new InfiniteNumber('456');
            expect(num.getInternalArray()).toEqual([4, 5, 6]);
        });

        it('should throw an error for NaN input', () => {
            expect(() => {
                new InfiniteNumber('abc');
            }).toThrowError('String can have decimal numbers only.');
        });

        it('should throw an error for negative input', () => {
            expect(() => {
                new InfiniteNumber(-789);
            }).toThrowError('Input cannot be negative');
        });

        it('should throw an error for non-integer input', () => {
            expect(() => {
                new InfiniteNumber(12.34);
            }).toThrowError('Input needs to be an integral value.');
        });

        it('should throw an error for empty string input', () => {
            expect(() => {
                new InfiniteNumber('');
            }).toThrowError('Empty string is not accepted.');
        });

        it('should create an instance from an array of numbers', () => {
            const num = new InfiniteNumber([7, 8, 9]);
            expect(num.getInternalArray()).toEqual([7, 8, 9]);
        });

        it('should throw an error for array with non-integer elements', () => {
            expect(() => {
                new InfiniteNumber([1, '2', 3]);
            }).toThrowError('it is Not a Integer Number');
        });

        it('should throw an error for array with NaN elements', () => {
            expect(() => {
                new InfiniteNumber([1, 2, NaN]);
            }).toThrowError('it is Not a Integer Number');
        });
    });

    describe('getNumberAsString', () => {
        it('should return the internal array as a string', () => {
            const num = new InfiniteNumber(123);
            expect(num.getNumberAsString()).toEqual('123');
        });
    });
});
