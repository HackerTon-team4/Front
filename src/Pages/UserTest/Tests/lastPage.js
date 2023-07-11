import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { arrayState } from '../../Atom/atom';
import { useNavigate } from 'react-router-dom';

const LastPage = () => {
	const array = useRecoilValue(arrayState);
	//const [recommend, setRecommend] = useRecoilState(stock);

	const answers = [];
	for (let i = 1; i <= 24; i++) {
		answers.push({
			questionIdx: i,
			answer: array[i - 1],
		});
	}

	const navigate = useNavigate();
	const data = {
		code: 'caVb',
		content:
			'기업의 가치를 중요시하고, 수익을 최대화할 수 있는 방법을 추구하는 당신! 투자할 때 신중하지만 기회를 놓치지 않는 투자자군요 😊?',
	};

	// useEffect(() => {
	// 	if (answers.length === 24) {
	// 		QuestionApi.submit({ answers })
	// 			.then(response => {
	// 				const result = response.data.trait;
	// 				setData(result);
	// 				const stock = response.data.stocks;
	// 				setRecommend(stock);
	// 			})
	// 			.catch(error => {
	// 				alert(error.response.data.message);
	// 			});
	// 	}
	// }, []);

	const goFirst = () => {
		navigate('/test/0');
	};
	const goRecommend = () => {
		navigate('/recommend');
	};
	return (
		<S.Wrapper>
			{data && <S.Title>#{`${data.code}`}유형 입니다.</S.Title>}
			<S.MiddlePart>
				<S.Container>
					<S.PhotoWrapper>
						<S.Photo src="/Assets/Images/musk.png" />
					</S.PhotoWrapper>
				</S.Container>
				<S.Right>
					<S.SubTitle>투자 성향 설명</S.SubTitle>
					<S.Description> {data?.content}</S.Description>
				</S.Right>
			</S.MiddlePart>

			<Buttons>
				<S.GoRecommend onClick={goRecommend}>
					내 유형에 맞는 종목들 추천받기
				</S.GoRecommend>
				<S.GoMain onClick={goFirst}>처음으로</S.GoMain>
			</Buttons>
		</S.Wrapper>
	);
};

export default LastPage;

const Wrapper = styled.div`
	width: 100%;
	color: #407bf0;
`;
const Title = styled.div`
	text-align: center;
	font-size: 36px;
	font-weight: 800;
	margin-bottom: 20px;
`;
const Container = styled.div`
	display: flex;
	width: 50%;
`;

const MiddlePart = styled.div`
	width: 70%;
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
`;
const PhotoWrapper = styled.div`
	width: 300px;
	height: 300px;
	outline: 1px solid white;
	border-radius: 250px;
	margin: 0 auto;
`;
const Photo = styled.img`
	width: 100%;
	height: 100%;
	margin-top: 10px;
	border-radius: 50px;
`;
const Right = styled.div`
	width: 50%;
	margin-top: 80px;
`;

const SubTitle = styled.div`
	margin-bottom: 20px;
	font-size: 22px;
`;

const Description = styled.div`
	font-size: 18px;
`;

const Keyword = styled.div``;
const Buttons = styled.div`
	display: flex;
`;
const GoMain = styled.div`
	width: 300px;
	display: flex;
	color: #407bf0;
	margin: 20px auto;
	margin-top: 70px;
	outline: 1px solid #407bf0;
	background-color: white;
	text-decoration: none;
	border-radius: 30px;
	padding: 15px;
	justify-content: space-between;
	padding-left: 120px;
`;

const GoRecommend = styled.div`
	width: 300px;
	display: flex;
	color: #407bf0;
	margin: 20px auto;
	margin-top: 70px;
	outline: 1px solid #407bf0;
	align-items: center;
	background-color: #407bf0;
	border-radius: 30px;
	padding: 0 15px;
	justify-content: space-between;
	color: white;
	padding-left: 50px;
`;

const S = {
	Wrapper,
	Title,
	Container,
	MiddlePart,
	PhotoWrapper,
	Photo,
	Right,
	SubTitle,
	Description,
	Keyword,
	GoMain,
	GoRecommend,
};
