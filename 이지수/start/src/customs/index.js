import moment from 'moment';

export const dateTimePipe = (date, format="YYYY-MM-DD") => {
	return moment(date).format(format);
};