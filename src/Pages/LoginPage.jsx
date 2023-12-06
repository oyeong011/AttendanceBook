import Login from "../component/login.jsx";
import {useLoaderData} from "react-router-dom";

function LoginPage() {
    const data = useLoaderData();
    console.log(data.token); // 콘솔에 JWT 토큰 출력


    return (
        <div>
            <Login/>
        </div>
    );
}

export default LoginPage
;