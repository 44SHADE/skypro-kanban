import { notify } from "../shared/notifications";

export default function requestError (error) {
    const notifyType = "error";
    const errorCode = `ERROR: ${error.code}`;
    
    if(error.status === 401) {
        notify(errorCode, `Вы не прошли авторизацию. Status: ${error.status}`, notifyType);
        return new Error(`Вы не прошли авторизацию. Status: ${error.status}`)
    };
    if(error.response?.data) {
        notify(errorCode, `${error.response?.data.error}`, notifyType);
        return new Error(`${error.message}\n${error.response?.data.error}`)
    };
    notify("ERROR", `Неизвестная ошибка, попробуйте еще раз. Error: ${error.message}\nStatus Code: ${error.status}\nCode: ${errorCode}`, notifyType);
    return new Error(`Неизвестная ошибка, попробуйте еще раз. Error: ${error.message}\nStatus Code: ${error.status}\nCode: ${errorCode}`)
}