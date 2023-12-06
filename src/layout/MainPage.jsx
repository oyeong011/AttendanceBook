import {Outlet, useLoaderData} from "react-router-dom";

export const MainPage = () => {
    const token = useLoaderData();
    console.log(token);
    if(token === undefined){
        return (
            <>
                <h1>Main Page</h1>
                <Outlet/>
            </>
        )
    }


    return (
        <>
            <h1>Main Page</h1>
            <Outlet/>
        </>
    )
}
