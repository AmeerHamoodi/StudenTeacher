const login = (data) => {
    return new Promise((resolve, reject) => {
        console.log("XHR")
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/auth/login");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        console.log(JSON.stringify(data))
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            console.log("res");
            resolve(JSON.parse(xhr.response));
        }
    })
};

export default login;