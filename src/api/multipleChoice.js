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
