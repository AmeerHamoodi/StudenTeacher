import login from "./login";
import signup from "./signup";
import { getClassrooms, createClassroom, getClassById, removeClassById } from "./classroom";

export default {
    login: login,
    signup: signup,
    getClassrooms: getClassrooms,
    createClassroom: createClassroom,
    getClassById: getClassById,
    removeClassById: removeClassById
}