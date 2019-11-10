import { CelebratedAgeActionData, celebratedAgeActions } from "redux-store/actions/celebrated-age"
import { Action } from "redux-store/types"

/**
 * State type
 */
export type CelebratedAgeState = {
  next: number
  current: number
}

/**
 * Initial state
 */
export const initialCelebratedAgeState: CelebratedAgeState = {
  next: 0,
  current: 0,
}

/**
 * Reducer
 *
 * @param state
 * @param action
 */
export const celebratedAgeReducer = (
  state: CelebratedAgeState = initialCelebratedAgeState,
  action: Action<CelebratedAgeActionData>
): CelebratedAgeState => {
  switch (action.type) {
    case celebratedAgeActions.updateCelebratedAge: {
      if (action.data) {
        return {
          current: action.data.current,
          next: action.data.next,
        }
      } else {
        console.error(`No data provided for action "updateCelebratedAge"!`)
        return state
      }
    }

    default: {
      return state
    }
  }
}
