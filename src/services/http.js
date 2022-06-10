import axios from 'axios';

export default axios.create({
	withCredentials: true,
	baseURL: 'https://host-den.herokuapp.com/',
});
