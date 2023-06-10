import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import NotFound from "./modules/NotFound/NotFound";
import Home from "./modules/Home/Home";
import LivePoll from "./modules/Voting/Voting";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "404",
        element: <NotFound />,
    },
    // {
    //     path: "/",
    //     element: <AuthRoutes />,
    //     children: [
    //         { path: "/", element: <Login /> },
    //         { path: "register", element: <Onboarding /> },
    //         { path: "login", element: <Login /> },
    //         { path: "forgot-password", element: <ForgotPassword /> },
    //         { path: "reset-password", element: <ResetPassword /> },
    //     ],
    // },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/live-poll",
        element: <LivePoll />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
