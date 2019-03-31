import { Moment } from 'moment';
import { AnyAction, Dispatch } from 'redux';
import { getNounType } from '../utils';
import { updateUnit } from './UnitDigitsActions';
import { toggleUnitName } from './UnitNamesActions';

export const updateCountdown = (now: Moment, nextBirthday: Moment) => async (dispatch: Dispatch<AnyAction>) => {
	enum UnitTypes {
		days = 'days',
		hours = 'hours',
		minutes = 'minutes',
		seconds = 'seconds',
	}

	const days = nextBirthday.diff(now, UnitTypes.days);
	dispatch(toggleUnitName({unitType: UnitTypes.days, nounType: getNounType(days)}));
	dispatch(updateUnit({unitType: UnitTypes.days, value: days}));

	nextBirthday.subtract(days, UnitTypes.days);

	const hours = nextBirthday.diff(now, UnitTypes.hours);
	dispatch(toggleUnitName({unitType: UnitTypes.hours, nounType: getNounType(hours)}));
	dispatch(updateUnit({unitType: UnitTypes.hours, value: hours}));

	nextBirthday.subtract(hours, UnitTypes.hours);

	const minutes = nextBirthday.diff(now, UnitTypes.minutes);
	dispatch(toggleUnitName({unitType: UnitTypes.minutes, nounType: getNounType(minutes)}));
	dispatch(updateUnit({unitType: UnitTypes.minutes, value: minutes}));

	nextBirthday.subtract(minutes, UnitTypes.minutes);

	const seconds = nextBirthday.diff(now, UnitTypes.seconds);
	dispatch(toggleUnitName({unitType: UnitTypes.seconds, nounType: getNounType(seconds)}));
	dispatch(updateUnit({unitType: UnitTypes.seconds, value: seconds}));
};
