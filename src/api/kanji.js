import request from "../axios";
const baseUrl = "/api/kanji"
export function listKanji() {
  return request({
    url: baseUrl,
    method: "get",
  });
}
export function createKanji(data) {
    return request({
        url: baseUrl,
        method: "post",
        data
    })
}
export function showDetailkanji(id) {
    return request({
        url: baseUrl + "/" + id,
        method: "get"
    })
}