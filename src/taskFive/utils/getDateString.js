export default function getDateString(date) {
  const dt = new Date(date)

  return dt.toDateString();
}