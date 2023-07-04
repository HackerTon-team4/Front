import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import { RecoilRoot } from 'recoil';
import GlobalStyles from './Styles/global';

function App() {
	return (
		<RecoilRoot>
			<GlobalStyles />
			<RouterProvider router={router} />
		</RecoilRoot>
	);
}

export default App;
