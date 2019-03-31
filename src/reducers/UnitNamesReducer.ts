import { AnyAction } from 'redux';
import { unitNamesActionTypes } from '../actions/UnitNamesActions';

const UnitNames = {
	days: {
		singular: 'day',
		plural: 'days',
	},
	hours: {
		singular: 'hour',
		plural: 'hours',
	},
	minutes: {
		singular: 'minute',
		plural: 'minutes',
	},
	seconds: {
		singular: 'second',
		plural: 'seconds',
	},

};

export type UnitNamesState = {
	days: string,
	hours: string,
	minutes: string,
	seconds: string,
};

const initialState: UnitNamesState = {
	days: 'days',
	hours: 'hours',
	minutes: 'minutes',
	seconds: 'seconds',
};

export default (state: UnitNamesState = initialState, action: AnyAction) => {
	switch (action.type) {

		case unitNamesActionTypes.toggleUnitName:
			const { unitType, nounType } = action.data;

			return {
				...state,
				[unitType]: UnitNames[unitType][nounType],
			};

		default:
			return state;
	}
};
