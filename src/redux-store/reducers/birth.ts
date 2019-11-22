/**
 * State Type
 */
export type BirthState = {
  day: string | undefined
  month: string | undefined
  year: string | undefined
  hour: string | undefined
  minute: string | undefined
}

/**
 * Initial state
 */
export const initialBirthState: BirthState = {
  day: process.env.REACT_APP_BIRTH_DAY,
  month: process.env.REACT_APP_BIRTH_MONTH,
  year: process.env.REACT_APP_BIRTH_YEAR,
  hour: process.env.REACT_APP_BIRTH_HOUR,
  minute: process.env.REACT_APP_BIRTH_MINUTE,
}

/**
 * Reducer
 *
 * @param state
 */
export const birthReducer = (state: BirthState = initialBirthState) => {
  return state
}
