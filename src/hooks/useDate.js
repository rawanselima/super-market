import { fromUnixTime, format } from "date-fns";
export default function useDate(newDate) {
  const date = new Date(newDate);
  const formatted = format(date, "d/M/yyyy");

  return { formatted };
}
