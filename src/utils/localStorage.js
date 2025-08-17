export const getUserFromLocalStorage = () => {
    const user = window.localStorage.getItem("user");
    return JSON.parse(user);
};

export const addUserToLocalStorage = (user) => {
    return window.localStorage.setItem("user", JSON.stringify(user));
}

export const deleteUserFromLocalStorage = () => {
    return window.localStorage.removeItem("user");
};

export const addThemeDataToLocalStorage = (theme) => {
    return window.localStorage.setItem("theme",  JSON.stringify(theme));
}

export const getThemeMode = () => {
    const theme =  window.localStorage.getItem("theme");
    return JSON.parse(theme);
}