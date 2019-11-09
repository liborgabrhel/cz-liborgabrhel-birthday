import * as moment from "moment"
import { Moment } from "moment"
import { RootState } from "../reducers"

export const getNounType = (digit: number): string => (digit === 1 ? "singular" : "plural")

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

export const getYearOffset = (now: Moment, birthday: Moment): number => {
  const difference = birthday.diff(now)
  return difference < 0 ? 1 : 0
}

export const getBirth = (birth: RootState["birth"]): Moment => {
  const date = `${birth.day}/${birth.month}/${birth.year} ${birth.hour}:${birth.minute}`
  return moment.utc(`${date}`, "DD/MM/YYYY HH:mm")
}

export const getBirthday = (year: number, birth: RootState["birth"]): Moment => {
  const date = `${birth.day}/${birth.month}/${year} ${birth.hour}:${birth.minute}`
  return moment.utc(`${date}`, "DD/MM/YYYY HH:mm")
}

export const getNextBirthday = (year: number, yearOffset: number, birth: RootState["birth"]): Moment => {
  const date = `${birth.day}/${birth.month}/${year + yearOffset} ${birth.hour}:${birth.minute}`
  return moment.utc(`${date}`, "DD/MM/YYYY HH:mm")
}
