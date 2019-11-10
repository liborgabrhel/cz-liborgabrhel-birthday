import { Dispatch } from "react"
import { useDispatch } from "react-redux"
import { UnitNamesState } from "redux-store/reducers/unit-names"
import { Action } from "redux-store/types"
import { UNIT_NAMES } from "utils"

/**
 * Actions
 */
export const unitNamesActions = {
  toggleUnitName: "ACT_TOGGLE_UNIT_NAME",
}

/**
 * Action data
 */
export type UnitNamesActionData = {
  unitType: keyof UnitNamesState
	unitName: string
}

/**
 * Dispatch type
 */
export type UnitNamesDispatch = Dispatch<Action<UnitNamesActionData>>

/**
 * Unit name toggle function
 */
export const useToggleUnitName = () => {
	const dispatch = useDispatch<UnitNamesDispatch>()

	type ToggleArguments = {
		unitType: keyof UnitNamesState
		nounType: "singular" | "plural"
	};

	const toggleUnitName = ({ unitType, nounType }: ToggleArguments) => {
		const unitName = UNIT_NAMES[unitType][nounType]
		dispatch({
			type: unitNamesActions.toggleUnitName,
			data: {
				unitType,
				unitName
			},
		})
	}

	return {toggleUnitName}
}



