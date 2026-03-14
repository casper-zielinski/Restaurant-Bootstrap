export function getGermanDate(datum: string): string {
  if (datum === "") {
    const today = new Date();
    const date = today.toLocaleDateString("de-DE");
    return date;
  }
  return setDEDate(datum);
}

export function getDate(datum: string): string {
  if (datum === "") {
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    return date;
  } else return datum;
}

export function setDEDate(initial: string): string {
  const date = new Date(initial);
  const deutschesDatum = date.toLocaleDateString("de-DE");
  return deutschesDatum;
}

export function getTime(zeit: string): string {
  if (zeit === "") {
    const today = new Date();
    let hour = today.toTimeString().split(" ")[0].substring(0, 2);
    const minute = today.toTimeString().split(" ")[0].substring(2, 5);
    const hourLater = Number.parseInt(hour) + 1;
    hour = hourLater.toString();
    return hour + minute;
  }
  return zeit;
}
