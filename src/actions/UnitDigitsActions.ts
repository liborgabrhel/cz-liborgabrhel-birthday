export const unitDigitsActionTypes = {
	setTimerID: 'ACT_SET_TIMER_ID',
	updateUnit: 'ACT_UPDATE_UNIT',
};

export const setTimerID = (timerID: number) => {
	return {
		type: unitDigitsActionTypes.setTimerID,
		data: {
			timerID,
		},
	};
};

type Arguments = {
	value: number,
	unitType: string,
};

export const updateUnit = ({value, unitType}: Arguments) => ({
	type: unitDigitsActionTypes.updateUnit,
	data: {
		value,
		unitType,
	},
});
