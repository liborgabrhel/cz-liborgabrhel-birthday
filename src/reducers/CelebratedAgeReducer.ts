import { AnyAction } from 'redux';
import { celebratedAgeActionTypes } from '../actions';

export type CelebratedAgeState = {
	nextAge: number,
	currentAge: number,
};

const initialState: CelebratedAgeState = {
	nextAge: 0,
	currentAge: 0,
};

export default (state: CelebratedAgeState = initialState, action: AnyAction): CelebratedAgeState => {
	switch (action.type) {
		case celebratedAgeActionTypes.updateCelebratedAge:
			const age = action.data.now.diff(action.data.birth, 'year');
			return {
				nextAge: age + 1,
				currentAge: age,
			};
		default:
			return state;
	}
};
