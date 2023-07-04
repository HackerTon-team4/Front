import { Axios } from "./@core";

const PATH = "/api";

const QuestionApi = {
  question(startIdx, endIdx) {
    return Axios.get(PATH + "/questionnaire", {
      params: {
        startIdx,
        endIdx,
      },
    });
  },
  submit({ answers }) {
    return Axios.post(PATH + "/questionnaire/submit", {
      answers,
    });
  },
};
export default QuestionApi;
