import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../Pages/Landing";
import LoginPage from "../Pages/Landing/Form/loginPage";
import SignUpPage from "../Pages/Landing/Form/signUpPage";
import TestPage from "../Pages/UserTest";
import ErrorPage from "../Pages/Error";
import LayOut from "../Components/Layout";
import MainPage from "../Pages/Main";
import MyPage from "../Pages/MyPage";
import RecommendPage from "../Pages/Recommend";

const router = createBrowserRouter([
  // {
  //   path: "form/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "form/signup",
  //   element: <SignUpPage />,
  // },
  {
    element: <LayOut />,
    children: [
      {
        path: "form/login",
        element: <LoginPage />,
      },
      {
        path: "form/signup",
        element: <SignUpPage />,
      },
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
      {
        path: "test/:page",
        element: <TestPage />,
      },
      {
        path: "main",
        element: <MainPage />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
      {
        path: "recommend",
        element: <RecommendPage />,
      },
    ],
  },

  // {

  // 	children: [
  // 		{
  // 			path: 'review/detail/:idx',
  // 			element: <ReviewDetail />,
  // 		},
  // 	],
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
