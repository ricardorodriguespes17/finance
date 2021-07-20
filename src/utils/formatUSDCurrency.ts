export default function formatUSDCurrency(value: number) {
  return Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  }).format(value);
}
