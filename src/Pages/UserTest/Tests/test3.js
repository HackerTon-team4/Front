import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
	answerBtn,
	btnWrapper,
	container,
	questionWrapper,
	title,
} from '../../../Styles/common';
import MockApi from '../../../Apis/mockDataApi';

const Test3 = ({ setArray }) => {
	const [data, setData] = useState();
	const [clickedBtns, setClickedBtns] = useState(Array(8).fill(false));

	useEffect(() => {
		MockApi.question(2)
			.then(response => {
				setData(response.qna);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const clickBtn1 = idx => {
		const updatedClickedBtns = [...clickedBtns];
		updatedClickedBtns[idx - 8] = !clickedBtns[idx - 8];
		if (clickedBtns[idx - 4] === true) {
			updatedClickedBtns[idx - 4] = false;
		}

		setClickedBtns(updatedClickedBtns);

		setArray(prevArray => {
			const newArray = [...prevArray];
			newArray[idx] = 0;
			return newArray;
		});
	};

	const clickBtn2 = idx => {
		const updatedClickedBtns = [...clickedBtns];
		updatedClickedBtns[idx - 4] = !clickedBtns[idx - 4];
		if (clickedBtns[idx - 8] === true) {
			updatedClickedBtns[idx - 8] = false;
		}
		setClickedBtns(updatedClickedBtns);

		setArray(prevArray => {
			const newArray = [...prevArray];
			newArray[idx] = 1;
			return newArray;
		});
	};

	return (
		<S.Wrapper>
			{data && (
				<>
					<S.Title> 나는 어떤 성향일까? 🧐</S.Title>
					<S.Container>
						<S.QuestionWrapper>
							{' '}
							{data[0]?.question.slice(0, 17)}
							<BoldText>{data[0]?.question.slice(17, 37)}</BoldText>
							{data[0]?.question.slice(37, 70)}
							<BoldText>{data[0]?.question.slice(70, 95)}</BoldText>
							{data[0]?.question.slice(95)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[0].toString()}
								onClick={() => clickBtn1(8)}
							>
								{data[0]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[4].toString()}
								onClick={() => clickBtn2(8)}
							>
								{data[0]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>
					<S.Container>
						<S.QuestionWrapper>
							{data[1]?.question.slice(0, 17)}
							<BoldText>{data[1]?.question.slice(17, 37)}</BoldText>
							{data[1]?.question.slice(37)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[1].toString()}
								onClick={() => clickBtn1(9)}
							>
								{data[1]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[5].toString()}
								onClick={() => clickBtn2(9)}
							>
								{data[1]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>{data[2]?.question}</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[2].toString()}
								onClick={() => clickBtn1(10)}
							>
								{data[2]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[6].toString()}
								onClick={() => clickBtn2(10)}
							>
								{data[2]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{' '}
							{data[3]?.question.slice(0, 37)}
							<BoldText>{data[3]?.question.slice(37, 63)}</BoldText>
							{data[3]?.question.slice(63, 77)}
							<BoldText>{data[3]?.question.slice(77, 90)}</BoldText>
							{data[3]?.question.slice(90)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[3].toString()}
								onClick={() => clickBtn1(11)}
							>
								{data[3]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[7].toString()}
								onClick={() => clickBtn2(11)}
							>
								{data[3]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>
				</>
			)}
		</S.Wrapper>
	);
};

export default Test3;
const BoldText = styled.span`
	font-weight: 800;
`;

const Wrapper = styled.div`
	width: 100%;
	color: #407bf0;
`;
const Title = styled.div`
	${title}
`;
const Container = styled.div`
	${container}
`;
const QuestionWrapper = styled.div`
	${questionWrapper}
`;
const BtnWrapper = styled.div`
	${btnWrapper}
`;

const AnswerBtn1 = styled.button`
	${answerBtn}
`;
const AnswerBtn2 = styled.button`
	${answerBtn}
`;

const S = {
	Wrapper,
	Title,
	Container,
	QuestionWrapper,
	BtnWrapper,
	AnswerBtn1,
	AnswerBtn2,
};
