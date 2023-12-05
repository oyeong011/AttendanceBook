import {createBrowserRouter} from "react-router-dom";
import Login from "../Pages/Login.jsx";
import AdminPage from "../Pages/Admin/Main.jsx";
import PlayerPage from "../Pages/Player/Main.jsx";
import PlayerApply from "../Pages/Player/Apply.jsx";
import ApplyForm from "../Pages/Player/ApplyForm.jsx";
import PlayerResult from "../Pages/Player/Result.jsx";
import PlayersInfo from "../Pages/Admin/Players/PlayersInfo.jsx";
import AttendanceInfo from "../Pages/Admin/Attendance/AttendanceInfo.jsx";
import ApplyInfo from "../Pages/Admin/Apply/ApplyInfo.jsx";


const router = createBrowserRouter(
    {
        path: "/",
        element: <Login/>,
        children:[
            {
                path: "/admin",
                element: <AdminPage/>,
                label: "Admin",
                children: [
                    { path: 'players', element: <PlayersInfo /> },
                    { path: 'attendances', element: <AttendanceInfo /> },
                    { path: 'applys', element: <ApplyInfo /> }
                ],
            },
            {
                path: "/player",
                label: "Player",
                children: [
                    { path: 'main', element: <PlayerPage /> },
                    { path: 'apply', element: <PlayerApply component={ApplyForm} /> },
                    { path: 'apply/result', element: <PlayerResult /> }
                ],
            }
        ]
    }
)
export default router