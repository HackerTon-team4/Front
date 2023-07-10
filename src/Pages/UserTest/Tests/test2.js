import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MockApi from '../../../Apis/mockDataApi';
import {
	answerBtn,
	btnWrapper,
	container,
	questionWrapper,
	title,
} from '../../../Styles/common';

const Test2 = ({ setArray }) => {
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
		updatedClickedBtns[idx - 4] = !clickedBtns[idx - 4];
		if (clickedBtns[idx] === true) {
			updatedClickedBtns[idx] = false;
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
		updatedClickedBtns[idx] = !clickedBtns[idx];
		if (clickedBtns[idx - 4] === true) {
			updatedClickedBtns[idx - 4] = false;
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
							{data[0]?.question.slice(0, 8)}
							<BoldText>{data[0]?.question.slice(8, 36)}</BoldText>
							{data[0]?.question.slice(36)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[0].toString()}
								onClick={() => clickBtn1(4)}
							>
								{data[0]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[4].toString()}
								onClick={() => clickBtn2(4)}
							>
								{data[0]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{data[1]?.question.slice(0, 14)}
							<BoldText>{data[1]?.question.slice(14, 44)}</BoldText>
							{data[1]?.question.slice(44)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[1].toString()}
								onClick={() => clickBtn1(5)}
							>
								{data[1]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[5].toString()}
								onClick={() => clickBtn2(5)}
							>
								{data[1]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{data[2]?.question.slice(0, 11)}
							<BoldText>{data[2]?.question.slice(11, 30)}</BoldText>
							{data[2]?.question.slice(30)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[2].toString()}
								onClick={() => clickBtn1(6)}
							>
								{data[2]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[6].toString()}
								onClick={() => clickBtn2(6)}
							>
								{data[2]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{data[3]?.question.slice(0, 3)}
							<BoldText>{data[3]?.question.slice(3, 11)}</BoldText>
							{data[3]?.question.slice(11)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[3].toString()}
								onClick={() => clickBtn1(7)}
							>
								{data[3]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[7].toString()}
								onClick={() => clickBtn2(7)}
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

export default Test2;
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
