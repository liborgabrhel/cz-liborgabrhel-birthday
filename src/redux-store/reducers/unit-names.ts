import { UnitNamesActionData, unitNamesActions } from "redux-store/actions/unit-names"
import { Action } from "redux-store/types"

/**
 * State Type
 */
export type UnitNamesState = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

/**
 * Initial state
 */
export const initialUnitNamesState: UnitNamesState = {
  days: "days",
  hours: "hours",
  minutes: "minutes",
  seconds: "seconds",
}

/**
 * Reducer
 *
 * @param state
 * @param action
 */
export const unitNamesReducer = (state: UnitNamesState = initialUnitNamesState, action: Action<UnitNamesActionData>) => {
  switch (action.type) {
    case unitNamesActions.toggleUnitName: {
      if (action.data) {
        return {
          ...state,
          [action.data.unitType]: action.data.unitName
        }
      } else {
        console.error(`No data provided for action "toggleUnitName"!`)
        return state
      }
    }

    default: {
      return state
    }
  }
}
