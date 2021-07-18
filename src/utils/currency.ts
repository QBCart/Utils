/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

/**
 * US currency formatter.
 */
export const usCurrencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

/**
 * Converts a number to a US currency string.
 */
export function toUSCurrency(num: number): string {
  return usCurrencyFormatter.format(num);
}
