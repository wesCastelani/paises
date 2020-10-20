const formatter = Intl.NumberFormat('pt-br');

function formatNumber(number) {
  return formatter.format(number);
}
export { formatNumber };
