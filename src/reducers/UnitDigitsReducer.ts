import { AnyAction } from 'redux';
import { unitDigitsActionTypes } from '../actions/UnitDigitsActions';

export type UnitDigitsState = {
	timerID: number,
	days: number,
	hours: number,
	minutes: number,
	seconds: number,
};

const initialState: UnitDigitsState = {
	timerID: 0,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
};

export default (state: UnitDigitsState = initialState, action: AnyAction) => {
	switch (action.type) {

		case unitDigitsActionTypes.setTimerID:
			return {
				...state,
				timerID: action.data.timerID,
			};

		case unitDigitsActionTypes.updateUnit:
			return {
				...state,
				[action.data.unitType]: action.data.value,
			};

		default:
			return state;
	}
};
