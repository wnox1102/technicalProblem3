function formatMoney(
  candidate: number | string | null | undefined,
  decimalPoint = true
): string {
  // .toLocaleString('es-ES')
  if (!candidate && candidate !== 0) return '-';
  if (Number.isNaN(Number(candidate))) return '-';
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const result = numberFormat
    .format(Number(candidate))
    .replace('$', '')
    .replace(/( )/g, '')
    .trim();
  if (decimalPoint) {
    return result;
  }
  const [integer, decimal] = result.split('.');
  return `${integer.replace(/(,)/g, '.')},${decimal}`;
  // return candidate.toLocaleString('es-ES');
}

export default formatMoney;
