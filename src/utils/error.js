export default function requestError (error) {
    if(error.status === 401) return new Error(`Вы не прошли авторизацию. Status: ${error.status}`);
    if(error.response?.data) return new Error(`${error.message}\n${error.response?.data.error}`);
    return new Error(`Неизвестная ошибка, попробуйте еще раз. Error: ${error.message}\nStatus Code: ${error.status}\nCode: ${error.code}`)
}