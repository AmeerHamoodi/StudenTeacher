const getClassrooms = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/class/get_self_classes")
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
            console.log(JSON.parse(xhr.response))
        }

        xhr.send();
    })
};

export { getClassrooms };