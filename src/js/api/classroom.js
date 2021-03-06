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

const createClassroom = (data) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/class/create_class")
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
            console.log(JSON.parse(xhr.response))
        }

        xhr.send(JSON.stringify(data));
    })
};

const getClassById = (data) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/class/get_class_by_id")
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
            console.log(JSON.parse(xhr.response))
        }

        xhr.send(JSON.stringify(data));
    })
}

const removeClassById = (data) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/class/remove_class")
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
            console.log(JSON.parse(xhr.response))
        }

        xhr.send(JSON.stringify(data));
    })
}

export { getClassrooms, createClassroom, getClassById, removeClassById };