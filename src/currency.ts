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
