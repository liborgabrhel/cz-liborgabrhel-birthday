import { UnitDigitsActionData, unitDigitsActions } from "redux-store/actions/unit-digits"
import { Action } from "redux-store/types"

/**
 * State Type
 */
export type UnitDigitsState = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * Initial state
 */
export const initialUnitDigitsState: UnitDigitsState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

/**
 * Reducer
 *
 * @param state
 * @param action
 */
export const unitDigitsReducer = (
  state: UnitDigitsState = initialUnitDigitsState,
  action: Action<UnitDigitsActionData>
) => {
  switch (action.type) {
    case unitDigitsActions.updateUnitDigit:
      if (action.data) {
        return {
          ...state,
          [action.data.unitType]: action.data.value,
        }
      } else {
        console.error(`No data provided for action "updateUnitDigit"!`)
        return state
      }

    default: {
      return state
    }
  }
}
