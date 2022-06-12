import axios from 'axios';

const apiKey = process.env.REACT_APP_MOCK_KEY;

console.log(apiKey);

export default axios.create({
	baseURL: `https://${apiKey}.mockapi.io/api/v1`,
});
