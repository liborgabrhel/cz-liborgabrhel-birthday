import moment, { Moment } from "moment"

const birthData = {
  day: process.env.NEXT_PUBLIC_BIRTH_DAY,
  month: process.env.NEXT_PUBLIC_BIRTH_MONTH,
  year: process.env.NEXT_PUBLIC_BIRTH_YEAR,
  hour: process.env.NEXT_PUBLIC_BIRTH_HOUR,
  minute: process.env.NEXT_PUBLIC_BIRTH_MINUTE,
}

export type CelebratedAge = {
  current: number
  next: number
}

export const getCelebratedAge = (now: Moment): CelebratedAge => {
  const { day, month, year, hour, minute } = birthData
  const dateString = `${day}/${month}/${year} ${hour}:${minute}`
  const birthDate = moment.utc(`${dateString}`, "DD/MM/YYYY HH:mm")
  const age = now.diff(birthDate, "year")

  return {
    current: age,
    next: age + 1,
  }
}
