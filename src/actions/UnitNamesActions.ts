export const unitNamesActionTypes = {
	toggleUnitName: 'ACT_TOGGLE_UNIT_NAME',
};

type ToggleArguments = {
	unitType: string,
	nounType: string,
};

export const toggleUnitName = ({unitType, nounType}: ToggleArguments) => {
	return {
		type: unitNamesActionTypes.toggleUnitName,
		data: {
			unitType: unitType,
			nounType: nounType,
		},
	};
};
