import {Cookies} from "react-cookie";

const cookies = new Cookies();


export const setRefreshToken = (refreshToken) => {
    const date = new Date();
    const expires = date.setDate(date.getDate() + 7);

    return cookies.set("token", refreshToken, {
        sameSite: "strict",
        path: "/",
        expires: new Date(expires)
    });
}

export const getCookieToken = () => {
    const token = cookies.get("token");

    if (token) {
        return token;
    }
    return null;
}

export const removeCookieToken = () => {
    return cookies.remove("token", { path: "/" });
}


export const cookieLoader = () => {
    return getCookieToken();
};