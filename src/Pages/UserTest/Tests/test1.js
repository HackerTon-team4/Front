import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MockApi from '../../../Apis/mockDataApi';

const Test = ({ setArray }) => {
	const [data, setData] = useState();
	const [clickedBtns, setClickedBtns] = useState(Array(8).fill(false));

	useEffect(() => {
		MockApi.question(1)
			.then(response => {
				setData(response.qna);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const clickBtn1 = idx => {
		const updatedClickedBtns = [...clickedBtns];
		updatedClickedBtns[idx] = !clickedBtns[idx];

		if (clickedBtns[idx + 4] === true) {
			updatedClickedBtns[idx + 4] = false;
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
		updatedClickedBtns[idx + 4] = !clickedBtns[idx + 4];
		if (clickedBtns[idx] === true) {
			updatedClickedBtns[idx] = false;
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
							<BoldText>{data[0]?.question.slice(8, 55)}</BoldText>
							{data[0]?.question.slice(55, 69)}
							<br></br>
							{data[0]?.question.slice(69)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[0].toString()}
								onClick={() => clickBtn1(0)}
							>
								{data[0]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[4].toString()}
								onClick={() => clickBtn2(0)}
							>
								{data[0]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{data[1]?.question.slice(0, 13)}
							<BoldText>{data[1]?.question.slice(8, 41)}</BoldText>
							{data[1]?.question.slice(41, 90)}
							<br></br>
							{data[1]?.question.slice(90)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[1].toString()}
								onClick={() => clickBtn1(1)}
							>
								{data[1]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[5].toString()}
								onClick={() => clickBtn2(1)}
							>
								{data[1]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{data[2]?.question.slice(0, 29)}
							<BoldText>{data[2]?.question.slice(29, 66)}</BoldText>
							{data[2]?.question.slice(66)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[2].toString()}
								onClick={() => clickBtn1(2)}
							>
								{data[2]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[6].toString()}
								onClick={() => clickBtn2(2)}
							>
								{data[2]?.answer2}
							</S.AnswerBtn2>
						</S.BtnWrapper>
					</S.Container>

					<S.Container>
						<S.QuestionWrapper>
							{data[3]?.question.slice(0, 8)}
							<BoldText>{data[3]?.question.slice(8, 36)}</BoldText>
							{data[3]?.question.slice(36)}
						</S.QuestionWrapper>
						<S.BtnWrapper>
							<S.AnswerBtn1
								clicked={clickedBtns[3].toString()}
								onClick={() => clickBtn1(3)}
							>
								{data[3]?.answer1}
							</S.AnswerBtn1>
							<S.AnswerBtn2
								clicked={clickedBtns[7].toString()}
								onClick={() => clickBtn2(3)}
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

export default Test;

const BoldText = styled.span`
	font-weight: 800;
`;

const Wrapper = styled.div`
	width: 100%;
	color: #407bf0;
`;
const Title = styled.div`
	font-size: 36px;
	font-weight: 800;
	margin-bottom: 40px;
	text-align: center;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 50px;
`;
const QuestionWrapper = styled.div`
	width: 40%;
	color: #407bf0;
	font-size: 18px;
`;
const BtnWrapper = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	font-size: 8px;
	:hover {
		background-color: #407bf0;
		color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
`;

const AnswerBtn1 = styled.div`
	width: 400px;
	height: 35px;
	font-size: 14px;
	margin: auto 10px;
	margin-right: 20px;
	border: 1px solid #799edc;
	border-radius: 30px;
	text-align: center;
	padding-top: 10px;
	background-color: white;
	cursor: pointer;
	color: ${props => (props.clicked === 'true' ? ' white' : '#407bf0')};
	background-color: ${props =>
		props.clicked === 'true' ? ' #407bf0' : 'white'};
`;
const AnswerBtn2 = styled.div`
	width: 400px;
	height: 35px;
	font-size: 14px;
	text-align: center;
	padding-top: 10px;
	margin-right: 30px;
	margin: auto 10px;
	border: 1px solid #799edc;
	border-radius: 30px;
	color: #407bf0;
	background-color: white;
	cursor: pointer;
	color: ${props => (props.clicked === 'true' ? ' white' : '#407bf0')};
	background-color: ${props =>
		props.clicked === 'true' ? ' #407bf0' : 'white'};
`;
const BtnWrapperLong = styled.div`
	width: 50%;
	:hover {
		background-color: #407bf0;
		color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
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
