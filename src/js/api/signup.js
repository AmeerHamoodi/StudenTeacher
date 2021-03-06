const signup = (data) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/auth/signup");

        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            resolve(xhr.response);
        }
    })
};

export default signup;