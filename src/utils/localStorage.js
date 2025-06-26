export const getUserFromLocalStorage = () => {
    return window.localStorage.getItem("user");
};

export const addUserToLocalStorage = (user) => {
    return window.localStorage.setItem("user", JSON.stringify(user));
}

export const deleteUserFromLocalStorage = () => {
    return window.localStorage.removeItem("user");
};