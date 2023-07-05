// import axios from 'axios';

// const MockApi = {
// 	question() {
// 		return axios.get('/MockData/question.json');
// 	},
// };

// export default MockApi;
import axios from 'axios';

const MockApi = {
	question(startIndex, endIndex) {
		return axios.get('/MockData/question.json', {
			params: {
				_start: startIndex,
				_end: endIndex,
			},
		});
	},
};

export default MockApi;
