import {jwtDecode} from "jwt-decode";

export const loggedInUser = () => {
    const keys = localStorage.getItem('@AUTH_LOCAL_STORE_KEY');
    let decoded = null;
    if (keys){
        decoded = jwtDecode(keys);
    }

    console.log(decoded)
    return decoded;
}

export const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
}
