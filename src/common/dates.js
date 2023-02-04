var date = new Date(),
  date2 = new Date(date);

export default [
  { key: "0", label: "1w", date: new Date(date2.setHours(date.getHours() - 168)) },
  { key: "1", label: "2W", date: new Date(date2.setHours(date.getHours() - 336)) },
  { key: "2", label: "1M", date: new Date(date2.setMonth(date.getMonth() - 1)) },
  { key: "3", label: "6M", date: new Date(date2.setMonth(date.getMonth() - 6)) },
  { key: "4", label: "1Y", date: new Date(date2.setFullYear(date.getFullYear() - 1)) },
];
