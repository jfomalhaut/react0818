import Axios from 'axios';

const getRequest = async (url) => {
	return await Axios.get(url);
};