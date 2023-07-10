import { css } from 'styled-components';

export const basicSetting = css`
	width: 80%;
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 900px) {
		width: 90%;
	}
	margin: 0 auto;
`;
export const title = css`
	font-size: 36px;
	font-weight: 800;
	margin-bottom: 40px;
	text-align: center;
`;
export const container = css`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 50px;
`;

export const questionWrapper = css`
	width: 400px;
	color: #407bf0;
	font-size: 18px;
`;

export const btnWrapper = css`
	display: flex;
	width: 530px;
	justify-content: center;
	font-size: 8px;
	:hover {
		background-color: #407bf0;
		color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
`;

export const answerBtn = css`
	width: 400px;
	height: 35px;
	font-size: 12px;
	margin: auto 10px;
	margin-right: 20px;
	border: 1px solid #799edc;
	border-radius: 30px;
	text-align: center;
	background-color: white;
	cursor: pointer;
	color: ${props => (props.clicked === 'true' ? ' white' : '#407bf0')};
	background-color: ${props =>
		props.clicked === 'true' ? ' #407bf0' : 'white'};
`;
