import { Moment } from 'moment';

export const celebratedAgeActionTypes = {
	updateCelebratedAge: 'ACT_UPDATE_CELEBRATED_AGE',
};

export const updateCelebratedAge = (now: Moment, birth: Moment) => {
	return {
		type: celebratedAgeActionTypes.updateCelebratedAge,
		data: {
			now,
			birth,
		},
	};
};
