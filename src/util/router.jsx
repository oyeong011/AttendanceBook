import {createBrowserRouter, Navigate} from "react-router-dom";
import LoginPage from "../Pages/LoginPage.jsx";
import AdminPage from "../Pages/Admin/Main.jsx";
import PlayerPage from "../Pages/Player/Main.jsx";
import PlayerApply from "../Pages/Player/Apply.jsx";
import ApplyForm from "../Pages/Player/ApplyForm.jsx";
import PlayerResult from "../Pages/Player/Result.jsx";
import PlayersInfo from "../Pages/Admin/Players/PlayersInfo.jsx";
import AttendanceInfo from "../Pages/Admin/Attendance/AttendanceInfo.jsx";
import ApplyInfo from "../Pages/Admin/Apply/ApplyInfo.jsx";
import {MainPage} from "../layout/MainPage.jsx";
import {cookieLoader} from "../storage/Cookies.js";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>, // Main Page
        loader : cookieLoader,
        children: [
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "admin",
                element: <AdminPage/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/admin/players"/>,
                    },
                    {
                        path: "players",
                        element: <PlayersInfo/>,
                    },
                    {
                        path: "attendance",
                        element: <AttendanceInfo/>,
                    },
                    {
                        path: "apply",
                        element: <ApplyInfo/>,
                    },
                ]
            },
            {
                path: "player",
                element: <PlayerPage/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/player/apply"/>,
                    },
                    {
                        path: "apply",
                        element: <PlayerApply/>,
                    },
                    {
                        path: "applyform",
                        element: <ApplyForm/>,
                    },
                    {
                        path: "result",
                        element: <PlayerResult/>,
                    },
                ]
            },
        ]
}])
export default router;