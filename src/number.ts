/**
 * Determines whether string value is a number.
 */
export function isNumber(value: string): boolean {
  return typeof Number(value) === 'number';
}

/**
 * Checks whether a string value is a whole number greater than zero.
 * If so, returns the number, else returns zero.
 */
export function toWholeNumberGreaterThanZero(value: string): number {
  const convertedValue = Number(value);
  return typeof convertedValue === 'number' &&
    convertedValue % 1 === 0 &&
    convertedValue > 0
    ? convertedValue
    : 0;
}
