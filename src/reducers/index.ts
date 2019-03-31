import { combineReducers } from 'redux';
import BirthReducer, { BirthState } from './BirthReducer';
import CelebratedAgeReducer, { CelebratedAgeState } from './CelebratedAgeReducer';
import DialogReducer, { DialogState } from './DialogReducer';
import UnitDigitsReducer, { UnitDigitsState } from './UnitDigitsReducer';
import UnitNamesReducer, { UnitNamesState } from './UnitNamesReducer';

export type RootState = {
	unitNames: UnitNamesState,
	unitDigits: UnitDigitsState,
	celebratedAge: CelebratedAgeState,
	dialog: DialogState,
	birth: BirthState,
};

export default combineReducers<RootState>({
	unitNames: UnitNamesReducer,
	unitDigits: UnitDigitsReducer,
	celebratedAge: CelebratedAgeReducer,
	dialog: DialogReducer,
	birth: BirthReducer,
});
