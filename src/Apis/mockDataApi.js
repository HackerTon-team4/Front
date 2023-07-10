// import axios from 'axios';

// const MockApi = {
// 	question() {
// 		return axios.get('/MockData/question.json');
// 	},
// };

// export default MockApi;
import axios from 'axios';

const MockApi = {
	async question(page) {
		const response = await axios.get(`/MockData/question1.json`);
		const data = response.data.page[`${page - 1}`];
		return data;
	},
};

export default MockApi;
