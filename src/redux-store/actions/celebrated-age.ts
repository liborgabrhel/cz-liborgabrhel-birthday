import { Moment } from "moment"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { Action } from "redux-store/types"

/**
 * Actions
 */
export const celebratedAgeActions = {
  updateCelebratedAge: "ACT_UPDATE_CELEBRATED_AGE",
}

/**
 * Action data
 */
export type CelebratedAgeActionData = {
  current: number
  next: number
}

/**
 * Dispatch type
 */
export type CelebratedAgeDispatch = Dispatch<Action<CelebratedAgeActionData>>

/**
 * Celebrated age update function
 */
export const useUpdateCelebratedAge = () => {
  const dispatch = useDispatch<CelebratedAgeDispatch>()
  const updateCelebratedAge = (now: Moment, birth: Moment) => {
    const age = now.diff(birth, "year")
    dispatch({
      type: celebratedAgeActions.updateCelebratedAge,
      data: {
        current: age,
        next: age + 1,
      },
    })
  }
  return { updateCelebratedAge }
}
