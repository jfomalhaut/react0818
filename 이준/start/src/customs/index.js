import moment from 'moment';

export const dateTimePipe = (date, format) => {
	return moment(date).format(format);
};