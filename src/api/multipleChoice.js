import request from "../axios";

export function createMultipleChoice(data) {
    return request({
        url: "/api/multiple-choice",
        method: "post",
        data,
    });
}
export function listMultipleChoice() {
    return request({
        url: "/api/multiple-choice",
        method: "get",
    });
}
export function showMultipleChoiceById(id) {
    return request({
        url: "/api/multiple-choice/" + id,
        method: "get",
    });
}
export function listQuiz() {
    return request({
        url: "/api/multiple-choice/quiz",
        method: "get",
    });
}