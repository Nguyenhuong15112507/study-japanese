import request from "../axios";
const baseUrl = '/api/flashcard'
export function listFlashcard() {
return request({
    url: baseUrl,
    method: "get",
})
}
export function createFlashcard(data) {
    return request({
      url: baseUrl,
      method: "post",
      data,
    });
  }
  export function showDetailFlashcard(id) {
    return request({
      url: baseUrl + "/" + id,
      method: "get"
    });
  }
  export function showDetailFlashcardVocabu(id) {
    return request({
      url: baseUrl + "/vocabolary/" + id,
      method: "get"
    });
  }
  export function editFlashcard(data) {
    return request({
      url: baseUrl,
      method: "put",
      data
    });
  }