import { AnyAction } from 'redux';

export type BirthState = {
	day: string | undefined,
	month: string | undefined,
	year: string | undefined,
	hour: string | undefined,
	minute: string | undefined,
};

const initialState: BirthState = {
	day: process.env.REACT_APP_BIRTH_DAY,
	month: process.env.REACT_APP_BIRTH_MONTH,
	year: process.env.REACT_APP_BIRTH_YEAR,
	hour: process.env.REACT_APP_BIRTH_HOUR,
	minute: process.env.REACT_APP_BIRTH_MINUTE,
};

export default (state: BirthState = initialState, action: AnyAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
