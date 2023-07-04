import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
*{
        box-sizing: border-box;
        @font-face {
		font-family: 'Pretendard-Black';
		src: url('/Assets/Font/woff/Pretendard-Black.woff');
	    }
        @font-face {
		font-family: 'Pretendard-Bold';
		src: url('/Assets/Font/woff/Pretendard-Bold.woff');
	    }
        @font-face {
		font-family: 'Pretendard-ExtraBold';
		src: url('/Assets/Font/woff/Pretendard-ExtraBold.woff');
	    }
        @font-face {
		font-family: 'Pretendard-ExtraLight';
		src: url('/Assets/Font/woff/Pretendard-ExtraLight.woff');
	    }
        @font-face {
		font-family: 'Pretendard-Light';
		src: url('/Assets/Font/woff/Pretendard-Light.woff');
	    }
        @font-face {
		font-family: 'Pretendard-Medium';
		src: url('/Assets/Font/woff/Pretendard-Medium.woff');
	    }
        @font-face {
		font-family: 'Pretendard-Regular';
		src: url('/Assets/Font/woff/Pretendard-Regular.woff');
	    }
        @font-face {
		font-family: 'Pretendard-SemiBold';
		src: url('/Assets/Font/woff/Pretendard-SemiBold.woff');
	    }
        @font-face {
		font-family: 'Pretendard-Thin';
		src: url('/Assets/Font/woff/Pretendard-Thin.woff');
	    }
    }
    body{
		font-family: 'Pretendard-Black';
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}
`;

export default GlobalStyles;
