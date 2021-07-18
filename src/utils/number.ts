/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

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
