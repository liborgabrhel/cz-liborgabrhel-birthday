import { AnyAction } from 'redux';
import { dialogActionTypes } from '../actions';

export type DialogState = {
	active: boolean,
	visible: boolean,
};

const initialState: DialogState = {
	active: true,
	visible: false,
};

export default (state: DialogState = initialState, action: AnyAction): DialogState => {
	switch (action.type) {

		case dialogActionTypes.updateDialog:
			const difference = action.data.birthday.diff(action.data.now, 'days', true);

			return {
				...state,
				visible: -1.0 <= difference && difference <= 0.0,
			};

		case dialogActionTypes.closeDialog:
			return {
				active: false,
				visible: false,
			};

		default:
			return state;
	}
};
