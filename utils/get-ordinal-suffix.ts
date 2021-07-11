export const getOrdinalSuffix = (value: number): string => {
  return Math.round((value % 100) / 10) === 1
    ? "th"
    : value % 10 === 1
    ? "st"
    : value % 10 === 2
    ? "nd"
    : value % 10 === 3
    ? "rd"
    : "th"
}
