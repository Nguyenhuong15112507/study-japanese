import request from "../axios";
export function listFlashcard() {
return request({
    url: "/api/flashcard",
    method: "get",
})
}