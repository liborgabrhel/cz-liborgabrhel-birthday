import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { UnitDigitsState } from "redux-store/reducers/unit-digits"
import { Action } from "redux-store/types"

/**
 * Actions
 */
export const unitDigitsActions = {
  updateUnitDigit: "ACT_UPDATE_UNIT",
}

/**
 * Action data
 */
export type UnitDigitsActionData = {
  value: number
  unitType: keyof UnitDigitsState
}

/**
 * Dispatch type
 */
export type UnitDigitsDispatch = Dispatch<Action<UnitDigitsActionData>>

/**
 * Unit digit update function
 */
export const useUpdateUnitDigit = () => {
  const dispatch = useDispatch<UnitDigitsDispatch>()

  type Arguments = {
    value: number
    unitType: keyof UnitDigitsState
  }

  const updateUnitDigit = ({ value, unitType }: Arguments) => {
    dispatch({
      type: unitDigitsActions.updateUnitDigit,
      data: {
        value,
        unitType,
      },
    })
  }
  return { updateUnitDigit }
}
