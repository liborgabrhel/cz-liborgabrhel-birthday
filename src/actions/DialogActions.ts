import { Moment } from 'moment';

export const dialogActionTypes = {
	updateDialog: 'ACT_SHOW_DIALOG',
	closeDialog: 'ACT_CLOSE_DIALOG',
};

export const updateDialog = (now: Moment, birthday: Moment) => ({
	type: dialogActionTypes.updateDialog,
	data: {
		now,
		birthday,
	},
});

export const closeDialog = () => ({
	type: dialogActionTypes.closeDialog,
});
