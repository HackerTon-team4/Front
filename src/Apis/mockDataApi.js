// import axios from 'axios';

// const MockApi = {
// 	question() {
// 		return axios.get('/MockData/question.json');
// 	},
// };

// export default MockApi;
import axios from 'axios';

const MockApi = {
	question(page) {
		return axios.get(`/MockData/question${page}.json`);
	},
};

export default MockApi;
