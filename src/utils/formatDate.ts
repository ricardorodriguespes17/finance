export default function formatDate(date: number) {
  return Intl.DateTimeFormat("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}
