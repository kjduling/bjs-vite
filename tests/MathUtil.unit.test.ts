import { expect, test } from 'vitest'
import { MathUtil } from '../src/MathUtil';


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

test('should return a random number between 1 and 10', function() {
    // Arrange
    const min = 1;
    const max = 10;

    // Act
    const actual = MathUtil.RandomRange(min, max);

    // Assert
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(max);
});

test('should shuffle the array', function() {
    // Arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Act
    const shuffledArray = MathUtil.Shuffle(array);

    // Assert
    expect(shuffledArray).not.toEqual(array);
});
