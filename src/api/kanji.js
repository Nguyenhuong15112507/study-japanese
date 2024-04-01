import request from "../axios";
const baseUrl = "/api/kanji"
export function listKanji(params) {
  return request({
    url: baseUrl,
    method: "get",
    params
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

