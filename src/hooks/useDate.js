import { fromUnixTime, format } from "date-fns";
export default function useDate(newDate) {
  const timestamp = 1759520439; // seconds
  const date = fromUnixTime(timestamp); // convert to JS Date
  const formatted = format(date, "M/d/yyyy");

  return { formatted };
}
