// src/utils/formatPrice.js
export default function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0 // removes .00
  }).format(amount);
}
